import React, { useState } from 'react';
import db from '../firebase'
import firebase from 'firebase'

const PostAd = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const user = "grandpajoe"
    const postcode =  new firebase.firestore.GeoPoint(53.7980924, -1.5337288)
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
      
        db.settings({
            timestampsInSnapshots: true
        })
        const adRef = db.collection("ads").add({
            title: title,
            description: body,
            username: user,
            "created at": timestamp,
            postcode: postcode   
        })
        setTitle("")
        setBody("")
    }
    console.log(Date().slice(4, 15))

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Title</p>
                <input type="text" required onChange={(e) => setTitle(e.target.value)}/>
                <p>Body</p>
                <textarea type="text" required onChange={(e) => setBody(e.target.value)}/>
                <input type="submit"/>
            </form>
            
        </div>
    );
};

export default PostAd;

