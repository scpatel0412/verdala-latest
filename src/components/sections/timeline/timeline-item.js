import React from "react";
import * as Style from "./timeline.module.scss";

const TimelineItem = (props) => {
  return (
    <>
      <div className={Style.timelineItem}>
        <div className="row">
          <ImageSection
            {...props}
            classNames={props.classNames}
            classNameYear={props.classNameYear}
          />
          <YearSection
            {...props}
            classNames={props.classNames}
            classNameYear={props.classNameYear}
          />
          <TextSection
            {...props}
            classNames={props.classNames}
            classNameYear={props.classNameYear}
          />
        </div>
      </div>
    </>
  );
};

const TextSection = (props) => {
  const { classNames } = props;
  return (
    <>
      <div className={"col-3 " + (props.odd ? "order-3" : "order-1")}>
        <div className="timeline-content">
          {props.title != null && <h3>{props.title}</h3>}
          {typeof classNames !== "undefined" && classNames.length > 0 ? (
            <p className={`${classNames}`}>{props.text}</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

const ImageSection = (props) => (
  <>
    <div className={"col-3 " + (props.odd ? "order-1" : "order-3")}>
      <div className="merge-image-count">
        <div className="image-cont">
          <div className="image-top">
            <img className="bg-img" src={props?.image?.image_1.url} alt="" />
          </div>
          {props?.image?.image_2?.url ? (
            <div className="image-bottom">
              <img className="bg-img" src={props?.image?.image_2?.url} alt="" />{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </>
);

const YearSection = (props) => {
  const { years } = props;
  var check = props.index == 0 || props.index == 3 || props.index == 4;
  var isThiredIndex = props.index === 2;
  return (
    <>
      <div
        className={"col-1 order-2 justify-center align-center " + Style.yearCol}
      >
        <div className={Style.markerCont}>
          <div className={Style.marker}></div>
          <div className={Style.marker}></div>
          <div className={Style.marker}></div>
          <div className={Style.marker}></div>
          <div className={Style.marker}></div>
          <div className={Style.marker}></div>
          <div className={Style.marker}></div>
        </div>

        <div className={Style.yearCont}>
          <div
            style={{ textAlign: isThiredIndex && "left" }}
            className={
              check
                ? "year-cont font-header text-right"
                : "year-cont font-header text-center"
            }
          >
            <span>{years}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default TimelineItem;
