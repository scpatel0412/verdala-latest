import React, { useEffect, useState } from "react";
import axios from "axios";
import buildingImg from '../../assets/images/test-images/building-overview---grand.png';
import building2Img from '../../assets/images/test-images/building-overview---royal.png';

const LinkedProjectImg = (props) => {
  const [img, setImg] = useState()
  useEffect(() => {
    if (props.id !== undefined) {
      const func = async () => {
        try {
          const res = await axios.get(`https://verdalastage.bison-studio.com/wp-json/wp/v2/projects/${props.id}`)
            .then((res) => {
              setImg(res.data);
            });
        } catch (error) {
          console.log("ERROR DURING GET IMAGE DATA");
        }
      };
      func()
    }
  }, [props])
  return (
    <div className="building-images">
      <div className="building-trace">
        <img
          src={buildingImg}
          alt=""
        />
      </div>

      <div className="building-trace">
        <img
          src={building2Img}
          alt=""
        />
      </div>
    </div>
  )
}

export default LinkedProjectImg
