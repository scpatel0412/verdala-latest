import React, { useEffect, useState } from "react";
import * as developementStyle from "./developmentProgress.module.scss";
import Slider from "react-slick";
// import ProcessSlideImg from "../../images/img_2.png";
import DevelopementImage from "../DevelopmentProgress/DevelopmentImage/index";
import moment from "moment";
const Developement = (props) => {
  const [developmentPage, setDevelopmentPage] = useState({});
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setDevelopmentPage(props.data);
    }
  }, [props]);

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
      {developmentPage !== undefined ? (
        <>
          {developmentPage?.project_data?.map((item, key) => {
            return (
              <div key={key}>
                <div
                  className={`${developementStyle.developmentProgressTitleSec}`}
                >
                  <div className={`${developementStyle.progressTitleLeft}`}>
                    <h2>{developmentPage?.header_title}</h2>
                  </div>
                  <div className={`${developementStyle.progressTitleRight}`}>
                    <label>{item?.project_title}</label>
                    <p>{item?.project_detail}</p>
                  </div>
                </div>

                <div
                  className={`${developementStyle.developmentProgressSliderSec}`}
                >
                  <Slider
                    className={developementStyle.deveslider}
                    {...settings}
                  >
                    {item?.progress_details?.map((i, index) => {
                      return (
                        <div key={index}>
                          <div
                            className={`${developementStyle.progressSliderCard}`}
                          >
                            <div
                              className={`${developementStyle.progressSliderTop}`}
                            >
                              <div
                                className={`${developementStyle.progressSliderDate}`}
                              >
                                <span>{moment(i.date).format("DD")}</span>
                                {moment(i?.date).format("MMMM")}
                              </div>
                              <div
                                className={`${developementStyle.progressSlideCount}`}
                              >
                                {" "}
                                {moment(i?.date).format("YY")}{" "}
                              </div>
                            </div>
                            <div
                              className={`${developementStyle.progressSliderImg}`}
                            >
                              <DevelopementImage id={i?.image?.ID} />
                            </div>
                            <div className={`${developementStyle.readMoreBtn}`}>
                              {i?.link?.title}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default Developement;
