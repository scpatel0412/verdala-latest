import React, { useState, useEffect, useContext } from "react";
import { ResizeContext } from "../../../components/resize";
import Button from "../../../components/partials/buttons";
const DesignMeetsFunction = (props) => {
  const [residencesPage, setResidencesPage] = useState({});
  const [currentMeets, setCurrentMeets] = useState(0);
  const { width } = useContext(ResizeContext);
  const mobileScreen = width <= 699;

  useEffect(() => {
    if (typeof props !== "undefined") {
      setResidencesPage(props?.data.design_meets_function);
    }
  }, [props]);

  const handlerDesignMeets = (index) => {
    setCurrentMeets(index);
  };

  return (
    <>
      {residencesPage != undefined ? (
        <>
          <div id={"designmeetsfunction"} className="designmeetfuncations-sec">
            <div className="designmeet-sec">
              <div className="designmeet-left">
                <div className="count-col anim-scroll-up">
                  <span className="count-number">01</span>
                  <p className="count-title">{residencesPage?.sub_title}</p>
                </div>
              </div>
              <div className="designmeet-right">
                <h2 className="innerpage_h2 anim-text-enter">
                  {residencesPage?.title}
                </h2>
                <p className="anim-text-enter">{residencesPage?.description}</p>
              </div>
            </div>
            <div className="">
              <div className="crow team-tab">
                {mobileScreen ? (
                  <>
                    <div className="designmeetfuncations-mob-view">
                      <div className="recidence-meet-left team-tab-title">
                        {residencesPage.design_meets_data?.map(
                          (item, index) => {
                            return (
                              <>
                                <div
                                  className="team-teamData-container"
                                  key={index}
                                >
                                  <span
                                    className="text"
                                    style={{
                                      textDecoration:
                                        currentMeets == index
                                          ? "underline"
                                          : "none",
                                      color:
                                        currentMeets == index
                                          ? "rgba(123, 158, 107, 1)"
                                          : "rgba(123, 158, 107, 0.25)",
                                    }}
                                    onClick={() => handlerDesignMeets(index)}
                                  >
                                    {item.label}
                                  </span>
                                </div>
                              </>
                            );
                          }
                        )}
                      </div>
                      {Object.keys(residencesPage).length > 0 ? (
                        <>
                          <div className="recidence-meet-right ">
                            <div className="team-tab-image meets-main-div">
                              <div className="meets-inner-img">
                                <img
                                  src={
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.image
                                  }
                                />
                              </div>
                              <div className="meets-inner-sec">
                                <div className="title">
                                  {
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.title
                                  }
                                </div>
                                <div>
                                  {
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.sub_title
                                  }
                                </div>
                                <p>
                                  {
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.description
                                  }
                                </p>
                              </div>
                              <div className="mob-b">
                                <Button
                                  text={residencesPage?.download_pdf.title}
                                />
                              </div>
                            </div>
                          </div>
                          <Button text={residencesPage?.download_pdf.title} />
                        </>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="recidence-meet-left team-tab-title">
                      {residencesPage.design_meets_data?.map((item, index) => {
                        return (
                          <>
                            <div
                              className="team-teamData-container"
                              key={index}
                            >
                              <span
                                className="text"
                                style={{
                                  textDecoration:
                                    currentMeets == index
                                      ? "underline"
                                      : "none",
                                  color:
                                    currentMeets == index
                                      ? "rgba(123, 158, 107, 1)"
                                      : "rgba(123, 158, 107, 0.25)",
                                }}
                                onClick={() => handlerDesignMeets(index)}
                              >
                                {item.label}
                              </span>
                            </div>
                          </>
                        );
                      })}
                      <Button text={residencesPage?.download_pdf?.title} />
                    </div>
                    {Object.keys(residencesPage).length > 0 ? (
                      <>
                        <div className="recidence-meet-right ">
                          <div className="team-tab-image meets-main-div">
                            <div className="meets-inner-img">
                              <img
                                src={
                                  residencesPage?.design_meets_data[
                                    currentMeets
                                  ]?.image
                                }
                              />
                            </div>
                            {residencesPage?.design_meets_data[currentMeets]
                              ?.title !== "" ||
                            (residencesPage?.design_meets_data[currentMeets]
                              ?.description !== "" &&
                              residencesPage?.design_meets_data[currentMeets]
                                ?.sub_title !== "") ? (
                              <div className="meets-inner-sec">
                                <div className="title">
                                  {
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.title
                                  }
                                </div>
                                <div>
                                  {
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.sub_title
                                  }
                                </div>
                                <p>
                                  {
                                    residencesPage?.design_meets_data[
                                      currentMeets
                                    ]?.description
                                  }
                                </p>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DesignMeetsFunction;
