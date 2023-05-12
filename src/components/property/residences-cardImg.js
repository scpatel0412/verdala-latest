import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidencesCardImg = (props) => {
    const [img, setImg] = useState()
    
    useEffect(() => {
        if (props.data !== undefined) {
            const func = async () => {
                try {
                    const res = await axios.get(`https://verdalastage.bison-studio.com/wp-json/wp/v2/media/${props.data}`)
                        .then((res) => {
                            setImg(res.data);
                        });

                } catch (error) {
                    console.log("ERROR DURING GET IMAGE DATA");
                }
            };
            func()
        }
    },[props])
    return (
        img !== undefined ? <>
        <div className="anim-scroll-image">
            <img
                className="bg-img"
                src={img?.guid?.rendered}
                alt=""
            />
        </div>
        </> : null
    )
}

export default ResidencesCardImg