import React, { useState, useEffect, useRef, useLayoutEffect } from "react"
import Slider from "react-slick";
import { gsap } from "gsap";
// import SplitText from "gsap/SplitText";
// import Splitting from "splitting";
import * as heroStyles from "./hero.module.scss"

const HomeHero = (props) => {
    const ref           = useRef(null);
    const titleRef      = useRef();
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

    useLayoutEffect(() => {

        if (homePage !== undefined) {
            let ctx = gsap.context(() => {
                // Loading Screen Anim
                setTimeout(() => {
                    gsap.set(
                        ".loading-container",
                        {
                            transformOrigin:"50% 0%"
                        }
                    );
                    gsap.to(
                        ".loading-container",
                        {
                            scaleY: 0,
                            duration: 0.5,
                            ease: "Cubic.easeOut"
                        }
                    );

                    gsap.to(
                        ".loading-container .loading",
                        {
                            opacity: 0
                        }
                    );

                    gsap.fromTo(
                        ".anim-scroll-up-home,.customarrow",
                        {
                            opacity: 0,
                            y: 100,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: {
                                amount: 0.5,
                                from: "random"
                            },
                            delay: 1.5,
                            ease: "Cubic.easeOut"
                        }
                    );
                }, 2000);
    
                // OnPage Load
                gsap.fromTo(
                    ".title-cont *",
                    {
                        opacity: 0,
                        y: 200,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.3,
                        delay: 2.5,
                        ease: "Cubic.easeOut"
                    }
                );

                gsap.fromTo(
                    ".bg-img",
                    {
                        scale: 1.3
                    },
                    {
                        scale: 1,
                        duration: 3,
                        delay: 2,
                        ease: "Cubic.easeOut"
                    }
                );

                gsap.fromTo(
                    ".home-banner-sec .bg-img",
                    {
                        scale: 1
                    },
                    {
                        scale: 1.05,
                        ease: "Cubic.easeOut",
                        scrollTrigger: {
                            trigger: ".home-banner-sec .bg-img",
                            start: "top top",
                            end: "bottom top",
                        //   stagger: 1,
                            scrub: true,
                            // markers: true
                        },
                    }
                );

                // Splitting({ target: document.querySelector('h1'), by: 'chars', whitespace: true });
      
                // gsap.to(".char", { 
                //     opacity: 1,
                //     y: 100,
                //     ease: "back",
                //     duration: 1,
                //     delay: 1,
                //     stagger: 0.1,
                //     // onComplete: () => split.revert()
                // });
                
                // return () => split.revert(); // context cleanup
          
            }, ref);
          
            return () => ctx.revert();
        }
    }, []);

    return (
        <>
            {homePage !== undefined ? <>
                <div ref={ref} className={heroStyles.heroContainer}>
                    <div className="bg-img">
                        <img src={`${homePage?.header_section?.header_slider[currentIndex]?.banner_image.url}`} alt="" />
                    </div>
                    <div className={heroStyles.heroslider} >
                        <Slider {...settings} className={heroStyles.herosliderinner} beforeChange={(currentSlide, nextSlide) => {
                            setCurrentIndex(nextSlide);
                        }}
                        >
                            {homePage?.header_section?.header_slider.map((item, index) => {
                                return (
                                    <div className={`anim-scroll-up-home ${heroStyles.cslide}`} key={index}>
                                        <div>
                                            <h3 className="anim-scroll-up-home">{item?.content_title}</h3>
                                            <div className={heroStyles.slide_desc} >
                                                {item?.content_description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        <div className={`anim-scroll-up-home ${heroStyles.slide_count}`}>
                            <span>{(currentIndex + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</span>/<span>{slidecount.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</span>
                        </div>
                    </div>
                    <div className={heroStyles.textCont}>
                        <div className="title-cont">
                            <h3 className={heroStyles.introTitle}><span className={heroStyles.subtitle}>{homePage?.header_section?.header_slider[currentIndex]?.sub_heading}</span></h3>
                            <h1 ref={titleRef} className={heroStyles.mainTitle}>{homePage?.header_section?.header_slider[currentIndex]?.main_heading}</h1>
                        </div>
                    </div>
                </div>
            </> : null}
        </>
    )
}

export default HomeHero;