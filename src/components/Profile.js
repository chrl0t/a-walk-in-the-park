import React, { useEffect, useState, useCallback } from "react";
import profilepic from "../images/download.jpeg";
import editLogo from "../images/edit.png";
import Loading from "./Loading";
import EditProfile from "./EditProfile";
import { ProfilePicture, ProfileContainer } from "../styles";
import { formatDOB, calculateAge } from "../utils/calculateAge";
import { useContext } from "react";
import { AuthContext } from "../Authentication";

import { db } from "../firebase";

import app from "../firebase";


const Profile = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(currentUser);
  const [bio, setBio] = useState(currentUser.bio);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [age, setAge] = useState(0);
  const [ads, setAds] = useState([])
  const [err, setErr] = useState()

  useEffect(() => {
    const dob = formatDOB(currentUser.dob);
    const age = calculateAge(dob);

    async function fetchData() {
      const adsRef = db.collection("ads").where("username", "==", currentUser.username)
      const snapshot = await adsRef.orderBy("created at", "desc").get();
      const fetchedAds = [];
      snapshot.forEach((doc) => {
        const ad = doc.data();
        fetchedAds.push(ad);
      });
      setAds(fetchedAds);
    }
    fetchData();
    console.log(ads)
    setAge(age);
  }, []);

  const updateBio = (newBio) => {
    setBio(newBio);
  };

  const handleEdit = (bool) => {
    setEdit(bool)

  };

  const handlePostLogout = () => {
    console.log("in handle post login");
    if (!err) {
      props.setLoggedIn(false);
    }
  };

  const handleLogout = useCallback(async (e) => {
    try {
      await app
        .auth()
        .signOut()
        .then(() => {
          handlePostLogout();
        });
    } catch (error) {
      setErr(err);
      alert(err);
    }
  });

  if (loading) {
    return <Loading />;
  } else if (edit) {
    return (
      <EditProfile
        handleEdit={handleEdit}
        userInfo={profile}
        bio={bio}
        profilePicture={profilepic}
        updateBio={updateBio}
      />
    );
  } else {
    return (
      <div>
        <ProfileContainer>
          <button className='logout-button' onClick={handleLogout}>
            Sign out
          </button>
          <h2>{profile.username}</h2>
          <ProfilePicture
            src={profilepic}
            width='100px'
            height='100px'
          ></ProfilePicture>
          <img
            src={editLogo}
            alt='edit'
            width='20px'
            height='20px'
            onClick={(e) => handleEdit(e)}
            id='show'
          ></img>
          <div className='info'>
            <div className='fields'>Name: {profile.name}</div>
            <div className='fields'>Age: {age}</div>
            <div className='fields-gender'>Gender: {profile.gender}</div>
            <div className='fields'>Bio: {bio}</div>
          </div>
        </ProfileContainer>
      </div>
    );
  }
};

export default Profile;
