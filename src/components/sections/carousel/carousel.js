import React from "react"
import CarouselCard from "./carousel-card";
import * as Styles from "./carousel.module.scss";
import HeroImg from "../../../assets/images/test-images/nature.jpg";
import TreeIcon from "../../../assets/images/test-images/tree-icon.png";
import Slider from "react-slick";
const Carousel = (props) => {
    var settings = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]

      };

return(
    <>
    <div className={Styles.carouselMain}>
        <div className={Styles.carouselContainer}>
        <Slider {...settings}>
            <CarouselCard
                title = "Nature"
                icon = {TreeIcon}
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elite cillum dolore "
                image = {HeroImg}
            />
            
            <CarouselCard
                title = "Pool"
                icon = {TreeIcon}
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elite cillum dolore "
                image = {HeroImg}
            />
             <CarouselCard
                title = "Pool"
                icon = {TreeIcon}
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elite cillum dolore "
                image = {HeroImg}
            />
            </Slider>
        </div>
        </div>
    </>
)}

export default Carousel;