import React, { useEffect } from "react";
import HomeImg from '../../assets/images/test-images/home-image.png';
import * as heroStyles from "./hero.module.scss";

const PageHero = (props) => {
  useEffect(() => {}, [props]);

  return (
    <>
      <div
        className={
          props.redHeight
            ? heroStyles.heroContainer
            : heroStyles.heroContainer + " " + heroStyles.heroContainerRed
        }
      >
        <div className={heroStyles.heroImage}>
          <img
            className="bg-img"
            src={(props.headerData?.header_image?.url ? props.headerData?.header_image?.url : HomeImg)}
            alt=""
          />
        </div>

        <div className={heroStyles.pageTextCont}>
          <div data-anim-banner="compact" className={"title-cont text-center " + heroStyles.titleCont}>
            <h1 className={heroStyles.pageMainTitle}>
              {(props.headerData?.header_title) ? props.headerData?.header_title : props.title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHero;
