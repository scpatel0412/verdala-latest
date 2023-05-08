import React from "react";
import * as Styles from "./carousel.module.scss";

const CarouselCard = (props) => (
    <>
        <div className={Styles.carouselCard}>
            <div className={Styles.imageCont}>
                <img className={`bg-img ${Styles.locationimg}`} src={props.image} alt="" />
            </div>

            <div className="text-cont">
                <div className="crow home-carousel-module-sec">
                    <div className="col-2">
                        <div className={Styles.icon}>
                            <img src={props.icon} alt="" />
                        </div>
                    </div>

                    <div className="col-10">
                        <h3 className={Styles.title}>{props.title}</h3>
                        <p className={Styles.text}>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default CarouselCard;