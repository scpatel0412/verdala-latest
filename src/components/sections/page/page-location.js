import React, { useState, useEffect, useContext } from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import SecondaryText from "../../typography/secondaryText";
import Carousel from "../carousel/carousel";
import Button from "../../partials/buttons";
import WalkDistance from '../../../assets/svgs/walkdistance.svg'
import CarDistance from '../../../assets/svgs/cardistance.svg'
import { ResizeContext } from '../../../components/resize';
import * as Styles from "./page.module.scss"
import Slider from "react-slick";
import walkimg from "../../../images/walk.svg";
import carimg from "../../../images/car.svg";
import neighline from "../../../images/neigh-line.svg";

const PageLocation = (props) => {
    const [isActive, setActive] = useState(0);
    const [homePage, setHomePage] = useState({});
    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data.neighbourhood);
        }
    }, [props]);
    
    const ToggleClass = (index) => {
        setActive(index);
    };
    const { width } = useContext(ResizeContext)
    // console.log("width++",width);

    var settings = {
        speed: 5000,
        // autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // infinite: true,
        arrows: false,
        buttons: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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
      console.log("home ++",homePage);
    return (
        <>
            {homePage != undefined ? <>
                <section className="page-generic red-top-space accent-section pb-20">

                    <Container type="fullwidthcontainer extend-container">
                        <SectionTitle
                            number="04"
                            text={homePage.sub_title}
                            ptext={homePage.description}
                        />

                        <section className={Styles.locationarea}>
                            <div className="crow">
                                <div className="col-5 col-xl-12">
                                    <Container>
                                        <div className={`fadeinup locationtitle ${Styles.locationtitle}`}>
                                            <SecondaryText
                                                styleClass="main-title locationline"
                                                text={homePage?.locations?.location_sub_title}
                                            />

                                            <h2 className={Styles.locationheading} data-splitting>{homePage?.locations?.location_title}</h2>
                                        </div>
                                    </Container>
                                </div>

                                <div className="col-7 col-xl-12">
                                    <Carousel data={homePage?.locations?.locations_list} />
                                </div>
                            </div>
                        </section>

                        <section className={Styles.pb0}>
                            <div className="crow home-connectivity-sec">
                                <div className="col-5 col-xl-12">
                                    <Container>
                                        <div className={`fadeinup locationtitle ${Styles.locationtitle}`}>
                                            <SecondaryText
                                                styleClass="main-title locationline"
                                                text={homePage?.connectivity?.connectivity_sub_title}
                                            />
                                        </div>
                                    </Container>

                                </div>

                                <div className="col-7 col-xl-12">
                                    <h2 className={Styles.locationheading} data-splitting>{homePage?.connectivity?.connectivity_title}</h2>
                                </div>
                            </div>
                        </section>
                        {homePage?.connectivity?.connectivity_places.map((item,index) => {
                            return (
                                <section className={Styles.pt80} key={index}>
                                    <div className="crow home-connectivity-bottom">
                                    <div className="col-5 col-lg-12 fadeinup">
                                        <div className={`${Styles.mainattrcontainer} ${Styles.h100}`}>

                                            <Container type={`extend-container ${Styles.h100} ${Styles[`activattr_${isActive}`]}`}>
                                                <div className={`${Styles.locationtitle} ${Styles.h100} ${Styles.attrcontainer}`} >
                                                    <div className={Styles.connectattr}>
                                                        <div className={`${Styles.attritem}  ${isActive === 0 ? Styles.attractive : ""}`} onClick={() => ToggleClass(0)}>
                                                            <WalkDistance />
                                                            <div className={Styles.attrdistance}>{item.place_reach_time_by_walk}</div>
                                                        </div>
                                                        <div className={`${Styles.attritem}  ${isActive === 1 ? Styles.attractive : ""}`} onClick={() => ToggleClass(1)}>
                                                            <div className={Styles.attrdistance}>{item.place_reach_time_by_car}</div>
                                                            <CarDistance />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Container>
                                        </div>
                                    </div>

                                    <div className="col-7 col-lg-12">

                                        <div className={`crow align-bottom ${Styles.connectivity}`}>
                                            <div className="col-8 col-sm-12 fadeinup">
                                                <img src={item.place_image.url} alt="" />
                                            </div>
                                            <div className="col-4 col-sm-12 fadeinup">
                                                <h3 className={`text-color ${Styles.schoolheading}`}>{item.place_title}</h3>
                                                <p>{item.place_description}</p>
                                            </div>
                                        </div>

                                        <Button
                                            styleClass="border-button"
                                            text={homePage.button_link.title}
                                        />
                                    </div>
                                </div>
                                </section>
                            )
                        })}
                    </Container>
                </section>
            </> : null}

        </>
    )
}
export default PageLocation;