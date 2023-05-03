import React from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import HoverImage from "../hoverImage/hoverImage";
import * as lifestyle from "./page.module.scss"

const PageHoverImage = (props) => {
    return(
    <>
        <section className={`page-hover-image accent-section ${lifestyle.seclifestyle}`}>
            <Container>
                <SectionTitle
                    number = "02"
                    text = "Lifestyle & Amenities"
                />

                <HoverImage />
            </Container>
        </section>
    </>
    
)}

export default PageHoverImage;