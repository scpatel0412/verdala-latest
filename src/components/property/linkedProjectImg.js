import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <img
        src={img?.acf?.building_image?.url}
        alt=""
      />
    </div>
  )
}

export default LinkedProjectImg
