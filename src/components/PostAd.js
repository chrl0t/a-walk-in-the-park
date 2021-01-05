import React, { useState } from 'react';
import db from '../firebase'
import firebase from 'firebase'
import { navigate } from "@reach/router"

const PostAd = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const user = "grandpajoe"
    const postcode =  new firebase.firestore.GeoPoint(53.7980924, -1.5337288)
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
      
        const adRef = db.collection("ads").add({
            title: title,
            description: body,
            username: user,
            "created at": timestamp,
            postcode: postcode   
        })
        
        setTitle("")
        setBody("")

        navigate(`/home`)
    }
    console.log(Date().slice(4, 15))

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Title</p>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
                <p>Body</p>
                <textarea type="text" value={body} required onChange={(e) => setBody(e.target.value)}/>
                <input type="submit"/>
            </form>
            
        </div>
    );
};

export default PostAd;

