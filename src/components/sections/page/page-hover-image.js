import React, { useState, useEffect } from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import HoverImage from "../hoverImage/hoverImage";
import * as lifestyle from "./page.module.scss"

const PageHoverImage = (props) => {
    const [homePage, setHomePage] = useState({});

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data.lifestyle);
        }
    }, [props]);
    return (
        <>
            {homePage !== undefined ? <>
                <section className={`page-hover-image accent-section ${lifestyle.seclifestyle}`}>
                    <Container>
                        <SectionTitle
                            number="02"
                            text={homePage.sub_title?.replace("and", "&")}
                        />

                        <HoverImage data={homePage} />
                    </Container>
                </section>
            </> : null}
        </>
    )
}

export default PageHoverImage;