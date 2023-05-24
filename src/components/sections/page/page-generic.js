import React, { useState, useEffect, useRef } from "react";
import ResidencesCard from "../../property/residences-cardNew";
import * as Pagegeneric from "./page.module.scss";
import { arrow } from "../../../images";
import SmallCard from "../../../components/property/small-card";
import Button from "../../partials/buttons";
import Slider from "react-slick";

const PageGeneric = (props) => {
  const [homePage, setHomePage] = useState({});
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
    if (typeof props.data !== "undefined") {
      setHomePage(props.data.residences);
    }
  }, [props]);

  const onClickResidences = (index) => {
    setCurrentPropertyName(index);
  };
  let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");

  let headerheight1 = 0;
  if (typeof document !== "undefined") {
    headerheight1 = document.querySelector("header");
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY;

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

  return (
    <>
      <section className={` ${Pagegeneric.secgeneric1}`}>
        <div
          id={"typeofresidence"}
          className="typeresidence-sec sticky-tabing-slider-sec"
        >
          <div className="type-col-sec">
            <div className="count-col anim-scroll-up">
              <span className="count-number">03</span>
              <p className="count-title">{homePage?.sub_title}</p>
            </div>
            <h2 className="innerpage_h2 anim-text-enter">{homePage?.title}</h2>
            <p className="anim-text-enter">{homePage?.description}</p>
          </div>
          <div className="sticky-tabing-sec ">
            <div
              className="col-3 col-lg-12 sticky-menu sticky-mobile"
              style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
            >
              <div
                className="sticky-menu"
                style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
              >
                <div className="sticky-inner">
                  <ul className="anim-scroll-up">
                    {homePage?.property_type?.map((item, index2) => {
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
                              {item.property_type_name}
                            </a>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                  <div className="stickybtn anim-scroll-up">
                    <Button
                      styleClass="border-button"
                      link={"/the-residences"}
                      text={"all residences"}
                    />
                  </div>
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
              {homePage?.property_type?.map((item, key) => {
                console.log("item", item);
                return (
                  <ResidencesCard
                    key={key}
                    Id={item.property_details[0]}
                    id={item?.property_type_name}
                    title={item?.property_type_name}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="sticky-tabing-mob">
            {homePage?.property_type?.map((item, index) => {
              return (
                <div className="tabing-inner-mob" key={index}>
                  <div className="tabb-img">
                    <SmallCard Id={item.property_details[0]} />
                  </div>
                  <div className="tabb-content">
                    <span>{item.property_type_name}</span>
                    <img src={arrow} />
                  </div>
                </div>
              );
            })}
            <Button
              className="btn"
              link={"/the-residences"}
              text={"all residences"}
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageGeneric;
