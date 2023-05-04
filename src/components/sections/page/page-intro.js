import React, { useState, useEffect } from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import * as pageintro from "./page.module.scss"

const PageIntro = (props) => {
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