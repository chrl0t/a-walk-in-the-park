import React, { useEffect, useState } from "react";
import db from "../firebase";
import Loading from "./Loading";
import AdCard from "./AdCard";
import { AdList } from "../styles";

const Ads = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [wantsChild, setWantsChild];

  useEffect(async () => {
    const adsRef = db.collection("ads");
    const snapshot = await adsRef.orderBy("created at", "desc").get();
    const fetchedAds = [];
    snapshot.forEach((doc) => {
      const ad = doc.data();
      fetchedAds.push(ad);
    });
    setAds(fetchedAds);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <AdList>
        <h1>Find a walking buddy:</h1>
        {ads.map((ad) => {
          return <AdCard ad={ad} />;
        })}
      </AdList>
    );
  }
};

export default Ads;
