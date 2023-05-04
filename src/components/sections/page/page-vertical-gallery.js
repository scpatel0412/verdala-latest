import React, { useState, useEffect } from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import VerticalGallery from "../verticalGallery/verticalGallery";
import Quote from '../../../assets/svgs/quote.svg'
const PageVGallery = (props) => {
    const [homePage, setHomePage] = useState({});

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data.architecture);
        }
    }, [props]);
    
    return (
        <>
            {homePage != undefined ? <>
                <section className="page-generic red-top-space">

                    <Container type="fullwidthcontainer extend-container">
                        <SectionTitle
                            number="05"
                            text="ARCHITECTURE"
                            title={homePage?.architecture_quote?.quote_text}
                            architect_name={homePage?.architecture_quote?.quote_author}
                            architect_designation={homePage?.architecture_quote?.quote_author_description}
                            customclass="bquote"

                        />

                        <VerticalGallery data={homePage?.architectures}/>
                    </Container>

                </section>
            </> : null}

        </>
    )
}

export default PageVGallery;