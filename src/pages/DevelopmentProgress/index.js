import React from "react";
import * as developementStyle from "./developmentProgress.module.scss";
import { Processslideimg } from "../../images";
import Slider from "react-slick";
// import ProcessSlideImg from "../../images/img_2.png";

const Developement = () => {
  const data = [
    {
      date: "01",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "02",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "03",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "04",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "05",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "06",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "07",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
    {
      date: "08",
      year: "22",
      month: "May",
      image: Processslideimg,
    },
  ];

  //   var settings = {
  //     speed: 1000,
  //     autoplay: false,
  //     autoplaySpeed: 0,

  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     swipeToSlide: false,
  //     infinite: false,
  //     arrows: true,
  //     buttons: false,
  //     responsive: [
  //       {
  //         breakpoint: 1451,
  //         settings: {
  //           slidesToShow: 4,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 1366,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   };

  var settings = {
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    arrows: true,
    buttons: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
         slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={`${developementStyle.developmentProgressTitleSec}`}>
        <div className={`${developementStyle.progressTitleLeft}`}>
          <h2>construction progress</h2>
        </div>
        <div className={`${developementStyle.progressTitleRight}`}>
          <label>Commissioning</label>
          <p>Phase 1: 4th quarter of 2023</p>
        </div>
      </div>

      <div className={`${developementStyle.developmentProgressSliderSec}`}>
        <Slider className={developementStyle.deveslider} {...settings}>
          {data?.map((i, index) => {
            // console.log("i", i);
            return (
              <div>
                <div className={`${developementStyle.progressSliderCard}`}>
                  <div className={`${developementStyle.progressSliderTop}`}>
                    <div className={`${developementStyle.progressSliderDate}`}>
                      <span> {i.date}</span>
                      {i.month}
                    </div>
                    <div className={`${developementStyle.progressSlideCount}`}>
                      {" "}
                      {i.year}{" "}
                    </div>
                  </div>
                  <div className={`${developementStyle.progressSliderImg}`}>
                    <img src={i.image}></img>
                  </div>
                  <div className={`${developementStyle.readMoreBtn}`}>
                    read more
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* <div className={`${developementStyle.progressSliderCard}`}>
          <div className={`${developementStyle.progressSliderTop}`}>
            <div className={`${developementStyle.progressSliderDate}`}>
              <span> 08</span>august
            </div>
            <div className={`${developementStyle.progressSlideCount}`}>
              {" "}
              22{" "}
            </div>
          </div>
          <div className={`${developementStyle.progressSliderImg}`}>
            <img src={Processslideimg}></img>
          </div>
          <div className={`${developementStyle.readMoreBtn}`}>read more</div>
        </div> */}
      </div>
    </>
  );
};

export default Developement;
