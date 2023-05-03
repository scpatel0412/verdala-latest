import React from "react";
import HeroImg from "../../../assets/images/test-images/home-image.png";
import Container from "../../layouts/container";
import Button from "../../partials/buttons";
import SectionTitle from "../../partials/section-title";
import ResidencesCard from "../../property/residences-card";
import * as Pagegeneric from "./page.module.scss";

const PageGeneric = (props) => {
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
      <section className={`page-generic ${Pagegeneric.secgeneric}`}>
        <Container>
          <SectionTitle
            number="03"
            text="Residences"
            title="Types of Residences"
          />
          {/* <div className="row">
                    <div className="col">
                    </div>

                    <div className="col">
                        <h2>Types of Residences</h2>
                    </div>
                </div> */}

          <section
            className={`fadeinup narrow-text-cont ${Pagegeneric.nerrowtxt}`}
          >
            <p className={Pagegeneric.nerrowdesc}>
              The serenity of the Verdala beyond permeates every space within
              your home, a seamless flow of tranquillity that floats on a sea
              breeze. Masterfully defined living spaces are inter-connected yet
              cosseting at the same time. Reverse cycle air-conditioning and
              signature fireplace help create perfect ambience for a cosy night
              alone, or evening of entertainment.
            </p>
          </section>

          <div className="crow">
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
                    <li className="fadeinup active">
                      <a data-splitting href="#residencescard1">
                        Aparments
                      </a>
                    </li>
                    <li className="fadeinup">
                      <a data-splitting href="#residencescard2">
                        Terraces
                      </a>
                    </li>
                    <li className="fadeinup">
                      <a data-splitting href="#residencescard3">
                        Penthouse
                      </a>
                    </li>
                    <li className="fadeinup">
                      <a data-splitting href="#residencescard4">
                        Villa
                      </a>
                    </li>
                  </ul>
                  <div className="stickybtn fadeinup">
                    <Button styleClass="border-button" text="All Residences" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9 col-lg-12">
              <div className="scroll-container">
                <ResidencesCard
                  title="Luxury apartment"
                  id="residencescard1"
                  text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                  image={HeroImg}
                />

                <ResidencesCard
                  title="Terraces"
                  id="residencescard2"
                  text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                  image={HeroImg}
                />
                <ResidencesCard
                  title="Penthouse"
                  id="residencescard3"
                  text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                  image={HeroImg}
                />
                <ResidencesCard
                  title="Villa"
                  id="residencescard4"
                  text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                  image={HeroImg}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PageGeneric;
