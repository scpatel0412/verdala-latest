import React, { useEffect, useState } from "react";

const Mansions = (props) => {
  const [residencesPage, setResidencesPage] = useState({});

  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setResidencesPage(props.data.mansions);
    }
  }, [props]);

  return (
    <>
      {residencesPage != undefined ? (
        <div id={"mansions"} className="mansions-main-sec">
          <div className="count-col anim-scroll-up">
            <span className="count-number">02</span>
            <p className="count-title">MANSIONS</p>
          </div>
          <div className="mansions-sec">
            <div className="mansions-left-sec">
              <div className="mansions-mobile-blocks">
                <p className="rotated-text">Block</p>
                <span>A</span>
              </div>
              <div className="mansions-content">
                <h2 className="anim-text-enter">
                  {residencesPage?.mansion_1?.title}
                </h2>
                <div className="mansions-content-inner anim-parallax">
                  <h3>{residencesPage?.mansion_1?.sub_title}</h3>
                  <p>{residencesPage?.mansion_1?.description.split("At")[0]}</p>
                  <p>{`At ${
                    residencesPage?.mansion_1?.description.split("At")[1]
                  }`}</p>
                  <a href="#" className="mansions-content-btn">
                    find residence
                  </a>
                </div>
              </div>
              <div className="mansions-img anim-scroll-image">
                <div>
                  <img src={residencesPage?.mansion_1?.image} />
                </div>
              </div>
            </div>
            <div
              className="mansions-right-sec anim-parallax"
              data-parallax="20"
            >
              <div className="mansions-mobile-blocks">
                <p className="rotated-text">Block</p>
                <span>B</span>
              </div>
              <div className="mansions-content">
                <h2 className="anim-text-enter">
                  {residencesPage?.mansion_1?.title}
                </h2>
                <div
                  className="mansions-content-inner anim-parallax"
                  data-parallax="30"
                >
                  <h3>{residencesPage?.mansion_2?.sub_title}</h3>
                  <p>{residencesPage?.mansion_2?.description.split("By")[0]}</p>
                  <p>{`By ${
                    residencesPage?.mansion_2?.description.split("By")[1]
                  }`}</p>
                  <a href="#" className="mansions-content-btn">
                    find residence
                  </a>
                </div>
              </div>
              <div className="mansions-img anim-scroll-image">
                <div>
                  <img src={residencesPage?.mansion_2?.image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Mansions;
