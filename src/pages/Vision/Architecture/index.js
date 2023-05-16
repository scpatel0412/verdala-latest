import React, { useEffect, useState } from "react";
import { Quote } from "../../../images";
import HeroImg from "../../../assets/images/test-images/home-image.png";

const Architecture = (props) => {
  const [visionPage, setVisionPage] = useState({});
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setVisionPage(props?.data.architecture);
    }
  }, [props]);
  return (
    <>
      {visionPage != undefined ? (
        <div className="architecture-sec" id="architecture">
          <div className="count-col">
            <span className="count-number">03</span>
            <p className="count-title">{visionPage?.sub_title}</p>
          </div>
          <div className="architecture-left">
            <div className="archi-quot-right-mob">
              <img src={Quote} />
            </div>
            <div className="architopHead">
              <h2 className="anim-text-enter">{visionPage?.title}</h2>
              <div className="archi-quot-right">
                <img src={Quote} />
              </div>
            </div>
            <div className="archi-quote">
              <div className="archi-quot-left">
                <h4>{visionPage?.author}</h4>
                <p className="anim-text-enter">{visionPage?.designation}</p>
              </div>
            </div>
            <div className="archi-description">
              <p className="anim-text-enter">{visionPage?.description?.split("The Verdala")[0]}</p>
              <p className="anim-text-enter">{`The Verdala ${
                visionPage?.description?.split("The Verdala")[1]
              }`}</p>
            </div>
          </div>
          <div className="architecture-right anim-scroll-image">
            {/* <video controls>
              <source src={visionPage?.video?.url} type="video/mp4" />
            </video> */}
            <img src={HeroImg} alt="visionImg" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Architecture;
