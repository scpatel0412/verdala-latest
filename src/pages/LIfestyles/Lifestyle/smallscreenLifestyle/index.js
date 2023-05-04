import React, { useRef, useState } from "react";
import Slider from "react-slick";

const SmallscreenLifestyle = (props) => {
  const { data } = props;
  const [slider, setSliderSlider] = useState({ nav1: null, nav2: null });
  let slider1 = useRef(null);
  return (
    <div>
      {data?.map((item, index) => {
        console.log(item, "item");
        var check = item.data.length > 1;
        if (check) {
          item.data.less = true;
        }
        return (
          <>
            <div className="" key={index}>
              <span className="">{item.tab_title}</span>
              <Slider
                asNavFor={slider.nav1}
                ref={(slider) => (slider1 = slider)}
                slidesToShow={check ? 2 : 1}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                {item.data.map((i, index) => {
                  return (
                    <div className="" key={index}>
                      <img
                        src={i.image.url}
                        style={{
                          width: !item.data.less && "50%",
                        }}
                      />
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
