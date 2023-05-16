import React, { useEffect, useState } from "react"
import HeroImg from "../../../assets/images/test-images/home-image-2.jpg"
import Button from "../../partials/buttons";
import IconTitleText from "../../partials/icon-title-text";
// import TreeIcon from "../../../assets/images/test-images/tree-icon.png";
import * as fervently from "./page.module.scss"

const PageImageCols = (props) => {
    const [homePage, setHomePage] = useState({});

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data.about);
        }
    }, [props]);

    return (
        <>
            {homePage !== undefined ? <>
                <section className={fervently.page_image_columns}>
                    <div className="crow ">
                        <div className="col-5 col-lg-12 order-lg-1 anim-scroll-up home-video-img">
                            {/* <video controls width={'100%'}>
                                <source src={homePage.about_video?.video?.url} type="video/mp4" />
                            </video> */}
                              <img src={HeroImg} alt="" className={fervently.ferventlyimg} />
                        </div>

                        <div className="col-7 col-lg-12 order-lg-0">
                            <div className={fervently.fervently}>
                                <div className="crow border-top anim-scroll-up">
                                    {homePage.about_data?.map((item, index) => {
                                        return (
                                            <div className="col-4 col-xl-6 col-sm-12 anim-scroll-up" key={index}>
                                                <IconTitleText
                                                    icon={item.icon.url}
                                                    title={item.title}
                                                    text={item.description}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={`anim-scroll-up ${fervently.ferventlybutton}`}>
                                    <Button
                                        link={"/vision"}
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