import React, { useState } from 'react';
import {ProfileContainer, ProfilePicture} from '../styles'
import db from '../firebase'

const EditProfile = (props) => {
    const [username, setUsername] = useState(props.username)
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState(props.bio)

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection("users").doc("grandpajoe").update({
            // username: username,
            bio: bio
        })
    }
    return (
        <ProfileContainer>
            <h2>Edit Profile</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ProfilePicture src={props.profilePicture} width="100px" height="100px"></ProfilePicture>
                {/* <p>Username: </p> <input type="text" value={username} placeholder={props.userInfo.username} onChange={(e) => setUsername(e.target.value)}/> */}
                {/* <p>Password: </p> <input type="text" value={password} placeholder="*****" onChange={(e) => setPassword(e.target.value)}/><br/> */}
                <p>Bio: </p> <textarea type="text" value={bio} placeholder={props.userInfo.bio} onChange={(e) => setBio(e.target.value)}/><br/>
                <input type="submit"/> 
            </form>

            <button id="hide" onClick={(e) => props.handleEdit(e)}>Done</button>
        </ProfileContainer>
    );
};

export default EditProfile;