import React, { useState, useEffect } from "react";
import Button from "../../partials/buttons";
import * as Styles from "./hoverImage.module.scss";

const HoverImage = (props) => {
  const [homePage, setHomePage] = useState({});
  const [over, setOver] = useState({ index: 0, display: false });

  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setHomePage(props.data);
    }
  }, [props]);

  return (
    <>
      {homePage != undefined ? (
        <>
          <section className={Styles.laifesection}>
            <div className="crow">
              <div className="col-5 col-md-12 order-md-1">
                <div className={Styles.laifeimg}>
                  {Object.keys(homePage).length > 0 ? (
                    <img
                      src={homePage.amenities[over.index].image}
                      alt=""
                      className="fadeinup"
                    />
                  ) : null}
                </div>
              </div>

              <div className="col-7 col-md-12">
                <div className={Styles.lifedesc}>
                  <div className={Styles.lifedescinner}>
                    <h2
                      className={`fadeinup ${Styles.lifetitle}`}
                      data-splitting
                    >
                      {homePage.title}
                    </h2>
                    <p className="fadeinup">{homePage.description}</p>

                    <div className={Styles.hoverList}>
                      <ul>
                        {homePage.amenities?.map((i, index) => {
                          return (
                            <li className="fadeinup" key={index}>
                              <a
                                onMouseOver={() =>
                                  setOver({ index: index, display: true })
                                }
                                onMouseOut={() =>
                                  setOver({ index: index, display: false })
                                }
                                style={{
                                  color:
                                    over.index == index ? "#7B9E6B" : "#635245",
                                  position: "unset",
                                  cursor: "pointer",
                                  textDecoration:
                                    over.index == index ? "underline" : "none",
                                }}
                              >
                                {i.amenity}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <Button
                      link={"/lifestyle-amenities"}
                      styleClass="border-button"
                      text={homePage.button_link?.title}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-md-12  order-md-0">
                            <div className={Styles.lifedesc}>
                                <div className={Styles.lifedescinner}>
                                    <div className="space-top fadeinup">
                                        
                                    </div>
                                </div>
                            </div>
                        </div> */}
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default HoverImage;
