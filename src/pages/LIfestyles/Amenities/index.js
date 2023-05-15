import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
function Amenities(props) {
  const [lifestylePage, setLifestylePage] = useState({});

  useEffect(() => {
    if (typeof props !== "undefined") {
      setLifestylePage(props?.data);
    }
  }, [props]);

  var settings = {
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 0,
    // cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: false,
    infinite: false,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1451,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="amenities-sec" id={"amenities"}>
        <div className="amenities-left">
          <div className="count-col">
            <span className="count-number">01</span>
            <p className="count-title">{lifestylePage.amenities?.sub_title}</p>
          </div>
          <h1>{lifestylePage.amenities?.title}</h1>
        </div>
        <div className="amenities-right">
          <div>
            <p>{lifestylePage.amenities?.description}</p>
            <button>{lifestylePage.amenities?.button?.title}</button>
          </div>
        </div>
      </div>
      <div className="lifestyle-icon-mobile-sec">
        <div className="lifestyle-icon-inner">
          {<div className="icon-img">{/*<img src={leaf}></img> */}</div>}
          <div className="icon-title">Fervently progressive</div>
          <div className="icon-descrp">
            Located in Diagonal Mar, a contemporary and vibrant district of
            Barcelona, Antares sits a few minutes walk from the stylish Port
            Fòrum Marina and the Blue Flag-awarded Mar Bella beach.
          </div>
        </div>
        <div className="lifestyle-icon-inner">
          <div className="icon-img">{/*<img src={leaf}></img> */}</div>
          <div className="icon-title">Fervently progressive</div>
          <div className="icon-descrp">
            Located in Diagonal Mar, a contemporary and vibrant district of
            Barcelona, Antares sits a few minutes walk from the stylish Port
            Fòrum Marina and the Blue Flag-awarded Mar Bella beach.
          </div>
        </div>
        <div className="lifestyle-icon-inner">
          <div className="icon-img">{/*<img src={leaf}></img> */}</div>
          <div className="icon-title">Fervently progressive</div>
          <div className="icon-descrp">
            Located in Diagonal Mar, a contemporary and vibrant district of
            Barcelona, Antares sits a few minutes walk from the stylish Port
            Fòrum Marina and the Blue Flag-awarded Mar Bella beach.
          </div>
        </div>
      </div>
      <div className="life-style-slider">
        <div className="life-style-inner-slider">
          <Slider {...settings}>
            {lifestylePage?.amenities?.amenities_data?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="slider-box anim-scroll-up" data-stagger="0.1">
                    <div className="slider-img">
                      <img src={item.icon}></img>
                    </div>
                    <h3
                      style={{
                        // wordBreak: "break-word",
                        maxWidth: "200px",
                        // whiteSpace: "break-space",
                      }}
                    >
                      <Link to="/lifestyle-amenities">
                        {item.title.split(/\r?\n/)}
                      </Link>
                    </h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Amenities;
