import React from 'react';
import profilepic from '../images/profilepic.png'

const AdCard = (props) => {
    const {ad} = props;
    return (
        <li className="ad_card" >
            <img src={profilepic} alt='user profile pic'/>    
            <p>{ad.username}</p>
            <h2>{ad.title}</h2>
            <span>{ad.description}</span>
        </li>
    );
};

export default AdCard;