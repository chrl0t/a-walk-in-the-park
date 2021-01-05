
import React, { useState } from "react";
import db from "../firebase";
import firebase from "firebase";
import { AdForm } from "../styles";

const PostAd = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const user = "grandpajoe";
  const postcode = new firebase.firestore.GeoPoint(53.7980924, -1.5337288);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.settings({
      timestampsInSnapshots: true
    });
    const adRef = db.collection("ads").add({
      title: title,
      description: body,
      username: user,
      "created at": timestamp,
      postcode: postcode
    });
    setTitle("");
    setBody("");
  };

  return (
    <AdForm>
      <form className='ad-form' onSubmit={(e) => handleSubmit(e)}>
        <h2>Ad Title</h2>
        <input
          type='text'
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <h2>Ad</h2>
        <textarea
          type='text'
          required
          onChange={(e) => setBody(e.target.value)}
        />
        <br></br>
        <br></br>
        <input type='submit' className='submit-button' />
      </form>
    </AdForm>
  );
};

export default PostAd;
