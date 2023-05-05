import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";
import "../assets/css/js_composer.min.css";
import SectionNavigation from "../components/sectionNavigation";
import VerdalaLegacy from "./Vision/VerdalaLegacy";
import JourneySection from "./Vision/JourneySection";
import TodayVision from "./Vision/TodayVision";
import Architecture from "./Vision/Architecture";
import Team from "./Vision/Team";
import Resize from "../components/resize/index";
import { allVision } from "../utils/api";

const Vision = ({ pageTitle, children }) => {
  const [slidecount, setSlidecount] = useState(0);
  const [navLinks, setNavLinks] = useState([]);
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const res = await allVision();
        setData(res.acf);
      } catch (error) {
        console.log("ERROR DURING GET vision DATA");
      }
    };
    func();
  }, []);
  useEffect(() => {
    if (typeof data !== "undefined") {
      if (Object.keys(data).length > 0) {
        const pageLists = Object.keys(data);
        const removedata = [];
        for (let i = 0; i < pageLists.length; i++) {
          if (pageLists[i] !== "fieldGroupName") {
            if (pageLists[i] !== "header_section") {
              if (pageLists[i] !== "timeline_section") {
                const ab = {
                  id: pageLists[i],
                  data: data[pageLists[i]],
                };
                removedata.push(ab);
              }
            }
          }
        }
        setNavLinks(removedata);
        setSliderSlider3({ nav1: slider1, nav2: slider2 });
      }
    }
  }, [data]);

  return (
    <>
      <Resize>
        <div className="lifestyle-amenities-banner">
          <PageHero headerData={data?.header_section} />
        </div>
        <div>
          <SectionNavigation data={navLinks} />
        </div>
        <VerdalaLegacy data={data} />
        <JourneySection data={data} />
        {data != undefined ? (
          <div className="vision-midd-body-content">
            <div className="then-now-sec" id="thenandnow">
              <div className="then-now-inner">
                <div className="then-now-inner-left">
                  <div className="count-col">
                    <span className="count-number">03</span>
                    <p className="count-title">
                      {data?.then_and_now?.sub_title}
                    </p>
                  </div>
                  <div className="then-now-left-image">
                    <img
                      src={data?.then_and_now?.image?.url}
                      alt={data?.then_and_now?.image?.url}
                    />{" "}
                  </div>
                </div>
                <div className="then-now-inner-middle">
                  <h1>{data?.then_and_now?.title}</h1>
                </div>
                <div className="then-now-inner-right">
                  <p>{`${data?.then_and_now?.description.split("world")[0]
                    } world`}</p>
                  <p>{data?.then_and_now?.description.split("world")[1]}</p>
                </div>
                <div className="then-now-left-image-mobile">
                  <img
                    src={data?.then_and_now?.image?.url}
                    alt={data?.then_and_now?.image?.url}
                  />{" "}
                </div>
              </div>
              <div className="then-now-slider-Right">
                <div className="content-slider">
                  <Slider
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
                    {data?.then_and_now?.slider_conent?.map((i, index) => {
                      return (
                        <div className="slider_content" key={index}>
                          <h3>{`“${i.description}”`}</h3>
                          <p>{i.author}</p>
                          <span>{i.designation}</span>
                        </div>
                      );
                    })}
                  </Slider>
                </div>

                <div className="image-slider">
                  <Slider
                    // {...settings}
                    asNavFor={slider3.nav1}
                    ref={(slider) => (slider2 = slider)}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {data?.then_and_now?.slider_conent.map((i,index) => {
                      return (
                        <div key={index}>
                          <img src={i.image.url} style={{ padding: "10px" }} />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <TodayVision data={data} />
            <Architecture data={data} />
            <Team data={data} />
          </div>
        ) : null}
        <Footer />
      </Resize>
    </>
  );
};

export default Vision;

export function Head() {
  return <title>Verdala - The Vision</title>;
}
