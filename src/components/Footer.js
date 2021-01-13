import React from "react";
import { Link } from "@reach/router";
import { FooterStyled } from "../styles";
import home from "../images/home.png";
import add from "../images/add.png";
import user from "../images/user.png";
import message from "../images/message.png";
import favourite from "../images/favourite.png";
import { useContext } from "react";
import { AuthContext } from "../Authentication";

const Footer = () => {
  return (
    <FooterStyled className='footer'>
      <div className='buttons-container'>
        <Link to='/home'>
          <img className='home-button' src={home} alt='home-button' />
        </Link>
        <Link to='/messages'>
          <img className='message-button' src={message} alt='message-button' />
        </Link>
        <Link to='/new-ad'>
          <img className='add-button' src={add} alt='add-button' />
        </Link>
        <Link to='/map'>
          <img
            className='favourite-button'
            src={favourite}
            alt='favourite-button'
          />
        </Link>
        <Link to='/profile'>
          <img className='user-button' src={user} alt='user-button' />
        </Link>
      </div>
    </FooterStyled>
  );
};

export default Footer;
