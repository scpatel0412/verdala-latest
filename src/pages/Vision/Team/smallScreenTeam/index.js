import React, { useRef, useState } from 'react'
import Slider from 'react-slick'

const SmallScreenTeam = (props) => {
  const { data } = props
  const [slider, setSliderSlider] = useState({ nav1: null, nav2: null });
  let slider1 = useRef(null);
  return (
    <div className='visionpage-team-section'>
      {data?.map((item,index) => {
        var check = item.team_members.length > 1
        if (check) {
          item.team_members.less = true
        }
        return (
          <>
            <div className="team-section" key={index}>
              <span className="tab-titlt-mob">{item.team_name}</span>
              <Slider
                asNavFor={slider.nav1}
                ref={(slider) => (slider1 = slider)}
                slidesToShow={check ? 2 : 1}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                {item.team_members.map((i,index) => {
                  return (
                    <div className={"tab-image-mob"} key={index}><img src={i.url} style={{
                      width: !item.team_members.less && '50%',
                    }} /></div>
                  )
                })}
              </Slider>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default SmallScreenTeam
