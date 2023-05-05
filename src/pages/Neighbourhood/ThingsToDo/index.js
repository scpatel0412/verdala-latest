import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

function ThingsToDo(props) {
  useEffect(() => {
    if (Object.keys(props).length > 0) {
    }
  }, [props]);

  var settings = {
    // speed: 5000,
    // autoplay: true,
    autoplay: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    // infinite: true,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 989,
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
      {Object.keys(props).length > 0 ? (
        <>
          <div className="things-sec" id={props.data?.id}>
            <div className="thing-inner-se">
              <h2 className="innerpage_h2">{props.data?.data.title}</h2>
              <p>{props.data?.data.description}</p>
            </div>

            {props.data?.data.data?.map((item, index) => {
              return (
                <>
                  <div className="churches-chapels-main-sec" key={index}>
                    <div className="churches-chapels-sec">
                      <div className="churches-title">
                        <h2>{item.group_title}</h2>
                        <span className="">05</span>
                      </div>
                      <div className="churches-slider">
                        <Slider {...settings}>
                          {item.all_data?.map((innerItem, ind) => {
                            {
                              /* console.log("innerItemmap", innerItem); */
                            }
                            return (
                              <div key={ind}>
                                <div className="slider-box">
                                  <div className="slider-img">
                                    <img src={innerItem.image.url}></img>
                                  </div>
                                  <h3>
                                    <Link to="/neighbourhood">
                                      {innerItem.title}
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}

export default ThingsToDo;
