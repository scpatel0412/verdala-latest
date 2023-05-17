import React, { useEffect, useState } from "react";
import axios from "axios";

const HoverHeaderImage = (props) => {
  const [img, setImg] = useState();
  useEffect(() => {
    if (props.id !== undefined) {
      const func = async () => {
        try {
          const res = await axios
            .get(
              `https://verdalastage.bison-studio.com/wp-json/wp/v2/media/${props.id}`
            )
            .then((res) => {
              setImg(res.data);
            });
        } catch (error) {
          console.log("ERROR DURING GET IMAGE DATA");
        }
      };
      func();
    }
  }, [props]);

  return img !== undefined ? (
    <>
      <div
        style={{
          opacity:
            props.currentImage.current == props.headerActive.page &&
            props.currentImage.index == props.headerActive.index
              ? "1"
              : "0.5",
        }}
      >
        <img src={img?.guid?.rendered} alt="" />
      </div>
    </>
  ) : null;
};

export default HoverHeaderImage;
