import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../Authentication";
import {db} from '../firebase'
import { ProfilePicture, ProfileContainer } from '../styles'
import Map from './Map/Map';
import { formatDOB, calculateAge } from '../utils/calculateAge'
import Loading from './Loading';
import avatar from "../images/avatar.png";
import * as geolib from 'geolib';
const postcodes = require("node-postcodes.io");


const UserPage = (props) => {
  const user = props.username;
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(currentUser);
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState(0);
  const [center, setCenter] = useState({latitude:0, longitude:0});

  useEffect(() => {
    async function fetchData() {
      const userRef = db.collection("users");
      const snapshot = await userRef.where("username", "==", user).get();
      if (snapshot.empty) {
        console.log("No matching documents");
        return;
      }
      let userInfo = {};
      snapshot.forEach((doc) => {
        userInfo = doc.data();
      });
      setUserProfile(userInfo);
      const dob = formatDOB(userInfo.dob);
      const age = calculateAge(dob);
      setAge(age);
      await getCenterLatLng(profile.postcode, userInfo.postcode).then((res) => {
        console.log(res);
        setCenter({latitude: res.latitude, longitude:res.longitude});
      });
      setLoading(false);
    }
    fetchData();
  }, [user]);

  async function getGeolocation(postcode) {
    const result = await postcodes.lookup(postcode).then((res) => {
      return res.result;
    });
    return result;
  }

  async function getCenterLatLng(profilePostcode, userPostcode) {
    if (profilePostcode && userPostcode) {
      let pp = await getGeolocation(profilePostcode);
      let up = await getGeolocation(userPostcode);
      return geolib.getCenter([
        { latitude: pp.latitude, longitude: pp.longitude },
        { latitude: up.latitude, longitude: up.longitude },
      ])
    }
  }

  if (loading && center !== {latitude: 0, longitude: 0}) {
    return <Loading />;
  } else {
    return (
      <ProfileContainer>
        <h2>{userProfile.username}</h2>
        <ProfilePicture src={avatar} width='100px'></ProfilePicture>
        <div className='info'>
          <div className='fields'>Name: {userProfile.name}</div>
          <div className='fields'>Age: {age}</div>
          <div className='fields-gender'>Gender: {userProfile.gender}</div>
          <div className='fields'>{userProfile.bio}</div>
          <Map centerLatitude={center.latitude} centerLongitude={center.longitude}/>
        </div>
      </ProfileContainer>
    );
  }
};

export default UserPage;
