import React, { useRef, useState } from "react";
import Slider from "react-slick";

const SmallscreenLifestyle = (props) => {
  const { data } = props;
  const [slider, setSliderSlider] = useState({ nav1: null, nav2: null });
  let slider1 = useRef(null);
  return (
    <div className="lifestyle-team-mob-slider">
      {data?.map((item, index) => {
        var check = item.data.length > 1;
        if (check) {
          item.data.less = true;
        }
        return (
          <>
            <div className="lifestyle-team-mob-slider-item" key={index}>
              <h5 className="">{item.tab_title}</h5>
              <Slider
                asNavFor={slider.nav1}
                ref={(slider) => (slider1 = slider)}
                slidesToShow={check ? 1 : 1}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                {item.data.map((i, index) => {
                  return (
                    <div className="" key={index}>
                      <div className="lifestyle-team-mob-slider-img">
                        <img src={i.image.url} />
                      </div>
                      <h3>{i.title}</h3>
                      <p>{i.description}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SmallscreenLifestyle;
