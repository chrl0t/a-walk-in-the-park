import React, { useEffect, useState } from 'react';
import db from '../firebase'
import { ProfilePicture, ProfileContainer } from '../styles'

import { formatDOB, calculateAge } from '../utils/calculateAge'
  import Loading from './Loading';


const UserPage = (props) => {
    const user = props.username
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const [age, setAge] = useState(0)


    useEffect( () => {
        async function fetchData(){
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
        
        const dob = formatDOB(userInfo.dob)
        
        const age = calculateAge(dob)

        setAge(age)
        setLoading(false)
    } fetchData();
    }, [user])

if (loading) {
        return (
            <Loading/>
        )
    }   else {
    return (
        <ProfileContainer>
            <h2>{profile.name}</h2>
            <ProfilePicture src={profile.picture} width="100px"></ProfilePicture>
            <p>Username: {profile.username}</p>
            <p>Dob: {profile.dob}</p>
            <p>Age: {age}</p>
            <p>Bio: {profile.bio}</p>
        </ProfileContainer>
    )}
};

export default UserPage;   