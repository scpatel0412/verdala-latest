import React, { useEffect, useState } from "react";
import Timeline from "../../../components/sections/timeline/timeline";

const JourneySection = (props) => {
  const [visionPage, setVisionPage] = useState({});
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setVisionPage(props.data.timeline_section);
    }
  }, [props]);

  return (
    <>
      {visionPage != undefined ? (
        <div className="journey-sec">
          <Timeline timelineSection={visionPage} />
        </div>
      ) : null}
    </>
  );
};

export default JourneySection;
