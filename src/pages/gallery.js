import React, { useEffect, useRef, useState } from "react";
import { Galleryimg } from "../images";
import Resize from "../components/resize/index";
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
  console.log("selected ", selected);
  const onClickSelecte = (index) => {
    setSelected(index);
  };
  // const element = document.getElementById("myDIV");
  // const myFunction = () => {
  //     const element = document.getElementById("myDiv");
  //     element.scroll(50, 10);
  //   }
  useEffect(() => {
    window.scrollTo({
      top: document.getElementById(selected).offsetTop,
      behavior: "smooth",
    });
    console.log("aaa");
  }, [selected]);
  return (
    <>
      <Resize>
        <div className="gallery-sec">
          <div className="gallery-left">
            <div className="gallery-title">
              {data.map((i, index) => {
                console.log("index", index);
                return (
                  <div key={index}>
                    <h2
                      style={{
                        textAlign: "center",
                        color:
                          index == selected
                            ? "rgba(123, 158, 107, 1)"
                            : "rgba(123, 158, 107, 0.25)",
                        opacity: 1,
                      }}
                      onClick={() => onClickSelecte(index)}
                    >
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
              {data.map((i, index) => {
                return (
                  <div key={index}>
                    <span>
                      <img
                        src={i.image}
                        onClick={() => onClickSelecte(index)}
                        style={{ opacity: index == selected ? 1 : 0.25 }}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div
                    id="myDiv"
                    ref={divRef}
                    style={{ height: "2550px", width: "2550px", overflow: "auto",background:'pink' }}
                >
                    <h1>dddd</h1>
                </div> */}
      </Resize>
    </>
  );
};

export default Gallery;
