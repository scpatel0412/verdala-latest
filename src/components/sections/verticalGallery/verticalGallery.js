import React from "react"
import HeroImg from "../../../assets/images/test-images/home-image.png"
import HeroImg1 from "../../../assets/images/test-images/architecture1.png"
import HeroImg2 from "../../../assets/images/test-images/architecture2.png"
import HeroImg3 from "../../../assets/images/test-images/architecture3.png"
import HeroImg4 from "../../../assets/images/test-images/architecture4.png"
import HeroImg5 from "../../../assets/images/test-images/architecture5.png"
import Container from "../../layouts/container";
// import Button from "../../partials/buttons";
import GalleryCard from "./galleryCard";
import Button from "../../partials/buttons";
import * as Styles from "./../page/page.module.scss"

const VerticalGallery = (props) => (
    <>
    <section className={Styles.p0}>
        <Container type="extend-container px-xl-0 p-xl-0">
        <div className="crow">
            <div className="col-3 col-lg-12">
                <GalleryCard 
                    image   = {HeroImg1}
                    text    = "Natural Light"
                />
            </div>

            <div className="col-2 col-lg-12"></div>

            <div className="col-6 col-lg-12">
                <GalleryCard 
                    image   = {HeroImg2}
                    text    = "View"
                />
            </div>

            <div className="col-1 col-lg-12"></div>
        </div>

        <div className="crow">
            <div className="col-2 col-lg-12"></div>

            <div className="col-4 col-lg-12">
                <GalleryCard 
                    image   = {HeroImg3}
                    text    = "Designed around its natural environment"
                />
            </div>

            <div className="col-3 col-lg-12"></div>

            <div className="col-3 col-lg-12">
                <GalleryCard 
                    image   = {HeroImg4}
                    text    = "High Ceilings"
                />
            </div>

        </div>

        <div className={`crow ${Styles.pb0}`}>
        <div className="col-1 col-lg-12"></div>
            <div className="col-7 col-lg-12">
                <GalleryCard 
                    image   = {HeroImg5}
                    text    = "Large Terraces"
                />
            </div>

            <div className="col-1 col-lg-12"></div>

            <div className={`fadeinup col-3 col-lg-12 ${Styles.alignself}`}>
                        <Button
                            styleClass = "border-button right-align space-top "
                            text = "The Vision"
                        />
            </div>


        </div>
        </Container>
    </section>
    </>
)

export default VerticalGallery;