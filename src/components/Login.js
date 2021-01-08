import React, { useCallback, useContext, useState } from 'react';
import { Redirect, navigate } from "@reach/router";
import app from "../firebase.js";
import { AuthContext } from "../Authentication.js";

const Login = ({history}) => {
    const [error, setError] = useState()

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            
          } catch (err) {
            setError(err)
            alert(err);
          }

          if (!error) navigate("/home")
        },

        [history]
      );

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser, "<<< in login")
   
    // if (currentUser) {
    //     return <Redirect to="/" />
    // } else {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleLogin(e)}>
                    <p>Email: </p>
                    <input type="text" required id="email"/>
                    <p>Password: </p>
                    <input type="password" required id="password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    // }

  
};

export default Login;