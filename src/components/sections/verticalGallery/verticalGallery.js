import React, { useState, useEffect } from "react"
import Container from "../../layouts/container";
import GalleryCard from "./galleryCard";
import Button from "../../partials/buttons";
import * as Styles from "./../page/page.module.scss"

const VerticalGallery = (props) => {

    const [homePage, setHomePage] = useState({});

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data);
        }
    }, [props]);

    return (
        <>
            {Object.keys(homePage).length > 0 ? <>
                <section className={Styles.p0}>
                    <Container type="extend-container px-xl-0 p-xl-0 home-architecture-image-sec">
                        <div className="crow">
                            <div className="col-3 col-lg-10 home-first-vertical-img">
                                <GalleryCard
                                    image={homePage[0].architecture_image?.url}
                                    text={homePage[0].architecture_title}
                                />
                            </div>

                            <div className="col-2 col-lg-12"></div>

                            <div className="col-6 col-lg-10 home-second-vertical-img">
                                <GalleryCard
                                    image={homePage[1].architecture_image?.url}
                                    text={homePage[1].architecture_title}
                                />
                            </div>

                            <div className="col-1 col-lg-12"></div>
                        </div>

                        <div className="crow">
                            <div className="col-2 col-lg-12"></div>

                            <div className="col-4 col-lg-12 home-third-vertical-img">
                                <GalleryCard
                                    image={homePage[2].architecture_image?.url}
                                    text={homePage[2].architecture_title}
                                />
                            </div>

                            <div className="col-3 col-lg-12"></div>

                            <div className="col-3 col-lg-10 home-four-vertical-img">
                                <GalleryCard
                                    image={homePage[3].architecture_image?.url}
                                    text={homePage[3].architecture_title}
                                />
                            </div>

                        </div>

                        <div className={`crow ${Styles.pb0}`}>
                            <div className="col-1 col-lg-12"></div>
                            <div className="col-7 col-lg-10 home-five-vertical-img">
                                <GalleryCard
                                    image={homePage[4].architecture_image?.url}
                                    text={homePage[4].architecture_title}
                                />
                            </div>

                            <div className="col-1 col-lg-12">
                                
                            </div>

                            <div className={`gall-main-btn anim-scroll-up  ${Styles.alignself}` }>
                                <Button
                                    link={"/vision"}
                                    styleClass="border-button right-align space-top "
                                    text="The Vision"
                                />
                            </div>
                        </div>
                    </Container>
                </section>
            </> : null}
        </>
    )
}
export default VerticalGallery;
