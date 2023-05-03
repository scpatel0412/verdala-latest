import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import { lineimg } from '../../../../images/index.js';

const SmallScreenJourneySection = (props) => {
    const { data } = props
    const [slider, setSliderSlider] = useState({ nav1: null, nav2: null });
    let slider1 = useRef(null);
    return (
        <>
            <Slider
                asNavFor={slider.nav1}
                ref={(slider) => (slider1 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {data?.map((i,index) => {
                    return (
                        <div className="merge-image-count" key={index}>
                            <div className="image-cont">
                                <div className="image-top"><img src={i.image_1.url} /></div>
                                {i.image_2?.url ? (
                                    <div class="image-bottom">
                                        <img className="bg-img" src={i.image_2?.url} alt="" />{" "}
                                    </div>
                                ) : null}
                            </div>
                            <div className="timeline-content">
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                            </div>

                            <p className="count-num" style={{ textAlign: 'center' }}>{i.year}</p>

                            <div className="timeline-module--markerCont--8bb73">
                                <div classNameName='timeline-line-mob'><img src={lineimg}></img></div>
                                <div className="timeline-module--marker--c9edb"></div>
                                <div className="timeline-module--marker--c9edb"></div>
                                <div className="timeline-module--marker--c9edb"></div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    )
}

export default SmallScreenJourneySection
