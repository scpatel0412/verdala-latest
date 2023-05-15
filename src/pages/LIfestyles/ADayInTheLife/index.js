import React, { useEffect, useState } from "react";

function ADayInTheLIfe(props) {
  const [lifestylePage, setLifestylePage] = useState({});

  useEffect(() => {
    if (typeof props !== "undefined") {
      setLifestylePage(props?.data);
    }
  }, [props]);


  return (
    <div className="dawn-till-sec" id="adayinthelife">
      <div className="dawn-till-inner">
        <div className="dawn-till-img">
          <img
            src={lifestylePage.a_day_in_the_life?.image?.url}
            className=""
            alt=""
          />
        </div>
        <div className="dawn-content">
          
          <div className="dawn-content-inner">
            <h2>{lifestylePage.a_day_in_the_life?.description}</h2>
            <p className="dawn-content-p-mob">
              {lifestylePage.a_day_in_the_life?.description_2}
            </p>
            <button className="btn">
              {lifestylePage.a_day_in_the_life?.button?.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADayInTheLIfe;
