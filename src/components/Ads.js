import React, { useEffect, useState } from "react";
import {db} from "../firebase";
import Loading from "./Loading";
import AdCard from "./AdCard";
import { AdList } from "../styles";
import { useContext } from 'react'
import {AuthContext} from '../Authentication'

const Ads = () => {
  const user = "grandpajoe";
  const [ads, setAds] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [wantsChild, setWantsChild] = useState("");
  const [wantsDog, setWantsDog] = useState("");

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
    }
    async function fetchUser() {
      const userRef = db.collection("users");
      const snapshot = await userRef.where("username", "==", user).get();
      if (snapshot.empty) {
        console.log("No matching documents");
        return;
      }
      let userInfo = {};
      snapshot.forEach((doc) => {
        userInfo = doc.data();
      });
      setProfile(userInfo);
      setLoading(false);
    }
    Promise.all([fetchData(), fetchUser()]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

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
        const adsRef = db
          .collection("ads")
          .where("hasChild", "==", child)
          .where("hasDog", "==", dog);
        const snapshot = await adsRef.orderBy("created at", "desc").get();
        const fetchedAds = [];
        snapshot.forEach((doc) => {
          const ad = doc.data();
          fetchedAds.push(ad);
        });
        setAds(fetchedAds);
        setLoading(false);
      }
      fetchData();
    } else if (wantsChild === "Don't mind" && wantsDog === "Don't mind") {
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
      fetchData();
    } else {
      let property = "hasChild";
      let dogOrChild = true;
      if (wantsChild === "No") dogOrChild = false;
      if (wantsDog === "Yes") {
        property = "hasDog";
      }
      if (wantsDog === "No") {
        dogOrChild = false;
        property = "hasDog";
      }
      async function fetchData() {
        const adsRef = db.collection("ads").where(property, "==", dogOrChild);
        const snapshot = await adsRef.orderBy("created at", "desc").get();
        const fetchedAds = [];
        snapshot.forEach((doc) => {
          const ad = doc.data();
          fetchedAds.push(ad);
        });
        setAds(fetchedAds);
        setLoading(false);
      }
      fetchData();
    }
  };



  const { currentUser } = useContext(AuthContext)


  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
      {currentUser ? <p>Signed in with {currentUser.email}</p> : null}
      
      <AdList>
        <h1>Find a walking buddy:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <p className='question'>
            Do you want to walk with someone with children?
          </p>
          <select
            className='select-box'
            onChange={(e) => setWantsChild(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
            <option>Don't mind</option>
          </select>
          <p className='question'>
            Do you want to walk with someone with a dog?
          </p>
          <select
            className='select-box'
            onChange={(e) => setWantsDog(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
            <option>Don't mind</option>
          </select>
          <br></br>
          <input type='submit' className='submit-button' />
        </form>
        {ads.map((ad) => {
          return <AdCard ad={ad} profile={profile} />;
        })}
      </AdList>
      </>
    );
  }
};

export default Ads;
