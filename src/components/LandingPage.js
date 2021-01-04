import React from 'react';
import {Link} from '@reach/router'

const LandingPage = () => {
    return (
        <div>
            <p>Landing Page!</p>
            <Link to="/home">Enter Site</Link>
        </div>
    );
};

export default LandingPage;