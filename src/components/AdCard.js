import React from "react";
import profilepic from "../images/profilepic.png";
import { AdCardStyled } from "../styles";
import { calculateDistance } from "../utils/calculateDistance";
import { Link } from "@reach/router";

const AdCard = (props) => {
  let lat = 0;
  let long = 0;

  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });

  const { ad } = props;

  return (
    <AdCardStyled>
      <div className='ad_user'>
        <Link className='username' to={`/user/${ad.username}`}>
          <img src={profilepic} alt='user profile pic' />
          <p>{ad.username}</p>{" "}
        </Link>
      </div>
      <div className='ad_info'>
        <h2>{ad.title}</h2>
        <br></br>
        <span>{ad.description}</span>
        <br></br>
        <button>Message</button>
        <button>♡</button>
        {/* <button>{calculateDistance(lat, long, ad.postcode.x_, ad.postcode.N_)}</button> */}
      </div>
    </AdCardStyled>
  );
};

export default AdCard;
