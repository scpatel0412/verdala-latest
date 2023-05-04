import React, { useState, useEffect } from "react";
import { Download } from "../../../images";

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
            <div className="subheading">todays vision</div>
            <h1>{visionPage?.title}</h1>
            <div className="today-vis-boxes">
              {visionPage?.books?.map((i, index) => (
                <div
                  key={index}
                  className="boxes-item"
                  style={{
                    background: i?.book_link != "" ? "white" : "",
                    border: i?.book_link != "" ? "none" : "",
                  }}
                >
                  <div className="edition-div">{i?.sub_title}</div>
                  <h3>{i?.title}</h3>
                  <div>
                    <a href={i?.book_link?.url}>
                      {i?.book_link != "" ? i?.book_link?.title : "coming soon"}
                      {i?.book_link != "" && <img src={Download} />}
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
