import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Authentication'
import { navigate, Link } from "@reach/router";
import {db, auth} from "../firebase";
import app from "../firebase.js";
import {LoginContainer} from '../styles'


const InputUserDetails = (props) => {
    const context  = useContext(AuthContext)
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [gender, setGender] = useState()
    const [postcode, setPostcode] = useState()
    const [bio, setBio] = useState()
    const [dob, setDob] = useState()
    const [error, setError] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        const { password } = e.target.elements

        db.collection("users").doc(username).set({
            email: email,
            name: name,
            username: username,
            gender: gender,
            postcode: postcode,
            bio: bio,
            dob: dob,
            id: username
        }).then(() => {
            async function signIn() {
                try {
                    await app
                        .auth()
                        .createUserWithEmailAndPassword(email, password.value).then(()=>{
                            navigate("/home")
                        })
                } catch (err) {
                    setError(err)
                    alert(err)
                }
            }
          signIn()
          props.setLogin(true)
        })
    }

    return (
        <LoginContainer>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Full name: </p>
                <input type="text" required onChange={(e) => setName(e.target.value)}/>
                <p>Username:</p>
                <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                <p>Email: </p>
                <input type="text" required id="email" onChange={(e) => setEmail(e.target.value)} />
                <p>Password: </p>
                <input type="text" required id="password"/>
                <p>Gender:</p>
                <input type="text" required onChange={(e) => setGender(e.target.value)}/>
                <p>Postcode:</p>
                <input type="text" required onChange={(e) => setPostcode(e.target.value)}/>
                <p>Bio:</p>
                <input type="text" required onChange={(e) => setBio(e.target.value)}/>
                <p>Dob:</p>
                <input type="date" required onChange={(e) => setDob(e.target.value)}/>
                <button type="submit">Sign in</button>
            </form>
            <p>Already have an account? Login <Link to="/login">here!</Link></p>
        </LoginContainer>
    );
};

export default InputUserDetails;