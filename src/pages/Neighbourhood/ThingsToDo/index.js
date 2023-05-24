import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

function ThingsToDo(props) {
  const [togglestate, setToggleState1] = useState(0);
  useEffect(() => {
    if (Object.keys(props).length > 0) {
    }
  }, [props]);

  function toggleAccordion(item, index) {
    setToggleState1(index);
  }

  var settings = {
    speed: 5000,
    // autoplay: true,
    autoplaySpeed: 0,
    // cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    infinite: false,
    // touchThreshold: 300,
    arrows: true,
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
          <div className="things-sec" id={"thingstodo"}>
            <div className="thing-inner-se">
              <h2 className="innerpage_h2">{props.data?.data.title}</h2>
              <p>{props.data?.data.description}</p>
            </div>

            {props.data?.data.data?.map((item, index) => {
              item.open = false;
              return (
                <>
                  <div
                    className="churches-chapels-main-sec anim-scroll-up"
                    key={index}
                    onClick={() => toggleAccordion(item, index)}
                  >
                    <div
                      className="churches-chapels-sec"
                      style={
                        index === togglestate
                          ? { opacity: "1", borderTop: "1px solid #7b9e6b" }
                          : { opacity: "0.25", borderTop: "1px solid #7b9e6b" }
                      }
                    >
                      <div className="churches-title">
                        <h2>{item.group_title}</h2>
                        <span className="">05</span>
                      </div>

                      {index === togglestate ? (
                        <div className="churches-slider">
                          <Slider {...settings}>
                            {item.all_data?.map((innerItem, ind) => {
                              return (
                                <div key={ind}>
                                  <div
                                    className="slider-box"
                                    data-stagger="0.1"
                                  >
                                    <div className="slider-img">
                                      <img src={innerItem.image.url}></img>
                                    </div>
                                    <h3>
                                      <Link to="/neighbourhood">
                                        {innerItem.title}
                                      </Link>
                                    </h3>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Slider>
                        </div>
                      ) : null}
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
