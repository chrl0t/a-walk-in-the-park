import React, { useEffect, useState, useContext } from "react";
import { AdCardStyled } from "../styles";
import { db } from "../firebase";
import { Link } from "@reach/router";
import { calculateDistance } from "../utils/calculateDistance";
import Loading from "./Loading";
import avatar from "../images/avatar.png";
import { AuthContext } from "../Authentication";
const postcodes = require("node-postcodes.io");

const AdCard = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [profile] = useState(currentUser);
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState(0);
  const { ad } = props;

  useEffect(() => {
    getDistance(profile.postcode, ad.postcode).then((distance) => {
      setDistance(distance);
      setLoading(false);
    });
  });

  async function getGeolocation(postcode) {
    const result = await postcodes.lookup(postcode).then((res) => {
      return res.result;
    });
    return result;
  }

  async function getDistance(profilePostcode, userPostcode) {
    if (profilePostcode && userPostcode) {
      let pp = await getGeolocation(profilePostcode);
      let up = await getGeolocation(userPostcode);

      return calculateDistance(
        pp.latitude,
        pp.longitude,
        up.latitude,
        up.longitude
      );
    }
  }

  const deleteAd = () => {
    let adToDelete = db
      .collection("ads")
      .where("title", "==", ad.title)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          let deletedDoc = db.collection("ads").doc(doc.id).delete();
        });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
    props.handleDelete(ad.title);
  };

  if (loading) {
    return <Loading />;
  } else {
    // console.log(ad.created_at.seconds);
    // let date = new Date();
    // date.setSeconds(ad.created_at.seconds);
    // console.log(date);
    return (
      <AdCardStyled>
        <div className='ad_user'>
          <Link className='username' to={`/user/${ad.username}`}>
            <img src={avatar} alt='user profile pic' />
            <p>{ad.username}</p>{" "}
          </Link>
        </div>
        <div className='ad_info'>
          {ad.username === profile.username ? (
            <div className='delete-button' onClick={() => deleteAd()}>
              ❌
            </div>
          ) : null}
          <h2>
            {ad.title} {ad.created_at.seconds}
          </h2>
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
            <button className='distance'>Under a mile away</button>
          )}
        </div>
      </AdCardStyled>
    );
  }
};

export default AdCard;
