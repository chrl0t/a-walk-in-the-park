import React, { useEffect, useState } from 'react';
import db from '../firebase'
import profilepic from '../images/download.jpeg'
import editLogo from '../images/edit.png'
import Loading from './Loading'
import EditProfile from './EditProfile'
import { ProfilePicture, ProfileContainer } from '../styles'

const Profile = () => {
    const user = 'grandpajoe'
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)


    useEffect(async () => {
        const userRef = db.collection('users')
        const snapshot = await userRef.where('username', '==', user).get()
        if (snapshot.empty) {
            console.log("No matching documents")
            return;
        }
        let userInfo = {}

        snapshot.forEach(doc => {
            userInfo = doc.data()
        })
        
        setProfile(userInfo)
        setLoading(false)
    }, [])

    const handleEdit = (e) => {
        if (e.target.id === "show") setEdit(true)
        if (e.target.id === "hide") {
            setEdit(false)
            window.location.reload()
        }  
    }

    if (loading) {
        return (
            <Loading/>
        )
    }   else if (edit) {
        return (
            <EditProfile handleEdit={handleEdit} userInfo={profile} profilePicture={profilepic}/>
        )
    } else {
        return (
            <ProfileContainer>
                <h2>{profile.name}</h2>
                <ProfilePicture src={profilepic} width="100px" height="100px"></ProfilePicture>
                <img src={editLogo} alt="edit" width="20px" height="20px" onClick={(e) => handleEdit(e)} id="show"></img>
                <p>Username: {profile.username}</p>
                <p>Dob: {profile.dob}</p>
                <p>Bio: {profile.bio}</p>
            </ProfileContainer>
        );
    }
};

export default Profile;