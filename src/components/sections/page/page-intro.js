import React, { useState, useEffect, useRef } from "react"
// import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import * as pageintro from "./page.module.scss";

// gsap.registerPlugin(ScrollTrigger);

const PageIntro = (props) => {

    const ref           = useRef(null);
    const [homePage, setHomePage] = useState({});
    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data.about);
        }
    }, [props]);

    return (
        <>
            {homePage !== undefined ? <>
                <section className={pageintro.secpageintro}>
                    <Container>
                        <SectionTitle
                            number="01"
                            text={homePage?.sub_title}
                            title={homePage?.title}
                            ptext={homePage?.description}
                        />
                    </Container>
                </section>
            </>
                : null}
        </>
    )
}

export default PageIntro;