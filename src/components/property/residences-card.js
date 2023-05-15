import React from "react"
import Button from "../partials/buttons";
import SecondaryText from "../typography/secondaryText";
import ResidenceImage from "../../assets/images/test-images/residence-mark.png";
import * as Styles from "./property.module.scss";

const ResidencesCard = (props) => (
    <>
        <div className={Styles.residenceCard} id={props.id}>
            <div className="crow">
                <div className="col-6 col-md-12 fadeinup">
                    <div className={Styles.imageCont}>
                        <img className="bg-img" src={props.image} alt="" />
                    </div>
                </div>

                <div className="col-6 col-md-12 fadeinup">
                    <div className={Styles.residentwrap}>
                    <h3 data-splitting>{props.title}</h3>
                    <p>{props.text}</p>
                    <Button
                        styleClass   = "text-button"
                        text    = "Check Availability"
                        classname="secondarybtn"
                    />
                    
                    <div className={Styles.residencePlan}>
                        <div className="crow">
                            <div className="col-4 col-sm-12">
                                <SecondaryText
                                    text = "Block"
                                    styleClass={Styles.residencedesc}
                                />
                            </div>

                            <div className="col-2 col-sm-12">
                                <span className={Styles.values}>A</span>
                            </div>

                            <div className="col-6 col-sm-12">
                                <img src={ResidenceImage} alt="" />
                            </div>
                        </div>

                        <div className={Styles.residenceRow + " crow"}>
                            <div className="col-4 col-sm-12">
                                <SecondaryText
                                    text = "Floors"
                                    styleClass={Styles.residencedesc}
                                />
                                
                                <span className={Styles.values}>22-25</span>
                            </div>

                            <div className="col-4 col-sm-12">
                                <SecondaryText
                                    text = "Spaces"
                                    styleClass={Styles.residencedesc}
                                />
                                
                                <span className={Styles.values}>379-462</span>
                            </div>

                            <div className="col-4 col-sm-12">
                                <SecondaryText
                                    text = "Bedrooms"
                                    styleClass={Styles.residencedesc}
                                />
                                
                                <span className={Styles.values}>3 or 4</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
)

export default ResidencesCard;