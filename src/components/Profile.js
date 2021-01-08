import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import profilepic from "../images/download.jpeg";
import editLogo from "../images/edit.png";
import Loading from "./Loading";
import EditProfile from "./EditProfile";
import { ProfilePicture, ProfileContainer } from "../styles";
import { formatDOB, calculateAge } from "../utils/calculateAge";
import { useContext } from "react";
import { AuthContext } from "../Authentication";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  let user;
  if (currentUser) {
    user = currentUser.email;
  }

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const userRef = db.collection("users");
      const snapshot = await userRef.where("email", "==", user).get();
      if (snapshot.empty) {
        console.log("No matching documents");
        return;
      }
      let userInfo = {};

      snapshot.forEach((doc) => {
        userInfo = doc.data();
      });

      setProfile(userInfo);

      const dob = formatDOB(userInfo.dob);

      const age = calculateAge(dob);

      setAge(age);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleEdit = (e) => {
    if (e.target.id === "show") setEdit(true);
    if (e.target.id === "hide") {
      setEdit(false);
      window.location.reload();
    }
  };

  if (loading) {
    return <Loading />;
  } else if (edit) {
    return (
      <EditProfile
        handleEdit={handleEdit}
        userInfo={profile}
        profilePicture={profilepic}
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
          onClick={(e) => handleEdit(e)}
          id='show'
        ></img>
        <div className='info'>
          <div className='fields'>Name: {profile.name}</div>
          <div className='fields'>Age: {age}</div>
          <div className='fields-gender'>Gender: {profile.gender}</div>
          <div className='fields'>{profile.bio}</div>
        </div>
      </ProfileContainer>
    );
  }
};

export default Profile;


