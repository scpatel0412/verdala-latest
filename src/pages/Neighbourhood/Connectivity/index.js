import React, { useEffect } from "react";
import Button from "../../../components/partials/buttons";
import Slider from "react-slick";
import walkimg from "../../../images/walk.svg";
import carimg from "../../../images/car.svg";
import neighline from "../../../images/neigh-line.svg";

function Connectivity(props) {
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
          <div className="connectivity-sec" id={props.data.id}>
            <div className="count-col">
              <span className="count-number">02</span>
              <p className="count-title">{props.data.id}</p>
            </div>
            <div className="connectivity-location-sec">
              <div className="connectivity-location-inner">
                <div className="connectivity-subtitle">
                  {props.data?.data.sub_title}
                </div>
                <h2 className="innerpage_h2">{props.data.data.title}</h2>
                <p>{props.data?.data.description}</p>
              </div>
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

              <Slider {...settings}>
                {props.data?.data.neighborhood.neighbourhood_data?.map(
                  (item, ind) => {
                    {
                      /* console.log("neighbourhood_data_item", item); */
                    }
                    return (
                      <div className="neighborhood-bottom-inner" key={ind}>
                        <div className="neighborhood-circle-btn-list">
                          <div className="neigh-circle">
                            <img src={walkimg}></img>
                          </div>
                          <div className="neigh-circle">
                            <img src={carimg}></img>
                          </div>

                          <div className="neighborhood-circle-line">
                            <img src={neighline}></img>
                          </div>
                          <div className="neighborhood-connectivity-line">
                            <p>{item.walking_distance}</p>
                            <span className="cst-circle"></span>
                          </div>
                        </div>
                        <div className="neighborhood-bottom-right-inner">
                          <div className="neighborhood-bottom-right-img">
                            <img src={item.image.url} alt="" />
                          </div>
                          <div className="neighborhood-bottom-right-content">
                            <div>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                            </div>
                          </div>
                          <Button
                            text={
                              props.data?.data.neighborhood
                                .neighbourhood_data[0].button.title
                            }
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </Slider>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Connectivity;
