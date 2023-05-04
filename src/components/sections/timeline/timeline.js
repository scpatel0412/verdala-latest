import React, { useEffect, useState, useContext } from "react";
import Container from "../../layouts/container";
import TimelineItem from "./timeline-item";
import { ResizeContext } from "../../resize";
import SmallScreenJourneySection from "../../../pages/Vision/JourneySection/smallScreenJourney";

const Timeline = (props) => {
  const { width } = useContext(ResizeContext);
  const mobileScreen = width <= 699;
  useEffect(() => {}, [props]);
  const [data, setData] = useState([]);

  const [visionPage, setVisionPage] = useState({});

  useEffect(() => {
    if (typeof props.timelineSection !== "undefined") {
      setVisionPage(props.timelineSection);
    }
  }, [props]);
  useEffect(() => {
    const all = props?.timelineSection?.timeline_data;

    for (let i = 0; i < all?.length; i++) {
      all[i].Class = "";
      all[i].classYear = "";
      if (i === 0) {
      }
      if (i % 2 === 0) {
        if (i === 0) {
          all[i].Class = "class-0";
          all[i].classYear = "text-right";
        } else {
          all[i].Class = all[i - 2].Class === "class-0" ? "class-1" : "class-0";
          all[i].classYear =
            all[i - 2].classYear === "text-right"
              ? "text-center"
              : "text-right";
        }
      } else {
        all[i].Class = all[i - 1].Class;
        all[i].classYear = all[i - 1].classYear;
      }
    }

    setData(all);
  }, [props]);

  return (
    <>
      {visionPage != undefined ? (
        <Container>
          <div className="count-col">
            <span className="count-number">01</span>
          </div>
          <h1 className="text-center">
            {props?.timelineSection?.timeline_title}
          </h1>
          {mobileScreen ? (
            <SmallScreenJourneySection
              data={props?.timelineSection?.timeline_data}
            />
          ) : (
            props?.timelineSection?.timeline_data?.map((i, index) => {
              if (index % 2 !== 0) {
                i.odd = true;
              } else {
                i.odd = false;
              }
              return (
                <>
                  <TimelineItem
                    title={i.title}
                    text={i.description}
                    years={i.year}
                    image={i}
                    odd={i.odd}
                    index={index}
                    classNames={i.Class}
                    classNameYear={i.classYear}
                    mobileScreen={mobileScreen}
                  />
                </>
              );
            })
          )}
        </Container>
      ) : null}
    </>
  );
};

export default Timeline;
