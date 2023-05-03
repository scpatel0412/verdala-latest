import React, { useState, useEffect } from "react";

const AboutResidences = (props) => {
  const [residencesPage, setResidencesPage] = useState({});

  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setResidencesPage(props.data.about_the_residences);
    }
  }, [props]);

  return (
    <>
      {residencesPage != undefined ? (
        <div id={"abouttheresidences"} className="aboutrecidences-main">
          <div className="aboutrecidences-sec">
            <div className="aboutrecidences-left">
              <div className="count-col">
                <span className="count-number">01</span>
                <p className="count-title">{residencesPage?.sub_title}</p>
              </div>
            </div>
            <div className="aboutrecidences-right">
              <h2 className="innerpage_h2">{residencesPage?.title}</h2>
              <p>{residencesPage?.description}</p>
            </div>
          </div>
          <div className="aboutrecidences-bottom-sec">
            <div className="aboutrecidences-bottom-left">
              <div>
                <img src={residencesPage?.image_1?.url} />
              </div>
            </div>
            <div className="aboutrecidences-bottom-middle">
              <div className="lifestyle-icon-mobile-sec">
                {residencesPage?.about_data?.map((i, index) => {
                  return (
                    <>
                      <div
                        className="lifestyle-icon-inner fadeinup"
                        key={index}
                      >
                        <div className="icon-img">
                          <img src={i?.icon}></img>
                        </div>
                        <div className="icon-title">{i?.title}</div>
                        <div className="icon-descrp">{i?.description}</div>
                      </div>
                    </>
                  );
                })}
                
              </div>
              <button className="btn">check availability</button>
            </div>
            <div className="aboutrecidences-bottom-right">
              <div>
                <img src={residencesPage?.image_2?.url} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AboutResidences;
