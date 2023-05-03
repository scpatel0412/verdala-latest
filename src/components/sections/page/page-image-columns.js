import React, { useEffect, useState } from "react"
import HeroImg from "../../../assets/images/test-images/home-image.png"
import Button from "../../partials/buttons";
import IconTitleText from "../../partials/icon-title-text";
import TreeIcon from "../../../assets/images/test-images/tree-icon.png";
import * as fervently from "./page.module.scss"

const PageImageCols = (props) => {
    const [homePage, setHomePage] = useState({});

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data);
        }
    }, [props]);
    
    return (
        <>
            {homePage != undefined ? <>
                <section className={fervently.page_image_columns}>
                    <div className="crow ">
                        <div className="col-5 col-lg-12 order-lg-1 fadeinup">
                            <img src={HeroImg} alt="" className={fervently.ferventlyimg} />
                        </div>

                        <div className="col-7 col-lg-12 order-lg-0">
                            <div className={fervently.fervently}>
                                <div className="crow border-top fadeinup">
                                    <div className="col-4 col-sm-12 fadeinup">
                                        <IconTitleText
                                            icon={TreeIcon}
                                            title="Fervently progressive"
                                            text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                                        />
                                    </div>

                                    <div className="col-4 col-sm-12 fadeinup">
                                        <IconTitleText
                                            icon={TreeIcon}
                                            title="Fervently progressive"
                                            text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                                        />
                                    </div>

                                    <div className="col-4 col-sm-12 fadeinup">
                                        <IconTitleText
                                            icon={TreeIcon}
                                            title="Fervently progressive"
                                            text="Located in Diagonal Mar, a contemporary and vibrant district of Barcelona, Antares sits a few minutes walk from the stylish Port Fòrum Marina and the Blue Flag-awarded Mar Bella beach."
                                        />
                                    </div>
                                </div>
                                <div className={`fadeinup ${fervently.ferventlybutton}`}>
                                    <Button
                                        styleClass="border-button right-align space-top "
                                        text="The Vision"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </> : null}

        </>
    )
}
export default PageImageCols;