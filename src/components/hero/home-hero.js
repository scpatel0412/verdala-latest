import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import * as heroStyles from "./hero.module.scss"

const HomeHero = (props) => {
    const [slidecount, setSlidecount] = useState(0);

    function SampleNextArrow(props) {
        useEffect(() => {
            setSlidecount(props.slideCount)
        }, [props.slideCount])


        const { className, style, onClick } = props;
        return (
            <div
                className={props.class}
                style={{ ...style, display: "flex" }}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0.5 8H15.5" stroke="#F8F8F2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.5 13L15.5 8L10.5 3" stroke="#F8F8F2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={props.class}
                style={{ ...style, display: "flex" }}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.5 8H0.5" stroke="#F8F8F2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.5 13L0.5 8L5.5 3" stroke="#F8F8F2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        );
    }
    const [currentIndex, setCurrentIndex] = useState(0);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        nextArrow: <SampleNextArrow name="hello" class="customarrow customarrownext" />,
        prevArrow: <SamplePrevArrow class="customarrow customarrowprev" />,

    };
    const [homePage, setHomePage] = useState({});

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data);
        }
    }, [props]);

    return (
        <>
            {homePage != undefined ? <>
                <div className={heroStyles.heroContainer} style={{ backgroundImage: `url(${homePage?.header_section?.header_slider[currentIndex]?.banner_image.url})` }}>
                    <div className={heroStyles.heroslider} >
                        <Slider {...settings} className={heroStyles.herosliderinner} beforeChange={(currentSlide, nextSlide) => {
                            setCurrentIndex(nextSlide);
                        }}
                        >
                            {homePage?.header_section?.header_slider.map((item, index) => {
                                return (
                                    <div className={`fadeinup ${heroStyles.cslide}`} key={index}>
                                        <div>
                                            <h3 className="fadeinup">{item?.content_title}</h3>
                                            <div className={heroStyles.slide_desc} >
                                                {item?.content_description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        <div className={`fadeinup ${heroStyles.slide_count}`}>
                            <span>{(currentIndex + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</span>/<span>{slidecount.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</span>
                        </div>
                    </div>
                    <div className={heroStyles.textCont}>
                        <div className="title-cont">
                            <h3 className={heroStyles.introTitle} data-splitting><span className={heroStyles.subtitle}>{homePage?.header_section?.header_slider[currentIndex]?.sub_heading}</span></h3>
                            <h1 className={heroStyles.mainTitle} data-splitting>{homePage?.header_section?.header_slider[currentIndex]?.main_heading}</h1>
                        </div>
                    </div>
                </div>
            </> : null}
        </>
    )
}

export default HomeHero;