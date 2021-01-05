import React from "react";
import { Link } from "@reach/router";
import home from "../images/home.png";
import add from "../images/add.png";
import user from "../images/user.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='buttons-container'>
        <Link to='/home'>
          <img className='home-button' src={home} alt='home-button' />
        </Link>
        <Link to='/new-ad'>
          <img className='add-button' src={add} alt='add-button' />
        </Link>
        <Link to='/profile'>
          <img className='user-button' src={user} alt='user-button' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
