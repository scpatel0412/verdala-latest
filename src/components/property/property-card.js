import React from "react";
import Button from "../partials/buttons";
import SecondaryText from "../typography/secondaryText";
import testPlanImg from "../../assets/images/test-images/test-plan.png";
import * as Styles from "./property.module.scss";

const PropertyCard = (props) => (
  <>
    <div className={Styles.propertyCard}>
      <div>
        <h2 className={Styles.propertyTitle}>{props.node.title}</h2>
      </div>

      <div className="row">
        <div className="col-2">
          <div className="row">
            <div className="col-1 label">
              <span>
                <SecondaryText styleClass="inherit-color" text="Floor Area" />
              </span>
            </div>

            <div className="col-1 value">
              <span>
                <SecondaryText text={props.node.propertiesData.floorArea} />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-1 label">
              <span>
                <SecondaryText styleClass="inherit-color" text="Bedrooms" />
              </span>
            </div>

            <div className="col-1 value">
              <span>
                <SecondaryText text={props.node.propertiesData.bedrooms} />
              </span>
            </div>
          </div>
          <div className={Styles.propertySection + " row"}>
            <div className="col-1 label">
              <span>
                <SecondaryText styleClass="inherit-color" text="Block" />
              </span>
            </div>

            <div className="col-1 value">
              <span></span>
            </div>
          </div>
          <div className="row">
            <div className="col-1 label">
              <span>
                <SecondaryText styleClass="inherit-color" text="Floor" />
              </span>
            </div>

            <div className="col-1 value">
              <span>
                <SecondaryText text={props.node.propertiesData.floorNumber} />
              </span>
            </div>
          </div>

          <div className={Styles.propertySection + " row"}>
            <div className="col-1 label">
              <span>
                <SecondaryText styleClass="inherit-color" text="Facilities" />
              </span>
            </div>

            <div className="col-1 value">
              <span>
                <SecondaryText text={"Penthouse"} />
              </span>
              <span>
                <SecondaryText text={"Balcony"} />
              </span>
              <span>
                <SecondaryText text={"Park View"} />
              </span>
              <span>
                <SecondaryText text={"Private Terrace"} />
              </span>
            </div>
          </div>
        </div>

        <div className="col-3">
          <img
            className={Styles?.propertyImage}
            src={(props?.node?.propertiesData?.propertyPlanOnline?.sourceUrl) ? props?.node?.propertiesData?.propertyPlanOnline?.sourceUrl : testPlanImg}
            alt=""
          />
        </div>
      </div>

      <div className={Styles.propertySectionPrice + " row"}>
        <div className="col-2">
          <div className="row align-center">
            <div className="col-1 label">
              <span>
                <SecondaryText styleClass="inherit-color" text="Price" />
              </span>
              <span>
                <SecondaryText text={"€" + props.node.propertiesData.price} />
              </span>
            </div>

            <div className="col-1">
              <Button
                text="More Info"
                styleClass="text-button"
                link={"/property/" + props.node.slug}
              />
            </div>
          </div>
        </div>

        <div className="col-3">
          <Button text="Enquire" styleClass="border-button right-align" />
        </div>
      </div>
    </div>
  </>
);

export default PropertyCard;
