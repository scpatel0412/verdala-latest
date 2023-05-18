import React, { useEffect, useState } from "react";
import Resize from "../components/resize/index";
import GalleryImages from "./Gallery/index";
import axios from "axios";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://verdalastage.bison-studio.com/wp-json/acf/v3/pages/1303")
      .then((response) => {
        setData(response.data.acf.gallery_data);
      });
  }, [data.length]);

  const [selected, setSelected] = useState(0);
  useEffect(() => {
    setSelected(Math.floor(data.length / 2));
  }, []);

  const onClickSelecte = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    window.scrollTo({
      top: document.getElementById(selected).offsetTop,
      behavior: "smooth",
    });
  }, [selected]);

  return (
    <>
      <Resize>
        <div className="gallery-sec">
          <div className="gallery-left">
            <div className="gallery-title">
              {data.map((i, index) => {
                return (
                  <div key={index}>
                    <div
                      className="small-title-text"
                      style={{
                        color:
                          index === selected
                            ? "rgba(123, 158, 107, 1)"
                            : "rgba(123, 158, 107, 0)",
                      }}
                    >
                      media centre
                    </div>
                    <h2
                      className={index === selected ? "active-h2" : ""}
                      style={{ opacity: index === selected ? 1 : 0.25 }}
                      onClick={() => onClickSelecte(index)}
                    >
                      {i.tab_title}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="gallery-right"
            style={{ height: "100vh" }}
            id={selected}
          >
            <div className="gall-right-inner">
              <GalleryImages
                data={data}
                selected={selected}
                onClickSelecte={onClickSelecte}
              />
            </div>
          </div>
        </div>
      </Resize>
    </>
  );
};

export default Gallery;
