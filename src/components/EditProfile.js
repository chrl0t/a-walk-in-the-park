import React, { useState } from "react";
import { ProfileContainer, ProfilePicture } from "../styles";
import { db } from "../firebase";
import { navigate } from "@reach/router";

const EditProfile = (props) => {
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState(props.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users").doc(props.userInfo.username).update({
      // username: username,
      bio: bio
    });
    
    props.updateBio(bio)
    props.handleEdit(false)
  };
  return (
    <ProfileContainer>
      <h2>Edit Profile</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ProfilePicture
          src={props.profilePicture}
          width='100px'
          height='100px'
        ></ProfilePicture>
        {/* <p>Username: </p> <input type="text" value={username} placeholder={props.userInfo.username} onChange={(e) => setUsername(e.target.value)}/> */}
        {/* <p>Password: </p> <input type="text" value={password} placeholder="*****" onChange={(e) => setPassword(e.target.value)}/><br/> */}
        <h3>Update your Bio: </h3>{" "}
        <textarea
          type='text'
          value={bio}
          placeholder={props.bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <br />
        <input type="submit"/>
      </form>
    </ProfileContainer>
  );
};

export default EditProfile;
