import React, { useContext, useState } from "react";
import { gallicon } from "../../images/index";
import { ResizeContext } from "../../components/resize";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GalleryImages = (props) => {
  const { width } = useContext(ResizeContext);

  const [open, setOpen] = useState(false);
  const [imgView, setImgView] = useState("");

  function selectedimage(index) {
    setImgView(index.gallery_images[0].image.url);
    setOpen(true);
  }

  return (
    <div>
      {width <= 989 ? (
        <>
          <div>
            <span>
              <img
                src={props?.data[props.selected]?.gallery_images[0]?.image?.url}
              />
              <div
                className="gall-view-design"
                onClick={() => selectedimage(props?.data[props.selected])}
              >
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
                <img src={i.gallery_images[0].image.url} />
                {index === props.selected && (
                  <div
                    className="gall-view-design"
                    onClick={() => selectedimage(i)}
                  >
                    view design
                    <img src={gallicon}></img>
                  </div>
                )}
              </span>
            </div>
          );
        })
      )}
      {imgView.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: imgView,
              alt: "image 1",
              width: 3840,
              height: 2560,
            },
          ]}
          plugins={[Fullscreen, Thumbnails, Zoom]}
        />
      )}
    </div>
  );
};

export default GalleryImages;
