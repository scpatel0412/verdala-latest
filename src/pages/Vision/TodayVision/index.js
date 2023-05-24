import React, { useState, useEffect } from "react";
import { Downloadnew } from "../../../images";

const TodayVision = (props) => {
  const [visionPage, setVisionPage] = useState({});
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setVisionPage(props?.data?.then_and_now?.todays_vision_);
    }
  }, [props]);
  return (
    <>
      {visionPage != undefined ? (
        <div className="today-vision-sec">
          <div className="today-vis-inner">
            <div className="subheading anim-text-enter">todays vision</div>
            <h1 className="anim-text-enter">{visionPage?.title}</h1>
            <div className="today-vis-boxes">
              {visionPage?.books?.map((i, index) => (
                <div key={index} className="boxes-item anim-scroll-up">
                  <div className="boxes-item-inner">
                    <img src={i?.book_image?.url} />
                  </div>
                  <div className="boxes-item-button-link">
                    <a href={i?.book_link?.url}>
                      {i?.book_link != ""
                        ? i?.book_link?.title
                        : "View our book"}
                      {i?.book_link != "" && <img src={Downloadnew} />}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TodayVision;
