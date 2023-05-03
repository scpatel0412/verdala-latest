import React from "react"
import Button from "../partials/buttons";
import SecondaryText from "../typography/secondaryText";
// import * as Styles from "./property.module.scss";

const PropertyList = (props) => (
    <>
        <div className="row text-center">
            <div className="col-1"><SecondaryText styleClass="inherit-color" text={props.node.title} /></div>
            <div className="col-1"><SecondaryText styleClass="inherit-color" text={props.node.propertiesData.floorNumber} /></div>
            <div className="col-1"><SecondaryText styleClass="inherit-color" text={props.node.propertiesData.bedrooms} /></div>
            <div className="col-1"><SecondaryText styleClass="inherit-color" text={props.node.propertiesData.floorArea} /></div>
            <div className="col-1"><SecondaryText styleClass="inherit-color" text={props.node.propertiesData.externalArea} /></div>
            <div className="col-1"><SecondaryText styleClass="inherit-color" text={"€" + props.node.propertiesData.price} /></div>
            <div className="col-1">
                <Button
                    text = "More Info"
                    styleClass = "text-button"
                    link = {"/property/" + props.node.slug}
                />
            </div>
        </div>
    </>
)

export default PropertyList;