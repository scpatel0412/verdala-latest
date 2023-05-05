import React, { useEffect, useState } from "react";
import { Quote } from "../../../images";

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
              <h2>{visionPage?.description}</h2>
              <div className="archi-quot-right">
                <img src={Quote} />
              </div>
            </div>
            <div className="archi-quote">
              <div className="archi-quot-left">
                <h4>{visionPage?.author}</h4>
                <p>{visionPage?.designation}</p>
              </div>
            </div>
            <div className="archi-description">
              <p></p>
            </div>
          </div>
          <div className="architecture-right">
            <video controls>
              <source src={visionPage?.video?.url} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Architecture;
