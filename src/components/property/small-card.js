import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SmallCardImg from './small-cardImg';

const SmallCard = (props) => {

    const [featureImg, setFeatureImg] = useState()

    useEffect(() => {
        axios.get(`https://verdalastage.bison-studio.com/wp-json/wp/v2/properties/${props.Id}`)
            .then((res) => {
                setFeatureImg(res?.data.featured_media);
            });
    }, [props])
    
    return (
        featureImg !== undefined ?
            <>
                <SmallCardImg id={featureImg} />
            </>
            : null
    )
}

export default SmallCard
