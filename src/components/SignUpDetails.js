import React from 'react';
import { LoginContainer } from '../styles';

const SignUpDetails = (props) => {

    return (
        <LoginContainer>
            <h1>Sign Up</h1>
                <p>Username:</p>
                <input type="text" required onChange={(e) => props.setUsername(e.target.value)}/>
                <p>Email: </p>
                <input type="text" required id="email" onChange={(e) => props.setEmail(e.target.value)} />
                <p>Password: </p>
                <input type="text" required id="password" onChange={(e) => props.setPassword(e.target.value)}/>
                <button onClick={() => props.setNextPage(true)}>Next Page</button>
        </LoginContainer>
    );
};

export default SignUpDetails;