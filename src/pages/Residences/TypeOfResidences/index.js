import React, { useState, useEffect } from "react";
import Container from "../../../components/layouts/container";
import ResidencesCard from "../../../components/property/residences-cardNew";
import * as Pagegeneric from "../../../components/sections/page/page.module.scss";
import { arrow } from '../../../images'
import SmallCard from "../../../components/property/small-card";

const TypeOfResidences = (props) => {
  let headerheight1 = document.querySelector("header");
  
  const [residencesPage, setResidencesPage] = useState({});
  const [currentPropertyName, setCurrentPropertyName] = useState(0);

  useEffect(() => {
    if (typeof props !== "undefined") {
      setResidencesPage(props?.data);
    }
  }, [props]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
      let mainSections = document.querySelectorAll(".scroll-container >  div");
      let headerheight1 = document.querySelector("header");
      let lastId;
      let cur = [];

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
          let fromTop = window.pageYOffset;
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
    }
  }, [props]);

  const onClickResidences = (index) => {
    setCurrentPropertyName(index);
  };

  return (
    <>
    {Object.keys(residencesPage).length > 0 ? <>
      <section className={` ${Pagegeneric.secgeneric1}`}>
      <div id={"typeofresidence"} className="typeresidence-sec">
        <div className="type-col-sec">
          <div className="count-col">
            <span className="count-number">03</span>
            <p className="count-title">
              {residencesPage?.type_of_residence?.sub_title}
            </p>
          </div>
          <h2 className="innerpage_h2">
            {residencesPage?.type_of_residence?.title}
          </h2>
          <p>{residencesPage?.type_of_residence?.description}</p>
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
                    {residencesPage?.type_of_residence?.property_?.map(
                      (item, index2) => {
                        return (
                          <div key={index2}>
                            <li
                              className={`fadeinup ${
                                currentPropertyName === index2 && "active"
                              }`}
                            >
                              <a
                                className={`#residences-${index2}`}
                                data-splitting
                                onClick={() => onClickResidences(index2)}
                                href={`#residences-${index2}`}
                              >
                                {item.title}
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
                {residencesPage?.type_of_residence?.property_?.map(
                  (i, index2) => {
                    return (
                      <div id={`residences-${index2}`}>
                        {i.property.map((item, index) => {
                          return (
                            <>
                              <ResidencesCard
                                key={index}
                                Id={item.ID}
                                id={i.title}
                                title={item?.post_title}
                              />
                            </>
                          );
                        })}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className='sticky-tabing-mob'>
              {residencesPage?.type_of_residence?.property_?.map((item, index) => {
                return (
                  <div className='tabing-inner-mob' key={index}>
                    <div className='tabb-img'>
                      <SmallCard Id={item.property[0].ID} />
                    </div>
                    <div className='tabb-content'>
                      <span>{item.title}</span>
                      <img src={arrow} />
                    </div>
                  </div>
                )
              })}
              <button class="btn">all residences</button>
          </div>
      </div>
    </section>
    </> : null }
  
    </>
  );
  
};

export default TypeOfResidences;
