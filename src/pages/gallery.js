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
                    <div
                      className="small-title-text"
                      style={{
                        color:
                          index == selected
                            ? "rgba(123, 158, 107, 1)"
                            : "rgba(123, 158, 107, 0)",
                      }}
                    >
                      media centre
                    </div>
                    <h2
                      className={index == selected ? "active-h2" : ""}
                      style={{ opacity: index === selected ? 1 : 0.25 }}
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

// import React, { useState, useEffect, useContext } from "react";
// import GalleryImages from "./Gallery/index";

// import * as Pagegeneric from "../components/sections/page/page.module.scss";
// // import SmallscreenLifestyle from "./smallscreenLifestyle";
// const Gallery = (props) => {
//   const [lifestylePage, setLifestylePage] = useState({});

//   let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
//   let mainSections = document.querySelectorAll(".scroll-container >  div");
//   let headerheight1 = document.querySelector("header");
//   let lastId;
//   let cur = [];

//   useEffect(() => {
//     if (typeof props !== "undefined") {
//       setLifestylePage(props?.data);
//     }
//   }, [props]);

//   const data = [
//     {
//       title: "progress",
//       image:
//         "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
//     },
//     {
//       title: "amenities",
//       image:
//         "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-42-1.png",
//     },
//     {
//       title: "Design",
//       image:
//         "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
//     },
//     {
//       title: "lifestyle",
//       image:
//         "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-42-1.png",
//     },
//     {
//       title: "interiors",
//       image:
//         "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
//     },
//   ];

//   const [currentLifestyleName, setCurrentLifestyleName] = useState(
//     Math.floor(data.length / 2)
//   );

//   useEffect(() => {
//     if (typeof document !== "undefined") {
//       let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
//       let mainSections = document.querySelectorAll(".scroll-container >  div");
//       let headerheight1 = document.querySelector("header");
//       let lastId;
//       let cur = [];
//       if (typeof window !== "undefined") {
//         window.addEventListener("scroll", (event) => {
//           let fromTop = window.pageYOffset;
//           mainNavLinks.forEach((link) => {
//             let section = document.querySelector(link.hash);
//             let headerheight = document.querySelector("header");
//             if (
//               section?.offsetTop !== null &&
//               headerheight.offsetHeight !== null &&
//               section?.offsetHeight !== null
//             ) {
//               if (
//                 section?.offsetTop - headerheight?.offsetHeight <= fromTop &&
//                 section?.offsetTop -
//                   headerheight.offsetHeight +
//                   section?.offsetHeight >
//                   fromTop
//               ) {
//                 link.parentElement.classList.add("active");
//               } else {
//                 link.parentElement.classList.remove("active");
//               }
//             }
//           });
//         });
//       }
//     }
//   }, [props]);

//   const handlerLifestyle = (index) => {
//     setCurrentLifestyleName(index);
//   };

//   return (
//     <>
//       <section className={` ${Pagegeneric.secgeneric}`}>
//         <div id="" className="">
//           {/* <div class="count-col">
//             <span class="count-number">03</span>
//             <p class="count-title">{lifestylePage.lifestyle?.sub_title}</p>
//           </div>
//           <div className="team-content">
//             <h2 className="innerpage_h2">{lifestylePage.lifestyle?.title}</h2>
//             <p>{lifestylePage.lifestyle?.description}</p>
//           </div> */}

//           <div className="crow">
//             <div
//               className="col-3 col-lg-12 sticky-menu sticky-mobile"
//               style={{
//                 top: headerheight1 ? headerheight1.offsetHeight : "",
//               }}
//             >
//               <div
//                 className="sticky-menu"
//                 style={{
//                   top: headerheight1 ? headerheight1.offsetHeight : "",
//                 }}
//               >
//                 <div className="sticky-inner">
//                   <ul className="recidence-meet-left-inner">
//                     {data.map((item, index2) => {
//                       return (
//                         <div key={index2}>
//                           <li
//                             className={`team-teamData-container fadeinup ${
//                               currentLifestyleName === index2 && "active"
//                             }`}
//                           >
//                             <a
//                               className={`text  lifestyle-${index2}`}
//                               data-splitting
//                               onClick={() => handlerLifestyle(index2)}
//                               href={`#lifestyle-${index2}`}
//                             >
//                               {item.title}
//                             </a>
//                           </li>
//                         </div>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="col-9 col-lg-12">
//               <div className="scroll-container">
//                 {data.map((i, index2) => {
//                   return (
//                     <div
//                       id={`lifestyle-${index2}`}
//                       className="lifestyle-inner-scroll-main"
//                     >
//                       <div style={{ width: "50%" }}>
//                         <img src={i.image} />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;
