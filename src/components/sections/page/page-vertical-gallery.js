import React from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import VerticalGallery from "../verticalGallery/verticalGallery";
import Quote from '../../../assets/svgs/quote.svg'
const PageVGallery = (props) => (
    <>
        <section className="page-generic red-top-space">

            <Container type="fullwidthcontainer extend-container">
                <SectionTitle
                    number = "05"
                    text = "ARCHITECTURE"
                    title = "From the grand entrance that sweeps you into its embrace, Verdala promises something truly beguiling."
                    architect_name='John Doe'
                    architect_designation='Building Architect'
                    customclass="bquote"

                />

                <VerticalGallery />
            </Container>

        </section>
    </>
)

export default PageVGallery;