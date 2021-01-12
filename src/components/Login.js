import React, { useCallback, useContext, useState } from 'react';
import { Redirect, navigate } from "@reach/router";
import app, {auth} from "../firebase.js";
import { AuthContext } from "../Authentication.js";

const Login = (props) => {
    const [error, setError] = useState()

    const handlePostLogin = () => {
      console.log("in handle post login")
      if (!error) {
        props.setLogin(true)
        navigate("/home")
      }
    }

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value).then(()=>{
                handlePostLogin()
              })
          } catch (err) {
            setError(err)
            alert(err);
          }


        }, []
      );

      console.log(auth.currentUser)
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