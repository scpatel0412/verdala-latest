import { Link } from "gatsby";
import React from "react";
import Button from "../partials/buttons";
// import SecondaryText from "../typography/secondaryText";
// import * as Styles from "./news.module.scss";

const NewsCard = (props) => (
  <>
    <div className="col-3 col-xl-4 col-lg-6 col-sm-12">
      <Link to={"/news/"}>
        <div className="">
          <div className="image">
            <img src={props.image} alt="" />
          </div>

          <div className="text-container">
            <h3 className="text-color">{props.title}</h3>
            <p>{props.description}</p>
            <Button
              styleClass="text-button"
              text="Read More"
              classname="readmore"
            />
          </div>
        </div>
      </Link>
    </div>
  </>
);

export default NewsCard;
