
import React, { useEffect, useState } from 'react';
import db from '../firebase';
import Loading from './Loading';
import AdCard from './AdCard';
import {AdList, AdCardStyled} from '../styles';

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
                <AdList>
                    {ads.map((ad) => {
                        return (
                            <AdCardStyled>
                                <AdCard ad={ad} key={ad.username}/>
                            </AdCardStyled>
                        )
                    })}
                </AdList>
                
            </div>
        );
    }
};

export default Ads;
