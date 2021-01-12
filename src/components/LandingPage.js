import React from "react";
import logo from "../images/logo.png";
import { LandingPageStyled } from "../styles";
import { Link } from "@reach/router";

const LandingPage = () => {
  return (
    <LandingPageStyled className='landing'>
      <img className='logo' src={logo} alt='logo' />
      <p>
        A Walk in the Park is social app where you can find and connect with
        people wanting to go on a walk!
      </p>
      <Link to='/login'>
        {" "}
        <button className='login-button'>Login</button>
      </Link>
      <Link to='/signUpDetails'>
        {" "}
        <button className='register-button'>I'm new here</button>
      </Link>
    </LandingPageStyled>
  );
};

export default LandingPage;
