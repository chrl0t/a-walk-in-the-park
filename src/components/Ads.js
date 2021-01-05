import React, { useEffect, useState } from 'react';
import db from '../firebase'
import Loading from './Loading'

const Ads = () => {
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const recipesRef = db.collection('ads')
        const snapshot = await recipesRef.get()
        const fetchedAds = [];
        snapshot.forEach(doc => {
            const ad = doc.data()
            fetchedAds.push(ad)
            
        })
        setAds(fetchedAds)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div>
                <ul>
                    {ads.map((ad) => {
                        return (
                            <li>    
                                <h2>{ad.title}</h2>
                                <p>{ad.description}</p>
                                <p>{ad.username}</p>
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        );
    }
};


export default Ads;