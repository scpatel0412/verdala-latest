import React, { useEffect, useState } from "react";
import Resize from "../components/resize/index";
import GalleryImages from "./Gallery/index";
const Gallery = () => {
  const data = [
    {
      title: "progress",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
    },
    {
      title: "amenities",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-42-1.png",
    },
    {
      title: "Design",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
    },
    {
      title: "lifestyle",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-42-1.png",
    },
    {
      title: "interiors",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
    },
  ];
  const [selected, setSelected] = useState(Math.floor(data.length / 2));
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
                    <div className="small-title-text"
                      style={{
                        color:
                          index == selected
                            ? "rgba(123, 158, 107, 1)"
                            : "rgba(123, 158, 107, 0)",
                        opacity: 1,
                      }}
                    >media centre</div>
                    <h2
                      className={index == selected ? 'active-h2' : ""}
                      onClick={() => onClickSelecte(index)}>
                      {i.title}
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
              <GalleryImages data={data} selected={selected} onClickSelecte={onClickSelecte} />
            </div>
          </div>
        </div>
      </Resize>
    </>
  );
};

export default Gallery;