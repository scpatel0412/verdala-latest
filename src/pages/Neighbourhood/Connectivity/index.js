import React, { useEffect, useState} from "react";
import Button from "../../../components/partials/buttons";
import WalkDistance from "../../../assets/svgs/walkdistance.svg";
import CarDistance from "../../../assets/svgs/cardistance.svg";
import Mapping from "../Mapping";
import * as Styles from "../../../components/sections/page/page.module.scss";
import Container from "../../../components/layouts/container.js";
function Connectivity(props) {
  const [isActive, setActive] = useState(0);
  const ToggleClass = (index) => {
    setActive(index);
  };
  useEffect(() => {
    if (Object.keys(props).length > 0) {
      // console.log("connectivity", props.data);
    }
  }, [props]);

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

  return (
    <>
      {Object.keys(props).length > 0 ? (
        <>
          <div className="connectivity-sec" id={props?.data?.id}>
            <div className="connectivity-location-sec">
              <div className="connectivity-location-inner">
                <div className="connectivity-location-inner-div">
                  <div className="count-col">
                    <span className="count-number">02</span>
                    <p className="count-title">{props.data.id}</p>
                  </div>
                  <div className="connectivity-subtitle">
                    {props.data?.data.sub_title}
                  </div>
                  <h2 className="innerpage_h2">{props.data.data.title}</h2>
                  <p>{props.data?.data.description}</p>
                </div>
              </div>
              <Mapping />
            </div>

            <div className="neighborhood-sec">
              <div className="neighborhood-top-inner">
                <div className="neighborhood-content">
                  <div className="connectivity-subtitle">
                    {props.data?.data.neighborhood.sub_title}
                  </div>
                  <h2 className="innerpage_h2">
                    {props.data?.data.neighborhood.title}
                  </h2>
                </div>
              </div>
             
              <section className={Styles.pt80}>
                <div className="crow home-connectivity-bottom">
                  <div className="col-5 col-lg-12 anim-parallax">
                    <div
                      className={`${Styles.mainattrcontainer} ${Styles.h100}`}
                    >
                      <Container
                        type={`extend-container ${Styles.h100} ${
                          Styles[`activattr_${isActive}`]
                        }`}
                      >
                        <div
                          className={`${Styles.locationtitle} ${Styles.h100} ${Styles.attrcontainer}`}
                        >
                          <div className={Styles.connectattr}>
                            <div
                              className={`${Styles.attritem}  ${
                                isActive === 0 ? Styles.attractive : ""
                              }`}
                              onClick={() => ToggleClass(0)}
                            >
                              <WalkDistance />
                              <div
                                className={
                                  Styles.attrdistance + " anim-parallax "
                                }
                              >
                                {
                                  props.data?.data?.neighborhood
                                    ?.neighbourhood_data[isActive]
                                    ?.walking_distance
                                }
                              </div>
                            </div>
                            <div
                              className={`${Styles.attritem}  ${
                                isActive === 1 ? Styles.attractive : ""
                              }`}
                              onClick={() => ToggleClass(1)}
                            >
                              <div
                                className={
                                  Styles.attrdistance + " anim-parallax "
                                }
                              >
                                {
                                  props.data?.data?.neighborhood
                                    ?.neighbourhood_data[isActive]
                                    ?.driving_distance
                                }
                              </div>
                              <CarDistance />
                            </div>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>

                  <div className="col-7 col-lg-12">
                    <div className={`crow align-bottom ${Styles.connectivity}`}>
                      <div className="col-8 col-sm-12 anim-scroll-up anim-parallax">
                        <img
                          src={
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.image?.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-4 col-sm-12 anim-scroll-up">
                        <h3
                          className={`text-color anim-text-enter ${Styles.schoolheading}`}
                        >
                          {
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.title
                          }
                        </h3>
                        <p className="anim-text-enter">
                          {
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.description
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crow home-connectivity-bottom secondary-locations">
                  <div className="col-5 col-lg-12 anim-scroll-up anim-parallax">
                    <div
                      className={`${Styles.mainattrcontainer} ${Styles.h100}`}
                    >
                      <Container
                        type={`extend-container ${Styles.h100} ${
                          Styles[`activattr_${isActive}`]
                        }`}
                      >
                        <div
                          className={`${Styles.locationtitle} ${Styles.h100} ${Styles.attrcontainer}`}
                        >
                          <div className={Styles.connectattrSec}>
                            <div
                              className={`${Styles.attritem}  ${
                                isActive === 0 ? Styles.attractive : ""
                              }`}
                              onClick={() => ToggleClass(0)}
                            >
                              <WalkDistance />
                              <div className={Styles.attrdistance}>
                                {
                                  props.data?.data?.neighborhood
                                    ?.neighbourhood_data[isActive]
                                    ?.walking_distance
                                }
                              </div>
                            </div>
                            <div
                              className={`${Styles.attritem}  ${
                                isActive === 1 ? Styles.attractive : ""
                              }`}
                              onClick={() => ToggleClass(1)}
                            >
                              <div className={Styles.attrdistance}>
                                {
                                  props.data?.data?.neighborhood
                                    ?.neighbourhood_data[isActive]
                                    ?.driving_distance
                                }
                              </div>
                              <CarDistance />
                            </div>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>

                  <div className="col-7 col-lg-12">
                    <div className={`crow align-bottom ${Styles.connectivity}`}>
                      <div className="col-8 col-sm-12 anim-scroll-up anim-parallax">
                        <img
                          src={
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.image?.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-4 col-sm-12 anim-scroll-up">
                        <h3
                          className={`text-color anim-text-enter ${Styles.schoolheading}`}
                        >
                          {
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.title
                          }
                        </h3>
                        <p className="anim-text-enter">
                          {
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.description
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="crow home-connectivity-bottom secondary-locations">
                  <div className="col-5 col-lg-12 anim-scroll-up">
                    <div
                      className={`${Styles.mainattrcontainer} ${Styles.h100}`}
                    >
                      <Container
                        type={`extend-container ${Styles.h100} ${
                          Styles[`activattr_${isActive}`]
                        }`}
                      >
                        <div
                          className={`${Styles.locationtitle} ${Styles.h100} ${Styles.attrcontainer}`}
                        >
                          <div className={Styles.connectattrSec}>
                            <div
                              className={`${Styles.attritem}  ${
                                isActive === 0 ? Styles.attractive : ""
                              }`}
                              onClick={() => ToggleClass(0)}
                            >
                              <WalkDistance />
                              <div className={Styles.attrdistance}>
                                {
                                  props.data?.data?.neighborhood
                                    ?.neighbourhood_data[isActive]
                                    ?.walking_distance
                                }
                              </div>
                            </div>
                            <div
                              className={`${Styles.attritem}  ${
                                isActive === 1 ? Styles.attractive : ""
                              }`}
                              onClick={() => ToggleClass(1)}
                            >
                              <div className={Styles.attrdistance}>
                                {
                                  props.data?.data?.neighborhood
                                    ?.neighbourhood_data[isActive]
                                    ?.driving_distance
                                }
                              </div>
                              <CarDistance />
                            </div>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>

                  <div className="col-7 col-xl-8 col-lg-12 connectivity-content">
                    <div className={` crow align-bottom ${Styles.connectivity}`}>
                      <div className="col-8 col-sm-12 anim-scroll-up anim-parallax">
                        <img
                          src={
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.image?.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-4 col-sm-12 fadeinup connectivity-img-content">
                        <h3
                          className={`text-color anim-text-enter ${Styles.schoolheading}`}
                        >
                          {
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.title
                          }
                        </h3>

                        <p className="anim-text-enter">
                          {
                            props.data?.data?.neighborhood?.neighbourhood_data[
                              isActive
                            ]?.description
                          }
                        </p>
                      </div>
                    </div>

                    <Button
                      styleClass="border-button"
                      text={
                        props.data?.data.neighborhood.neighbourhood_data[0]
                          .button.title
                      }
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Connectivity;
