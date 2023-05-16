import React from "react"
// import HeroImg from "../../../assets/images/test-images/home-image.png"
// import Button from "../../partials/buttons";
import * as Styles from "./../hoverImage/hoverImage.module.scss"

const GalleryCard = (props) => (
    <>
    <div className="anim-scroll-up anim-parallax " data-parallax={props.speed} style={{marginBottom:"80px"}}>
        <img src={props.image} alt="" className=""/>
        <h4 className={`anim-scroll-up ${Styles.gallerytitle}`}>{props.text}</h4>
    </div>
    </>
)

export default GalleryCard;