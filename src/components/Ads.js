import React, { useEffect, useState } from "react";
import db from "../firebase";
import Loading from "./Loading";
import AdCard from "./AdCard";
import { AdList } from "../styles";

const Ads = () => {
  const user = 'grandpajoe';
  const [ads, setAds] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    async function fetchData(){
      const adsRef = db.collection("ads");
      const snapshot = await adsRef.get();
      const fetchedAds = [];
      snapshot.forEach((doc) => {
        const ad = doc.data();
        fetchedAds.push(ad);
      });
      setAds(fetchedAds);
    };
    async function fetchUser(){
      const userRef = db.collection('users')
      const snapshot = await userRef.where('username', '==', user).get()
      if (snapshot.empty) {
        console.log("No matching documents")
        return;
      }
      let userInfo = {}
      snapshot.forEach(doc => {
        userInfo = doc.data()
      })
      setProfile(userInfo)
      setLoading(false)
    }
    Promise.all([fetchData(), fetchUser()]);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <AdList>
        <h1>Find a walking buddy:</h1>
        {ads.map((ad) => {
          return <AdCard ad={ad} profile={profile}/>;
        })}
      </AdList>
    );
  }
};

export default Ads;
