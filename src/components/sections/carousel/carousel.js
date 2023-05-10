import React, { useState, useEffect } from "react"
import CarouselCard from "./carousel-card";
import * as Styles from "./carousel.module.scss";
import HeroImg from "../../../assets/images/test-images/nature.jpg";
import TreeIcon from "../../../assets/images/test-images/tree-icon.png";
import Slider from "react-slick";
const Carousel = (props) => {
  const [homePage, setHomePage] = useState({});

  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setHomePage(props.data);
    }
  }, [props]);

  var settings = {
    // speed: 5000,
    autoplay: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    buttons: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]

  };
  
  return (
    <>
      {Object.keys(homePage).length > 0 ? <>
        <div className={Styles.carouselMain}>
          <div className={Styles.carouselContainer}>
            <Slider {...settings}>
              {homePage?.map((item, index) => {
                return (
                  <div key={index}>
                    <CarouselCard
                      title={item.location_name}
                      icon={item.location_logo.url}
                      text={item.location_description}
                      image={item.location_image.url}
                    />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </> : null}

    </>
  )
}

export default Carousel;