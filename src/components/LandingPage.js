import React from "react";
import logo from "../images/logo.png";
import { LandingPageStyled } from "../styles";
import { Link } from "@reach/router";

const LandingPage = () => {
  return (
    <LandingPageStyled className='landing'>
      <img className='logo' src={logo} alt='logo' />
      <p>
        I'm baby truffaut iPhone tofu vegan butcher XOXO. Sustainable cardigan
        hoodie tumblr pinterest fashion axe. 3 wolf moon pour-over meh pitchfork
        try-hard ennui.
      </p>
      <Link to='/login'>
        {" "}
        <button className='login-button'>Login</button>
      </Link>
      <Link to='/signUp'>
        {" "}
        <button className='register-button'>I'm new here</button>
      </Link>
    </LandingPageStyled>
  );
};

export default LandingPage;
