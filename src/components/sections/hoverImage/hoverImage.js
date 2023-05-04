import React, { useState, useEffect } from "react"
import HeroImg from "../../../assets/images/test-images/lifestyle.png"
import Button from "../../partials/buttons";
import * as Styles from "./hoverImage.module.scss"

const HoverImage = (props) => {
    const [homePage, setHomePage] = useState({});
    const [currentAmenity, setCurrentAmenity] = useState(0)
    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data);
        }
    }, [props]);
    const onClickAminity = (index) => {
        setCurrentAmenity(index)
    }
    return (
        <>
            {homePage != undefined ? <>
                <section className={Styles.laifesection}>
                    <div className="crow">
                        <div className="col-5 col-md-12 order-md-1">
                            <div className={Styles.laifeimg}>
                                <img src={HeroImg} alt="" className="fadeinup" />
                            </div>
                        </div>

                        <div className="col-7 col-md-12">
                            <div className={Styles.lifedesc}>
                                <div className={Styles.lifedescinner}>
                                    <h2 className={`fadeinup ${Styles.lifetitle}`} data-splitting>{homePage.title}</h2>
                                    <p className="fadeinup">{homePage.description}</p>

                                    <div className={Styles.hoverList}>
                                        <ul>
                                            {homePage.amenities?.map((i, index) => {
                                                return (
                                                    <li className="fadeinup" key={index}>
                                                        <a onClick={() => onClickAminity(index)} style={{ color: currentAmenity == index ? '#7B9E6B' : '#635245', position: 'unset', cursor: 'pointer', textDecoration: currentAmenity == index ? 'underline' : 'none' }}>{i.amenity}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12  order-md-0">
                            <div className={Styles.lifedesc}>
                                <div className={Styles.lifedescinner}>
                                    <div className="space-top fadeinup">
                                        <Button
                                            link={"/lifestyle-amenities"}
                                            styleClass="border-button"
                                            text={homePage.button_link?.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </> : null}
        </>
    )
}

export default HoverImage;