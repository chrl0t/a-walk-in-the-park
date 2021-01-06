import React, { useEffect, useState } from "react";
import db from "../firebase";
import Loading from "./Loading";
import AdCard from "./AdCard";
import { AdList } from "../styles";

const Ads = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wantsChild, setWantsChild] = useState("")
  const [wantsDog, setWantsDog] = useState("")

  useEffect(() => {
    async function fetchData() {
      const adsRef = db.collection("ads");
      const snapshot = await adsRef.orderBy("created at", "desc").get();
      const fetchedAds = [];
      snapshot.forEach((doc) => {
        const ad = doc.data();
        fetchedAds.push(ad);
      });
      setAds(fetchedAds);
      setLoading(false);
    }
    fetchData()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    let dog = true;
    let child = true;

    if (wantsChild !== "Don't mind" && wantsDog !== "Don't mind") {
      if (wantsChild === "Yes" && wantsDog === "No") dog = false;
      if (wantsChild === "No" && wantsDog === "Yes") child = false;
      if (wantsChild === "No" && wantsDog === "No") {
        dog = false;
        child = false;
      } 

      async function fetchData() {
        const adsRef = db.collection("ads").where("hasChild", "==", child).where("hasDog", "==", dog)
        const snapshot = await adsRef.orderBy("created at", "desc").get();
        const fetchedAds = [];
        snapshot.forEach((doc) => {
          const ad = doc.data();
            fetchedAds.push(ad);
          });
          setAds(fetchedAds);
          setLoading(false);
        }
      fetchData()
    } else if (wantsChild === "Don't mind" && wantsDog === "Don't mind") {
        async function fetchData() {
          const adsRef = db.collection("ads")
          const snapshot = await adsRef.orderBy("created at", "desc").get();
          const fetchedAds = [];
          snapshot.forEach((doc) => {
            const ad = doc.data();
            fetchedAds.push(ad);
          });
          setAds(fetchedAds);
          setLoading(false);
        }
        fetchData()
      } else {
        let property = "hasChild";
        let dogOrChild = true
        if (wantsChild === "No") dogOrChild= false;
        if (wantsDog === "Yes") {
          property = "hasDog"
        }
        if (wantsDog === "No") {
          dogOrChild = false;
          property = "hasDog"
        }
        async function fetchData() {
          const adsRef = db.collection("ads").where(property, "==", dogOrChild)
          const snapshot = await adsRef.orderBy("created at", "desc").get();
          const fetchedAds = [];
          snapshot.forEach((doc) => {
            const ad = doc.data();
              fetchedAds.push(ad);
            });
            setAds(fetchedAds);
            setLoading(false);
          }
        fetchData()
      }
  }
  

  if (loading) {
    return <Loading />;
  } else {
    return (
      <AdList>
        <h1>Find a walking buddy:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>Kids</p>
            <select onChange={(e) => setWantsChild(e.target.value)}>
              {console.log(wantsChild)}
              <option>Yes</option>
              <option>No</option>
              <option>Don't mind</option>
            </select>
          <p>Dogs</p>
          <select onChange={(e) => setWantsDog(e.target.value)}>
            {console.log(wantsDog)}
              <option>Yes</option>
              <option>No</option>
              <option>Don't mind</option>
            </select>
          <input type="submit"/>
        </form>
        {ads.map((ad) => {
          return <AdCard ad={ad} />;
        })}
      </AdList>
    );
  }
};

export default Ads;
