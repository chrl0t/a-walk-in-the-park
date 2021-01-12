import React from 'react';
import {ProfileAdCardsContainer} from '../styles'

const ProfileAdCards = (props) => {
    const {ad} = props 
    return (
        <ProfileAdCardsContainer>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
        </ProfileAdCardsContainer>
    );
};

export default ProfileAdCards;