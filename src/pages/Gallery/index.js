import React, { useContext } from "react";
import { gallicon } from "../../images/index";
import { ResizeContext } from "../../components/resize";
const GalleryImages = (props) => {
  const { width } = useContext(ResizeContext);
  return (
    <div>
      {width <= 989 ? (
        <>
          <div>
            <span>
              <img src={props?.data[props?.selected].image} />
              <div className="gall-view-design">
                view design<img src={gallicon}></img>
              </div>
            </span>
          </div>
        </>
      ) : (
        props?.data?.map((i, index) => {
          return (
            <div
              key={index}
              className={index === props.selected ? "activegalleryimg" : ""}
              style={{ opacity: index === props.selected ? 1 : 0.25 }}
            >
              <span>
                <img src={i.image} />
                {index === props.selected && (
                  <div className="gall-view-design">
                    view design<img src={gallicon}></img>
                  </div>
                )}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GalleryImages;
