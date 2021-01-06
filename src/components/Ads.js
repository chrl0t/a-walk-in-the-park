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
    if (wantsChild === "Yes" && wantsDog === "Yes") {
      async function fetchData() {
          const adsRef = db.collection("ads").where("hasChild", "==", true).where("hasDog", "==", true)
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
    } else if (wantsChild === "Yes" && wantsDog === "No") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasChild", "==", true).where("hasDog", "==", false)
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
    } else if (wantsChild === "Yes" && wantsDog === "Don't mind") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasChild", "==", true)
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
    } else if (wantsChild === "No" && wantsDog === "Don't mind") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasChild", "==", false)
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
    } else if (wantsChild === "No" && wantsDog === "Yes") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasChild", "==", false).where("hasDog", "==", true)
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
    } else if (wantsChild === "Don't mind" && wantsDog === "Yes") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasDog", "==", true)
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
    } else if (wantsChild === "Don't mind" && wantsDog === "No") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasDog", "==", false)
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
    } else if (wantsChild === "No" && wantsDog === "No") {
      async function fetchData() {
        const adsRef = db.collection("ads").where("hasChild", "==", false).where("hasDog", "==", false)
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
