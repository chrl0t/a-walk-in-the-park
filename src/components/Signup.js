import React, { useCallback, useState} from "react";
import { Link, navigate } from '@reach/router'
import app from "../firebase.js";

const Signup = (props) => {
    const [error, setError] = useState()

    const handleSignup = useCallback(async e => {
        e.preventDefault()
        const { email, password } = e.target.elements

        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value).then(()=>{
                    navigate("/signUpDetails")
                })
        } catch (err) {
            setError(err)
            alert(err)
        }
        if (!error) navigate("/signUpDetails")

    }, [])

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => handleSignup(e)}>
                <p>First Name: </p>
                <input type="text" required id="fname"/>
                <p>Last Name: </p>
                <input type="text" required id="lname"/>
                <p>Email: </p>
                <input type="text" required id="email"/>
                <p>Password: </p>
                <input type="password" required id="password"/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;