import React, { useEffect, useState } from "react";
import { AdCardStyled } from "../styles";
import { db } from "../firebase";
import { Link } from "@reach/router";
import { calculateDistance } from "../utils/calculateDistance";
import Loading from "./Loading";
import avatar from "../images/avatar.png";
const postcodes = require("node-postcodes.io");

const AdCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(0);
  const { ad, profile } = props;

  useEffect(() => {
    getDistance(profile.postcode, ad.postcode).then((distance) => {
      setDistance(distance);
      setLoading(false);
    });
  }, []);

  async function getGeolocation(postcode) {
    const result = await postcodes.lookup(postcode).then((res) => {
      return res.result;
    });
    return result;
  }

  // .replace(/\s/g,'')

  async function getDistance(profilePostcode, adPostcode) {
    if (adPostcode && profilePostcode) {
      let pp = await getGeolocation(profilePostcode);
      let ap = await getGeolocation(adPostcode);

      return calculateDistance(
        pp.latitude,
        pp.longitude,
        ap.latitude,
        ap.longitude
      );
    }
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <AdCardStyled>
        <div className='ad_user'>
          <Link className='username' to={`/user/${ad.username}`}>
            <img src={avatar} alt='user profile pic' />
            <p>{ad.username}</p>{" "}
          </Link>
        </div>
        <div className='ad_info'>
          <h2>{ad.title}</h2>
          <span>{ad.description}</span>
          <br></br>
          <Link to={`/inbox/${ad.username}`}>
            {" "}
            <button className='emoji'>✉️</button>
          </Link>
          <button className='emoji'>❤️</button>
          {distance > 1 ? (
            <button className='distance'>{distance} miles away</button>
          ) : (
            <button className='distance'>Less than a mile away</button>
          )}
        </div>
      </AdCardStyled>
    );
  }
};

export default AdCard;
