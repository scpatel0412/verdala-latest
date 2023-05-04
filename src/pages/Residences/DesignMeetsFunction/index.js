import React, { useState, useEffect, useContext } from "react";
import { ResizeContext } from '../../../components/resize'
import Button from "../../../components/partials/buttons";
import * as Pagegeneric from "../../../components/sections/page/page.module.scss";
const DesignMeetsFunction = (props) => {
  const [residencesPage, setResidencesPage] = useState({});
  const [currentMeetsName, setCurrentMeetsName] = useState(0);
  const [smallCurrentMeets, setSmallCurrentMeets] = useState(0)
  const { width } = useContext(ResizeContext)
  const mobileScreen = width <= 699
  let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
  let mainSections = document.querySelectorAll(".scroll-container >  div");
  let headerheight1 = document.querySelector("header");
  let lastId;
  let cur = [];

  useEffect(() => {
    if (typeof props !== "undefined") {
      setResidencesPage(props?.data);
    }
  }, [props]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
      let mainSections = document.querySelectorAll(".scroll-container >  div");
      let headerheight1 = document.querySelector("header");
      let lastId;
      let cur = [];
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
          let fromTop = window.pageYOffset;
          mainNavLinks.forEach((link) => {
            let section = document.querySelector(link.hash);
            let headerheight = document.querySelector("header");
            if (
              section?.offsetTop !== null &&
              headerheight.offsetHeight !== null &&
              section?.offsetHeight !== null
            ) {
              if (
                section?.offsetTop - headerheight?.offsetHeight <= fromTop &&
                section?.offsetTop -
                headerheight.offsetHeight +
                section?.offsetHeight >
                fromTop
              ) {
                link.parentElement.classList.add("active");
              } else {
                link.parentElement.classList.remove("active");
              }
            }
          });
        });
      }
    }
  }, [props]);

  const handlerDesignMeets = (index) => {
    setCurrentMeetsName(index);
  };
  const onClickSmallScreenCurrentMeets = (index) => {
    setSmallCurrentMeets(index)
  }

  return (
    <>
      <section className={` ${Pagegeneric.secgeneric}`}>
        <div id={"designmeetsfunction"} className="designmeetfuncations-sec">
          <div className="designmeet-sec">
            <div className="designmeet-left">
              <div className="count-col"><span className="count-number">01</span><p className="count-title">{residencesPage.design_meets_function?.sub_title}</p></div>
            </div>
            <div className="designmeet-right">
              <h2 className="innerpage_h2">{residencesPage.design_meets_function?.title}</h2>
              <p>{residencesPage.design_meets_function?.description}</p>
            </div>
          </div>

          <div className="crow">
            <div
              className="recidence-meet-left sticky-menu sticky-mobile"
              style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
            >
              <div
                className="sticky-menu"
                style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
              >
                <div className="sticky-inner">
                  <ul className="recidence-meet-left-inner">
                    {residencesPage?.design_meets_function?.design_meets_data?.map(
                      (item, index2) => {
                        return (
                          <div key={index2}>
                            <li
                              className={`team-teamData-container fadeinup ${currentMeetsName === index2 && "active"
                                }`}
                            >
                              <a
                                className={`text designMeets-${index2}`}
                                data-splitting
                                onClick={mobileScreen ? () => onClickSmallScreenCurrentMeets(index2) : () => handlerDesignMeets(index2)}
                                href={`#designMeets-${index2}`}
                              >
                                {item.label}
                              </a>
                            </li>
                          </div>
                        );
                      }
                    )}
                  </ul>
                  <div>
                    <button className="mainbtn">
                      {
                        residencesPage?.design_meets_function?.download_pdf
                          .title
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="recidence-meet-right " >
            <div className="scroll-container">
                {mobileScreen ?
                  <img src={residencesPage?.design_meets_function?.design_meets_data[smallCurrentMeets].image} />
                  :
                  residencesPage?.design_meets_function?.design_meets_data?.map(
                    (i, index2) => {
                      return (
                        <div id={`designMeets-${index2}`} key={index2} className="meets-main-div">
                          <div className="meets-inner-img">
                            <img src={i.image} />
                          </div>
                          <div className="meets-inner-sec">
                            <div className="title">{i.title}</div>
                            <div>{i.sub_title}</div>
                            <p>{i.description}</p>
                          </div>

                        </div>
                      );
                    }
                  )}

              </div>

            </div>
            <button className="mainbtn mob-btn">
              {
                residencesPage?.design_meets_function?.download_pdf
                  .title
              }
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignMeetsFunction;
