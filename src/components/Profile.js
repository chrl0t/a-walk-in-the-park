import React, { useEffect, useState } from "react";
import profilepic from "../images/download.jpeg";
import editLogo from "../images/edit.png";
import Loading from "./Loading";
import EditProfile from "./EditProfile";
import { ProfilePicture, ProfileContainer } from "../styles";
import { formatDOB, calculateAge } from "../utils/calculateAge";
import { useContext } from "react";
import { AuthContext } from "../Authentication";
import { db } from "../firebase";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(currentUser);
  const [bio, setBio] = useState(currentUser.bio)
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [age, setAge] = useState(0);
  const [ads, setAds] = useState([])

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
    setBio(newBio)
  }

  const handleEdit = (bool) => {
    setEdit(bool)

  };

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
      <ProfileContainer>
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
          onClick={() => handleEdit(true)}
          id='show'
        ></img>
        <div className='info'>
          <div className='fields'>Name: {profile.name}</div>
          <div className='fields'>Age: {age}</div>
          <div className='fields-gender'>Gender: {profile.gender}</div>
          <div className='fields'>Bio: {bio}</div>
        </div>
        
        <h2>My ads: </h2>
        <ul>
          {ads.map(ad => {
            <li>
              <p>{ad.title}</p>
            </li>
          })}
        </ul>
      </ProfileContainer>
    );
  }
};

export default Profile;


