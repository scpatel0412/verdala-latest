import React from "react"
// import HeroImg from "../../../assets/images/test-images/home-image.png"
// import Button from "../../partials/buttons";
import * as Styles from "./../hoverImage/hoverImage.module.scss"

const GalleryCard = (props) => (
    <>
    <div style={{marginBottom:"80px"}}>
        <img src={props.image} alt="" className="fadeinup"/>
        <h4 className={`fadeinup ${Styles.gallerytitle}`}>{props.text}</h4>
    </div>
    </>
)

export default GalleryCard;