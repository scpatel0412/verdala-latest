import React, { useState, useEffect } from "react";

const VerdalaLegacy = (props) => {
  const [visionPage, setVisionPage] = useState({});

  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setVisionPage(props.data.the_verdala_legacy);
    }
  }, [props]);
  return (
    <>
      {visionPage !== undefined ? (
        <div>
          <div className="our-mission" id="theverdalalegacy">
            <div className="misson-left">
              <div className="count-col">
                <span className="count-number">01</span>
                <p className="count-title">{visionPage?.sub_title}</p>
              </div>
            </div>
            <div className="mission-middle">
              <h1>{visionPage?.title}</h1>
              <p>{visionPage?.description}</p>
              <button>{visionPage?.button?.title}</button>
            </div>
            <div className="misson-right">
              <div className="mission-img">
                <img src={visionPage?.image_1?.url} alt="visionPageImg" />
              </div>
            </div>
          </div>
          <div className="merge-images">
            <div className="merge-img-left">
              <img src={visionPage?.image_2?.url} />
            </div>
            <div className="merge-img-right">
              <img src={visionPage?.image_3?.url} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VerdalaLegacy;
