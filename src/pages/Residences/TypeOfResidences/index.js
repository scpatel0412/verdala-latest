import React, { useState, useEffect, useRef } from "react";
import ResidencesCard from "../../../components/property/residences-cardNew";
import * as Pagegeneric from "../../../components/sections/page/page.module.scss";
import { arrow } from "../../../images";
import SmallCard from "../../../components/property/small-card";
import Slider from "react-slick";

const TypeOfResidences = (props) => {
  let headerheight1 = 0;
  if (typeof document !== "undefined") {
    headerheight1 = document.querySelector("header");
  }

  const [residencesPage, setResidencesPage] = useState({});
  const [currentPropertyName, setCurrentPropertyName] = useState(0);
  const [slidecount, setSlidecount] = useState(0);
  const [slider3, setSliderSlider3] = useState({ nav1: null, nav2: null });
  let slider1 = useRef(null);
  let slider2 = useRef(null);
  function SampleNextArrow(props) {
    useEffect(() => {
      setSlidecount(props.slideCount);
    }, [props.slideCount]);
    const { className, style, onClick } = props;
    console.log("currentPropertyName", currentPropertyName);
    return (
      <div
        className={props.className}
        style={{ ...style, display: "flex", zIndex: 99999 }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M0.5 8H15.5"
            stroke="#7B9E6B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 13L15.5 8L10.5 3"
            stroke="#7B9E6B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={props.className}
        style={{ ...style, display: "flex", zIndex: 9999999 }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.5 8H0.5"
            stroke="#7B9E6B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 13L0.5 8L5.5 3"
            stroke="#7B9E6B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  useEffect(() => {
    if (typeof props !== "undefined") {
      setResidencesPage(props?.data);
    }
  }, [props]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
          let fromTop = window.pageYOffset;
          mainNavLinks.forEach((link) => {
            let section = document.querySelector(link.hash);
            let headerheight = 0;
            if (typeof document !== "undefined") {
              headerheight = document.querySelector("header");
            }
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

  const onClickResidences = (index) => {
    setCurrentPropertyName(index);
  };

  return (
    <>
      {Object.keys(residencesPage).length > 0 ? (
        <>
          <section className={` ${Pagegeneric.secgeneric1}`}>
            <div
              id={"typeofresidence"}
              className="typeresidence-sec sticky-tabing-slider-sec"
            >
              <div className="type-col-sec">
                <div className="count-col anim-scroll-up">
                  <span className="count-number">03</span>
                  <p className="count-title">
                    {residencesPage?.type_of_residence?.sub_title}
                  </p>
                </div>
                <h2 className="innerpage_h2 anim-text-enter">
                  {residencesPage?.type_of_residence?.title}
                </h2>
                <p className="anim-text-enter">
                  {residencesPage?.type_of_residence?.description}
                </p>
              </div>
              <div className="sticky-tabing-sec ">
                <div
                  className="col-3 col-lg-12 sticky-menu sticky-mobile"
                  style={{
                    top: headerheight1 ? headerheight1.offsetHeight : "",
                  }}
                >
                  <div
                    className="sticky-menu"
                    style={{
                      top: headerheight1 ? headerheight1.offsetHeight : "",
                    }}
                  >
                    <div className="sticky-inner">
                      <ul className="anim-scroll-up">
                        {residencesPage?.type_of_residence?.property_?.map(
                          (item, index2) => {
                            return (
                              <div key={index2}>
                                <li
                                  className={`anim-scroll-up ${
                                    currentPropertyName === index2 && "active"
                                  }`}
                                >
                                  <a
                                    className={`#residences-${index2}`}
                                    data-splitting
                                    onClick={() => onClickResidences(index2)}
                                    href={`#residences-${index2}`}
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              </div>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <Slider
                  className="home-sticky-slider"
                  asNavFor={slider3.nav2}
                  fade={true}
                  ref={(slider) => (slider1 = slider)}
                  nextArrow={
                    <SampleNextArrow className="customarrow customarrownext" />
                  }
                  prevArrow={
                    <SamplePrevArrow className="customarrow customarrowprev" />
                  }
                >
                  {residencesPage?.type_of_residence?.property_?.map(
                    (i, index2) => {
                      return (
                        <div id={`residences-${index2}`} key={index2}>
                          {i.property.map((item, index) => {
                            return (
                              <>
                                <ResidencesCard
                                  key={index}
                                  Id={item.ID}
                                  id={i.title}
                                  title={item?.post_title}
                                />
                              </>
                            );
                          })}
                        </div>
                      );
                    }
                  )}
                </Slider>
              </div>
              <div className="sticky-tabing-mob">
                {residencesPage?.type_of_residence?.property_?.map(
                  (item, index) => {
                    return (
                      <div className="tabing-inner-mob" key={index}>
                        <div className="tabb-img">
                          <SmallCard Id={item.property[0].ID} />
                        </div>
                        <div className="tabb-content">
                          <span>{item.title}</span>
                          <img src={arrow} />
                        </div>
                      </div>
                    );
                  }
                )}
                <button className="btn">all residences</button>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default TypeOfResidences;
