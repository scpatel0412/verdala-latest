// import React, { useEffect } from "react";
// import HeroImg from "../../assets/images/test-images/home-image.png";
// // import { StaticQuery, graphql } from "gatsby"

// import * as heroStyles from "./hero.module.scss";

// const PageHero = (props) => {

//   useEffect(() => {}, [props]);

//   return (
//     <>
//       <div
//         className={
//           props.redHeight
//             ? heroStyles.heroContainer
//             : heroStyles.heroContainer + " " + heroStyles.heroContainerRed
//         }
//       >
//         <div className={heroStyles.heroImage}>
//           <img
//             className="bg-img"
//             // src={props.headerData?.headerImage.mediaItemUrl}
//             src={'http://verdalastage.bison-studio.com/wp-content/uploads/2023/01/home-image-1024x576.png'}
//             alt=""
//           />
//         </div>

//         <div className={heroStyles.pageTextCont}>
//           <div className="title-cont text-center">
//             <h1 className={heroStyles.pageMainTitle}>
//              {props.headerData?.headerTitle || props.title}
//             </h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PageHero;

import React, { useEffect } from "react";
import HeroImg from "../../assets/images/test-images/home-image.png";

import * as heroStyles from "./hero.module.scss";

const PageHero = (props) => {
  useEffect(() => {}, [props]);

  return (
    <>
      <div
        className={
          props.redHeight
            ? heroStyles.heroContainer
            : heroStyles.heroContainer + " " + heroStyles.heroContainerRed
        }
      >
        <div className={heroStyles.heroImage}>
          <img
            className="bg-img"
            src={props.headerData?.header_image?.url}
            alt=""
          />
        </div>

        <div className={heroStyles.pageTextCont}>
          <div className="title-cont text-center">
            <h1 className={heroStyles.pageMainTitle}>
              {props.headerData?.header_title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHero;
