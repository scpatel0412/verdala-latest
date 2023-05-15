import React, { useState, useEffect } from "react";
// import Container from "../../../components/layouts/container";
import * as Pagegeneric from "../../../components/sections/page/page.module.scss";
import SmallscreenLifestyle from "./smallscreenLifestyle";
const Lifestyle = (props) => {
  const [lifestylePage, setLifestylePage] = useState({});
  const [currentLifestyleName, setCurrentLifestyleName] = useState(0);

  // let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
  // let mainSections = document.querySelectorAll(".scroll-container >  div");
  let headerheight1 = 0;
  if (typeof document !== "undefined") {
    headerheight1 = document.querySelector("header");
  }
  // let lastId;
  // let cur = [];

  useEffect(() => {
    if (typeof props !== "undefined") {
      setLifestylePage(props?.data);
    }
  }, [props]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
      // let mainSections = document.querySelectorAll(".scroll-container >  div");
      // let headerheight1 = document.querySelector("header");
      // let lastId;
      // let cur = [];
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
          let fromTop = window.pageYOffset;
          mainNavLinks.forEach((link) => {
            let section = document.querySelector(link.hash);
            let headerheight = 0;
            if (typeof document !== "undefined") {
              headerheight = document.querySelector("header");
            }

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

  const handlerLifestyle = (index) => {
    setCurrentLifestyleName(index);
  };

  return (
    <>
      <section className={` ${Pagegeneric.secgeneric}`}>
        <div id={"lifestyle"} className="lifestyle-team-sec">
          <div class="count-col anim-scroll-up">
            <span class="count-number">03</span>
            <p class="count-title">{lifestylePage.lifestyle?.sub_title}</p>
          </div>
          <div className="team-content">
            <h2 className="innerpage_h2">{lifestylePage.lifestyle?.title}</h2>
            <p>{lifestylePage.lifestyle?.description}</p>
          </div>
          
          <div className="crow">
              <div
                className="col-3 col-lg-12 sticky-menu sticky-mobile"
                style={{
                  top: headerheight1 ? headerheight1.offsetHeight : "",
                }}
              >
                <div
                  className="sticky-menu"
                  style={{
                    top: headerheight1 ? headerheight1.offsetHeight : "",
                  }}
                >
                  <div className="sticky-inner">
                    <ul className="recidence-meet-left-inner">
                      {lifestylePage?.lifestyle?.lifestyle_data.map(
                        (item, index2) => {
                          return (
                            <div key={index2}>
                              <li
                                className={`team-teamData-container fadeinup ${
                                  currentLifestyleName === index2 && "active"
                                }`}
                              >
                                <a
                                  className={`text  lifestyle-${index2}`}
                                  data-splitting
                                  onClick={() => handlerLifestyle(index2)}
                                  href={`#lifestyle-${index2}`}
                                >
                                  {item.tab_title}
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

              <div className="col-9 col-lg-12">
                <div className="scroll-container">
                  {lifestylePage?.lifestyle?.lifestyle_data.map((i, index2) => {
                    return (
                      <div
                        id={`lifestyle-${index2}`}
                        className="lifestyle-inner-scroll-main"
                      >
                        {i.data.map((item, index) => {
                          return (
                            <>
                              <div
                                key={index}
                                className="lifestyle-inner-scroll-item"
                              >
                                <div className="lifestyle-inner-scroll-img anim-scroll-up">
                                  <img src={item.image.url}></img>
                                </div>
                                <h3 className="anim-text-enter">{item.title}</h3>
                                <p className="anim-text-enter">{item.description}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
           </div>
          
        </div>
        <div className="lifestyle-team-mob-view">
          <SmallscreenLifestyle
                data={lifestylePage?.lifestyle?.lifestyle_data}
          />
        </div>
      </section>
    </>
  );
};

export default Lifestyle;
