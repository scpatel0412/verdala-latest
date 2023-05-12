import React, { useEffect } from "react";
import * as heroStyles from "./hero.module.scss";

const PageHero = (props) => {
  useEffect(() => {}, [props]);

  return (
    <>
      <div
        className={
          props.redHeight
            ? heroStyles.heroContainer
            : heroStyles.heroContainer + " anim-banner " + heroStyles.heroContainerRed
        }
      >
        <div className={heroStyles.heroImage}>
          <img
            className="bg-img"
            src={props.headerData?.header_image?.url}
            alt=""
          />
        </div>

        <div className={heroStyles.pageTextCont}>
          <div className={"title-cont text-center " + heroStyles.titleCont}>
            <h1 className={heroStyles.pageMainTitle}>
              {props.headerData?.header_title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHero;
