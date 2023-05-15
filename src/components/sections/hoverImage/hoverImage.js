// import React, { useState, useEffect, useContext } from "react";
// import Button from "../../partials/buttons";
// import Slider from "react-slick";
// import * as Styles from "./hoverImage.module.scss";
// import { ResizeContext } from "../../resize";

// const HoverImage = (props) => {
//   const [homePage, setHomePage] = useState({});
//   const [over, setOver] = useState({ index: 0, display: false });
//   const { width } = useContext(ResizeContext)
//   useEffect(() => {
//     if (typeof props.data !== "undefined") {
//       setHomePage(props.data);
//     }
//   }, [props]);
//   var settings = {
//     speed: 1000,
//     // autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     // infinite: true,
//     arrows: false,
//     buttons: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       {width < 699 ?
//         <>
//           <p className="fadeinup">{homePage.description}</p>
//           <Slider {...settings}>
//             {homePage.amenities?.map((i, index) => {
//               return (
//                 <div key={index}>
//                   <h2>{i?.amenity}</h2>
//                   <p>{i?.description}</p>
//                   <img src={i?.image} />
//                   <Button
//                     link={"/lifestyle-amenities"}
//                     styleClass="border-button"
//                     text={homePage?.button_link?.title}
//                   />
//                 </div>
//               )
//             })}
//           </Slider>
//         </>
//         :
//         homePage != undefined ? (
//           <>
//             <section className={Styles.laifesection}>
//               <div className="crow">
//                 <div className="col-5 col-md-12 order-md-1">
//                   <div className={Styles.laifeimg}>
//                     {Object.keys(homePage).length > 0 ? (
//                       <img
//                         src={homePage.amenities[over.index].image}
//                         alt=""
//                         className="fadeinup"
//                       />
//                     ) : null}
//                   </div>
//                 </div>

//                 <div className="col-7 col-md-12">
//                   <div className={Styles.lifedesc}>
//                     <div className={Styles.lifedescinner}>
//                       <h2
//                         className={`fadeinup ${Styles.lifetitle}`}
//                         data-splitting
//                       >
//                         {homePage.title}
//                       </h2>
//                       <p className="fadeinup">{homePage.description}</p>

//                       <div className={Styles.hoverList}>
//                         <ul>
//                           {homePage.amenities?.map((i, index) => {
//                             return (
//                               <li className="fadeinup" key={index}>
//                                 <a
//                                   onMouseOver={() =>
//                                     setOver({ index: index, display: true })
//                                   }
//                                   onMouseOut={() =>
//                                     setOver({ index: index, display: false })
//                                   }
//                                   style={{
//                                     color:
//                                       over.index == index ? "#7B9E6B" : "#635245",
//                                     position: "unset",
//                                     cursor: "pointer",
//                                     textDecoration:
//                                       over.index == index ? "underline" : "none",
//                                   }}
//                                 >
//                                   {i.amenity}
//                                 </a>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                       <Button
//                         link={"/lifestyle-amenities"}
//                         styleClass="border-button"
//                         text={homePage.button_link?.title}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </>
//         ) : null
//       }
//     </>
//   );
// };

// export default HoverImage;

import React, { useState, useEffect, useContext } from "react";
import Button from "../../partials/buttons";
import Slider from "react-slick";
import * as Styles from "./hoverImage.module.scss";
import { ResizeContext } from "../../resize";

const HoverImage = (props) => {
  const [homePage, setHomePage] = useState({});
  const [over, setOver] = useState({ index: 0, display: false });
  const { width } = useContext(ResizeContext)
  useEffect(() => {
    if (typeof props.data !== "undefined") {
      setHomePage(props.data);
    }
  }, [props]);
  var settings = {
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // infinite: true,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {width < 699 ?
        <>
          <p className="fadeinup">{homePage.description}</p>
          <Slider {...settings} className="home-life-style-slider">
            {homePage.amenities?.map((i, index) => {
              return (
                <div key={index}>
                  <h2>{i?.amenity}</h2>
                  <p>{i?.description}</p>
                  <div className="life-style-slider-img"><img src={i?.image} /></div>
                  <Button
                    link={"/lifestyle-amenities"}
                    styleClass="border-button"
                    text={homePage?.button_link?.title}
                  />
                </div>
              )
            })}
          </Slider>
        </>
        :
        homePage !== undefined ? (
          <>
            <section className={Styles.laifesection}>
              <div className="crow">
                <div className="col-5 col-md-12 order-md-1">
                  <div className={Styles.laifeimg}>
                    {homePage?.amenities?.map((image, key) => {
                      return (
                        <img
                          src={image.image}
                          alt=""
                          className={((over.index === key) ? Styles.activeImage : "")}
                        />
                      )
                    })}
                    {/* {Object.keys(homePage).length > 0 ? (
                    ) : null} */}
                  </div>
                </div>

                <div className="col-7 col-md-12">
                  <div className={Styles.lifedesc}>
                    <div className={Styles.lifedescinner}>
                      <h2
                        className={`fadeinup ${Styles.lifetitle}`}
                        data-splitting
                      >
                        {homePage.title}
                      </h2>
                      <p className="fadeinup">{homePage.description}</p>

                      <div className={Styles.hoverList}>
                        <ul>
                          {homePage.amenities?.map((i, index) => {
                            return (
                              <li className="fadeinup" key={index}>
                                <a
                                  onMouseOver={() =>
                                    setOver({ index: index, display: true })
                                  }
                                  onMouseOut={() =>
                                    setOver({ index: index, display: false })
                                  }
                                  style={{
                                    color:
                                      over.index === index ? "#7B9E6B" : "#635245",
                                    position: "unset",
                                    cursor: "pointer",
                                    textDecoration:
                                      over.index === index ? "underline" : "none",
                                  }}
                                >
                                  {i.amenity}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <Button
                        link={"/lifestyle-amenities"}
                        styleClass="border-button"
                        text={homePage.button_link?.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : null
      }
    </>
  );
};

export default HoverImage;