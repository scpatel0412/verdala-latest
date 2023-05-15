import React, { useEffect, useState } from "react";

function CommunalDestination(props) {
  const [lifestylePage, setLifestylePage] = useState({});
  useEffect(() => {
    if (typeof props !== "undefined") {
      setLifestylePage(props?.data);
    }
  }, [props]);

  return (
    <div className="communal-destination-sec" id="acommunaldestination">
      <div className="communal-left anim-scroll-image">
        <img src={lifestylePage.a_communal_destination?.image?.url}></img>
      </div>
      <div className="communal-right">
        <div className="communal-inner">
          <span>{lifestylePage.a_communal_destination?.subTitle}</span>
          <h2 className="anim-text-enter">{lifestylePage.a_communal_destination?.title}</h2>
        </div>
        <p className="anim-text-enter">{lifestylePage.a_communal_destination?.description}</p>
        <button className="btn communal-mob-btn">verdala club</button>
      </div>
    </div>
  );
}

export default CommunalDestination;
