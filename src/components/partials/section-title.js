import React from "react";
import Container from "../layouts/container";
import SecondaryText from "../typography/secondaryText";
import * as Styles from "./section.module.scss";

const SectionTitle = (props) => {
  return (
    <>
      <div>
        <div className="crow home-count">
          <div
            className={
              props.number === "01"
                ? "col-3 col-md-6 col-lg-12 col-xl-6 anim-scroll-up"
                : "col-5 col-xl-12 anim-scroll-up"
            }
          >
            <Container>
              <div className={Styles.sectitle}>
                <div className={Styles.number}>
                  <span>{props.number}</span>
                </div>
                <div className={Styles.sectionTitle}>
                  <SecondaryText text={props.text} />
                </div>
              </div>
            </Container>
          </div>

          <div
            className={
              props.number === "01"
                ? "col-5 col-lg-12 col-xl-6 anim-scroll-up"
                : "col-7 col-xl-12 anim-scroll-up"
            }
          >
            {props.title === null ? (
              <p className={`${Styles.text} ${Styles.secdesc}`}>
                {props.ptext}
              </p>
            ) : (
              <>
                <h2
                  className={`${Styles.secmaintitle} ${
                    props.customclass === "bquote"
                      ? Styles.bquote + " anim-scroll-up "
                      : " anim-scroll-up "
                  }`}
                  data-splitting
                >
                  {props.title}
                </h2>
                {props.leftext && <p className={Styles.text}>{props.ptext}</p>}
                {props.number === "05" && (
                  <p className={`anim-scroll-up ${Styles.architect}`}>
                    {props.architect_name}
                    <span>{props.architect_designation}</span>
                  </p>
                )}
              </>
            )}
          </div>

          {!props.leftext && (
            <div className="col-4 col-xl-12 anim-scroll-up">
              {props.title === null ? (
                <></>
              ) : (
                <p className={Styles.text}>{props.ptext}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
