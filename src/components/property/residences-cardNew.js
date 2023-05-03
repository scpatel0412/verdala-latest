// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Button from "../partials/buttons";
// import SecondaryText from "../typography/secondaryText";
// import * as Styles from "./property.module.scss";

// const ResidencesCard = (props) => {
//   const [residencesCardata, setResidencesCardata] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         `https://verdalastage.bison-studio.com/wp-json/acf/v3/posts/${props.Id}`
//       )
//       .then((res) => {
//         setResidencesCardata(res?.data?.acf);
//       });
//   }, [props]);


//   return (
//     <>
//       <div className={Styles.residenceCard} id={props.id}>
//         <div className="crow">
//           <div className="col-6 col-md-12 fadeinup">
//             <div className={Styles.imageCont}>
//               <img
//                 className="bg-img"
//                 src={residencesCardata.property_plan_online}
//                 alt=""
//               />
//             </div>
//           </div>

//           <div className="col-6 col-md-12 fadeinup">
//             <div className={Styles.residentwrap}>
//               <h3 data-splitting>{props.title}</h3>
//               <p>{residencesCardata?.property_description}</p>
//               <Button
//                 styleClass="text-button"
//                 text="Check Availability"
//                 classname="secondarybtn"
//               />

//               <div className={Styles.residencePlan}>
//                 <div className="crow">
//                   {residencesCardata?.linked_project?.map((i, index) => {
//                     return (
//                       <>
//                         <div className="col-4 col-sm-12" key={index}>
//                           <SecondaryText
//                             text={i?.post_title?.split(" ")[1]}
//                             styleClass={Styles.residencedesc}
//                           />
//                         </div>
//                         <div className="col-2 col-sm-12">
//                           <span className={Styles.values}>
//                             {i?.post_title?.split(" ")[2]}
//                           </span>
//                         </div>
//                         <div className="col-6 col-sm-12">
//                           {/* <img
//                             src={i.projectDetails.buildingImage.mediaItemUrl}
//                             alt=""
//                           /> */}
//                         </div>
//                       </>
//                     );
//                   })}
//                 </div>

//                 <div className={Styles.residenceRow + " crow"}>
//                   <div className="col-4 col-sm-12">
//                     <SecondaryText
//                       text="Floors"
//                       styleClass={Styles.residencedesc}
//                     />

//                     <span className={Styles.values}>
//                       {residencesCardata.floor_number}
//                     </span>
//                   </div>

//                   <div className="col-4 col-sm-12">
//                     <SecondaryText
//                       text="Spaces"
//                       styleClass={Styles.residencedesc}
//                     />
//                     <span className={Styles.values}>
//                       {Math.round(residencesCardata?.external_area) +
//                         Math.round(residencesCardata?.internal_area)}
//                     </span>
//                   </div>

//                   <div className="col-4 col-sm-12">
//                     <SecondaryText
//                       text="Bedrooms"
//                       styleClass={Styles.residencedesc}
//                     />

//                     <span className={Styles.values}>
//                       {residencesCardata.bedrooms}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResidencesCard;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../partials/buttons";
import SecondaryText from "../typography/secondaryText";
import * as Styles from "./property.module.scss";
import ResidencesCardImg from "./residences-cardImg";
import LinkedProjectCard from "./linkedProject-card";
const ResidencesCard = (props) => {
  const [residencesCardata, setResidencesCardata] = useState({});
  const [featureImg, setFeatureImg] = useState()
  useEffect(() => {
    axios
      .get(
        `https://verdalastage.bison-studio.com/wp-json/acf/v3/posts/${props.Id}`
      )
      .then((res) => {
        setResidencesCardata(res?.data?.acf);
      });
  }, [props]);
  useEffect(() => {
    axios.get(`https://verdalastage.bison-studio.com/wp-json/wp/v2/properties/${props.Id}`)
      .then((res) => {
        setFeatureImg(res?.data.featured_media);
      });
  }, [props])

  return (
    <>
      <div className={Styles.residenceCard} id={props.id}>
        <div className="crow">
          <div className="col-6 col-md-12 fadeinup property-module-img">
            <div className={Styles.imageCont}>
              {/* <img className="bg-img" src={residencesCardata.property_plan_online} alt="" /> */}
              <ResidencesCardImg data={featureImg} />
            </div>
          </div>

          <div className="col-6 col-md-12 fadeinup property-module-content">
            <div className={Styles.residentwrap}>
              <h3 data-splitting>{props.title}</h3>
              <p>{residencesCardata?.property_description}</p>
              <Button
                styleClass="text-button secondarybtn"
                text="Check Availability"
                classname="secondarybtn"
              />

              <div className={Styles.residencePlan}>
                <div className="crow property-value">
                  {residencesCardata?.linked_project?.map((i, index) => {
                    return (
                      <>
                        <div className="col-4 col-sm-12 property-value-title" key={index}>
                          <SecondaryText
                            text={i?.post_title?.split(" ")[1]}
                            styleClass={Styles.residencedesc}
                          />
                        </div>
                        <div className="col-2 col-sm-12">
                          <span className={Styles.values}>
                            {i?.post_title?.split(" ")[2]}
                          </span>
                        </div>
                        <div className="col-6 col-sm-12 property-value-image">
                          {/*<div> <img
                            src={i.projectDetails.buildingImage.mediaItemUrl}
                            alt=""
                          /> </div> */}
                           <LinkedProjectCard data={residencesCardata.linked_project}/>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className={Styles.residenceRow + " crow property-blocks"}>
                  <div className="col-4 col-sm-12 property-blocks-inner">
                    <SecondaryText
                      text="Floors"
                      styleClass={Styles.residencedesc}
                    />

                    <span className={Styles.values}>
                      {residencesCardata.floor_number}
                    </span>
                  </div>

                  <div className="col-4 col-sm-12 property-blocks-inner">
                    <SecondaryText
                      text="Spaces"
                      styleClass={Styles.residencedesc}
                    />
                    <span className={Styles.values}>
                      {Math.round(residencesCardata?.external_area) +
                        Math.round(residencesCardata?.internal_area)}
                    </span>
                  </div>

                  <div className="col-4 col-sm-12 property-blocks-inner">
                    <SecondaryText
                      text="Bedrooms"
                      styleClass={Styles.residencedesc}
                    />

                    <span className={Styles.values}>
                      {residencesCardata.bedrooms}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidencesCard;
