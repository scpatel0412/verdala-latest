import { Link } from "gatsby";
import React from "react";
import HeroImg from "../../../assets/images/test-images/footer.jpg";
import Call from "../../../assets/images/test-images/call.png";
import Home from "../../../assets/images/test-images/home.png";
import Media from "../../../assets/images/test-images/media.png";
import ButtonArrow from "../../../assets/svgs/button-arrow.svg";
import VerdalaFooter from "../../../assets/svgs/verdala-footer.svg";
import Container from "../../layouts/container";
// import Button from "../../partials/buttons";
import * as Styles from "./footer.module.scss";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = (props) => (
  <>
    <section
      style={{
        backgroundImage: "url(" + HeroImg + ")",
        backgroundSize: "cover",
      }}
    >
      <Container type={`extend-container`}>
        <div className={`anim-scroll-up ${Styles.locationtitle}`}>
          <div className="crow">
            <div className="col-4 col-xl-12">
              <h2 className={Styles.title} data-splitting>
                Interested in Verdala?
              </h2>
            </div>

            <div className="col-8 col-xl-12">
              <div className={Styles.footergrid}>
                <FooterCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="dark-section red-top-space foote-bottom">
      <Container>
        <div className="footer-nav">
          <nav>
            <ul>
              <li>
                <Link>AX Story</Link>
              </li>

              <li>
                <Link>Blog</Link>
              </li>

              <li>
                <Link>News</Link>
              </li>

              <li>
                <Link>Development Progress</Link>
              </li>

              <li>
                <Link>Media Centre</Link>
              </li>
            </ul>
          </nav>
        </div>

        <section>
          <div className="footer-menu-merge crow align-center justify-center space-center text-center">
            <div className="col-3 col-md-12 col-lg-12">
              <div>
                <span className="secondary-text inherit-color">
                  +356 2331 2345
                </span>

                <div className={Styles.arrow}>
                  <ButtonArrow />
                </div>
              </div>
            </div>

            <div className="col-6 col-md-12 col-lg-12 footer-m-menu">
              <div>
                <div className="lg-text">
                  <Link>Vision</Link>
                </div>
              </div>
              <div>
                <div className="lg-text">
                  <Link>The Hotel</Link>
                </div>
              </div>
              <div>
                <div className="lg-text">
                  <Link>Serviced Apartments</Link>
                </div>
              </div>
              <div>
                <div className="lg-text">
                  <Link>AX Privilege</Link>
                </div>
              </div>
            </div>

            <div className="col-3 col-md-12 col-lg-12">
              <div>
                <span className="secondary-text inherit-color">
                  verdalaterraces@axgroup.mt
                </span>
                <div className={Styles.arrow}>
                  <ButtonArrow />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="remove-top-space">
          <VerdalaFooter />
        </section>
      </Container>

      <Container>
        <div className="crow">
          <div className="col-12">
            <div className={Styles.footergridmenu}>
              <div className={Styles.footermiddle_link}>
                <span className="secondary-text inherit-color">Facebook</span>
                <span className="secondary-text inherit-color">Social</span>
              </div>
              <div className={Styles.footermiddle_link}>
                <span className="secondary-text inherit-color">
                  Privacy Policy
                </span>
                <span className="secondary-text inherit-color">
                  Terms & Conditions
                </span>
              </div>
              <div className="copy-right-text text-right">
                <span>©2022 All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

const FooterCard = (props) => (
  <>
    <AniLink
      cover
      direction="left"
      duration={1}
      className={`anim-scroll-up ${Styles.footerCard}`}
      bg="#7B9E6B"
      to={"/contact"}
    >
      <div className={Styles.carddesc}>
        <div className={Styles.icon}>
          <img src={Call} alt="" />
        </div>

        <div className="text-cont">
          <h3 className={Styles.cardTitle}>Request a call back</h3>
        </div>
      </div>

      <div className={Styles.ctaCont}>
        <ButtonArrow />
      </div>
    </AniLink>

    <AniLink
      cover
      direction="left"
      duration={1}
      className={`anim-scroll-up ${Styles.footerCard}`}
      bg="#7B9E6B"
      to={"/apartments"}
    >
      <div className={Styles.carddesc}>
        <div className={Styles.icon}>
          <img src={Home} alt="" />
        </div>

        <div className="text-cont">
          <h3 className={Styles.cardTitle}>Find your home</h3>
        </div>
      </div>
      <div className={Styles.ctaCont}>
        <ButtonArrow />
      </div>
    </AniLink>

    <AniLink
      cover
      direction="left"
      duration={1}
      className={`anim-scroll-up ${Styles.footerCard}`}
      bg="#7B9E6B"
      to={"/gallery"}
    >
      <div className={Styles.carddesc}>
        <div className={Styles.icon}>
          <img src={Media} alt="" />
        </div>

        <div className="text-cont">
          <h3 className={Styles.cardTitle}>Media centre</h3>
        </div>
      </div>
      <div className={Styles.ctaCont}>
        <ButtonArrow />
      </div>
    </AniLink>
  </>
);

export default Footer;
