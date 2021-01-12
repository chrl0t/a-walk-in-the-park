import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Authentication'
import { navigate, Link } from "@reach/router";
import {db, auth} from "../firebase";
import app from "../firebase.js";
import {LoginContainer} from '../styles'
import SignUpDetails from './SignUpDetails'


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
    const [nextPage, setNextPage] = useState(false)
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

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
                        .createUserWithEmailAndPassword(email, password).then(()=>{
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

    if (!nextPage) {
        return (
            <>
            <SignUpDetails setUsername={setUsername} setEmail={setEmail} setPassword={setPassword}  setNextPage={setNextPage}/>
            <p>Already have an account? Login <Link to="/login">here!</Link></p>
            </>
        )
    } else {
        return (
            <LoginContainer>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Full name: </p>
                <input type="text" required onChange={(e) => setName(e.target.value)}/>
                <p>Gender:</p>
                <input type="text" required onChange={(e) => setGender(e.target.value)}/>
                <p>Postcode:</p>
                <input type="text" required onChange={(e) => setPostcode(e.target.value)}/>
                <p>Bio:</p>
                <input type="text" required onChange={(e) => setBio(e.target.value)}/>
                <p>Dob:</p>
                <input type="date" required onChange={(e) => setDob(e.target.value)}/>
                <button onClick={() => setNextPage(false)}>Go Back</button>
                <button type="submit">Sign in</button>
            </form>
            <p>Already have an account? Login <Link to="/login">here!</Link></p>
        </LoginContainer>
        )
    }
};

export default InputUserDetails;