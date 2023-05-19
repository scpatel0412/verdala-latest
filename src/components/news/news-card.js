import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Button from "../partials/buttons";
import axios from "axios";

const NewsCard = (props) => {
  const [img, setImg] = useState();
  useEffect(() => {
    if (props.id !== undefined) {
      if (props.id > 0) {
        const func = async () => {
          try {
            const res = await axios
              .get(
                `https://verdalastage.bison-studio.com/wp-json/wp/v2/media/${props.id}`
              )
              .then((res) => {
                setImg(res.data);
              });
          } catch (error) {
            console.log("ERROR DURING GET IMAGE DATA");
          }
        };
        func();
      }
    }
  }, [props.id])
  return (
    <>
      <div className="col-3 col-xl-4 col-lg-6 col-sm-12" key={props.key}>
        <Link to={"/news/"}>
          <div className="">
            <div className="image">
              <img src={img?.guid?.rendered} alt="" />
            </div>
            <div className="text-container">
              <h3 className="text-color">{props?.title}</h3>
              <p>{props?.description}</p>
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
  )
}
export default NewsCard;
