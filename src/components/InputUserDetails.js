import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Authentication'
import { navigate } from "@reach/router";
import {db, auth} from "../firebase";

const InputUserDetails = (props) => {
    const { currentUser } = useContext(AuthContext)
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [gender, setGender] = useState()
    const [postcode, setPostcode] = useState()
    const [bio, setBio] = useState()
    const [dob, setDob] = useState()


    useEffect(() => {
        console.log(auth.currentUser)
        setEmail(auth.currentUser.email)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const adRef = db.collection("users").doc(username).set({
            email: email,
            username: username,
            gender: gender,
            postcode: postcode,
            bio: bio,
            dob: dob,
            id: username
          });

        props.setLogin(true)
    }

    return (
        <div>
            {currentUser ? <p>{currentUser.email}</p> : null}
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Username:</p>
                <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                <p>Gender:</p>
                <input type="text" required onChange={(e) => setGender(e.target.value)}/>
                <p>Postcode:</p>
                <input type="text" required onChange={(e) => setPostcode(e.target.value)}/>
                <p>Bio:</p>
                <input type="text" required onChange={(e) => setBio(e.target.value)}/>
                <p>Dob:</p>
                <input type="date" required onChange={(e) => setDob(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default InputUserDetails;