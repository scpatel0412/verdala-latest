import React from "react"
import Button from "../partials/buttons";
import SecondaryText from "../typography/secondaryText";
import * as Styles from "./property.module.scss";

const PropertyMeta = (props) => (
    <>
        <div className={Styles.propertyMeta}>
            <div className={Styles.propertyMetaGrid}>
                <div className={Styles.valueField}>
                    <span><SecondaryText styleClass="inherit-color" text="Level"/></span>
                    <span><SecondaryText text={props.propertiesData.floorNumber}/></span>
                </div>
                
                <div className={Styles.valueField}>
                    <span><SecondaryText styleClass="inherit-color" text="Bedrooms"/></span>
                    <span><SecondaryText text={props.propertiesData.bedrooms}/></span>
                </div>

                <div className={Styles.valueField}>
                    <span><SecondaryText styleClass="inherit-color" text="Price"/></span>
                    <span><SecondaryText text={"€" + props.propertiesData.price}/></span>
                </div>

                <div className={Styles.valueField}>
                    <Button
                        text = "Enquiry"
                    />
                </div>
                
                <div className={Styles.valueField}>
                    <span><SecondaryText styleClass="inherit-color" text="Floor Area"/></span>
                    <span><SecondaryText text={props.propertiesData.floorArea}/></span>
                </div>

                <div className={Styles.valueField}>
                    <span><SecondaryText styleClass="inherit-color" text="External Area"/></span>
                    <span><SecondaryText text={props.propertiesData.externalArea}/></span>
                </div>
            </div>

            <div className="row">
                <div className="col-1">
                    <div className={Styles.valueField}>
                        <span><SecondaryText styleClass="inherit-color" text="Sales Manager"/></span>
                        <span><SecondaryText text="john@verdala.com"/></span>
                    </div>
                </div>

                <div className="col-1">
                    <span><SecondaryText styleClass="inherit-color" text="Apartment Plan"/></span>
                    <span><SecondaryText text="Download PDF"/></span>
                </div>
            </div>
        </div>
    </>
)

export default PropertyMeta;