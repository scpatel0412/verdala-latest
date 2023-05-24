import React, { useState, useEffect } from "react";
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import SecondaryText from "../../typography/secondaryText";
import Carousel from "../carousel/carousel";

import * as Styles from "./page.module.scss";
const PageLocation = (props) => {
  const [homePage, setHomePage] = useState({});
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setHomePage(props.data.neighbourhood);
    }
  }, [props]);

  return (
    <>
      {homePage !== undefined ? (
        <>
          <section className="page-generic red-top-space accent-section pb-20">
            <Container type="fullwidthcontainer extend-container">
              <SectionTitle
                number="04"
                text={homePage.sub_title}
                ptext={homePage.description}
                leftext={true}
              />

              <section className={Styles.locationarea}>
                <div className="crow">
                  <div className="col-5 col-xl-12">
                    <Container>
                      <div
                        className={`anim-scroll-up locationtitle ${Styles.locationtitle}`}
                      >
                        <SecondaryText
                          styleClass="main-title locationline"
                          text={homePage?.locations?.location_sub_title}
                        />

                        <h2 className={Styles.locationheading} data-splitting>
                          {homePage?.locations?.location_title}
                        </h2>
                      </div>
                    </Container>
                  </div>

                  <div className="col-7 col-xl-12">
                    <Carousel data={homePage?.locations?.locations_list} />
                  </div>
                </div>
              </section>
            </Container>
          </section>
        </>
      ) : null}
    </>
  );
};
export default PageLocation;
