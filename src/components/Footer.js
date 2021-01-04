import React from 'react';
import { Link } from '@reach/router'

const Footer = () => {
    return (
        <div> 
            <Link to="/new-ad">Post Ad</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
};

export default Footer;