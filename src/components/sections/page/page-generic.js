
import React, { useState, useEffect } from "react";
import ResidencesCard from "../../property/residences-cardNew";
import * as Pagegeneric from "./page.module.scss";
import { arrow } from '../../../images'
import SmallCard from "../../../components/property/small-card";
import Button from "../../partials/buttons";

const PageGeneric = (props) => {
  const [homePage, setHomePage] = useState({});
  const [currentPropertyName, setCurrentPropertyName] = useState(0);
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setHomePage(props.data.residences);
    }
  }, [props]);

  const onClickResidences = (index) => {
    setCurrentPropertyName(index);
  };
  let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
  let mainSections = document.querySelectorAll(".scroll-container >  div");
  let headerheight1 = document.querySelector("header");
  let lastId;
  let cur = [];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach((link) => {
        let section = document.querySelector(link.hash);
        let headerheight = document.querySelector("header");
        if (
          section?.offsetTop !== null &&
          headerheight.offsetHeight !== null &&
          section?.offsetHeight !== null
        ) {
          if (
            section?.offsetTop - headerheight?.offsetHeight <= fromTop &&
            section?.offsetTop -
            headerheight.offsetHeight +
            section?.offsetHeight >
            fromTop
          ) {
            link.parentElement.classList.add("active");
          } else {
            link.parentElement.classList.remove("active");
          }
        }
      });
    });
  }
  return (
    <>
      <section className={` ${Pagegeneric.secgeneric1}`}>
        <div id={"typeofresidence"} className="typeresidence-sec">
          <div className="type-col-sec">
            <div className="count-col">
              <span className="count-number">03</span>
              <p className="count-title">
                {homePage?.sub_title}
              </p>
            </div>
            <h2 className="innerpage_h2">
              {homePage?.title}
            </h2>
            <p>{homePage?.description}</p>
          </div>
          <div className="crow sticky-tabing-sec">
            <div
              className="col-3 col-lg-12 sticky-menu sticky-mobile"
              style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
            >
              <div
                className="sticky-menu"
                style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
              >
                <div className="sticky-inner">
                  <ul>
                    {homePage?.property_type?.map(
                      (item, index2) => {
                        return (
                          <div key={index2}>
                            <li
                              className={`fadeinup ${currentPropertyName === index2 && "active"
                                }`}
                            >
                              <a
                                className={`#residences-${index2}`}
                                data-splitting
                                onClick={() => onClickResidences(index2)}
                                href={`#residences-${index2}`}
                              >
                                {item.property_type_name}
                              </a>
                            </li>
                          </div>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-9 col-lg-12 sticky-content">
              <div className="scroll-container">
                {homePage?.property_type?.map(
                  (item, index2) => {                    
                    return (
                      <div id={`residences-${index2}`} key={index2}>
                        <>
                          <ResidencesCard
                            key={index2}
                            Id={item.property_details[0]}
                            id={item?.property_type_name}
                            title={item?.property_type_name}
                          />
                        </>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className='sticky-tabing-mob'>
            {homePage?.property_type?.map((item, index) => {
              return (
                <div className='tabing-inner-mob' key={index}>
                  <div className='tabb-img'>
                    <SmallCard Id={item.property_details[0]} />
                  </div>
                  <div className='tabb-content'>
                    <span>{item.property_type_name}</span>
                    <img src={arrow} />
                  </div>
                </div>
              )
            })}
            <Button className="btn" link={'/the-residences'} text={'all residences'}></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageGeneric;