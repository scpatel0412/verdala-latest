// import React, { useEffect, useState } from "react";
// import PageHero from "../components/hero/page-hero";
// import Footer from "../components/sections/footer/footer";
// import "../assets/css/js_composer.min.css";
// import Resize from "../components/resize/index";
// import SectionNavigation from "../components/sectionNavigation";
// import AboutResidences from "./Residences/AboutResidences";
// import Mansions from "./Residences/Mansions";
// import TypeOfResidences from "./Residences/TypeOfResidences";
// import DesignMeetsFunction from "./Residences/DesignMeetsFunction";
// import { allResidences } from "../utils/api";
// const Residences = ({ pageTitle, children }) => {
//   const [navLinks, setNavLinks] = useState([]);
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const func = async () => {
//       try {
//         const res = await allResidences();
//         setData(res.acf);
//       } catch (error) {
//         console.log("ERROR DURING GET PRODUCT DATA");
//       }
//     };
//     func();
//   }, []);
//   useEffect(() => {
//     if (typeof data !== "undefined") {
//       if (Object.keys(data).length > 0) {
//         const pageLists = Object.keys(data);

//         const removedata = [];
//         for (let i = 0; i < pageLists.length; i++) {
//           if (pageLists[i] !== "fieldGroupName") {
//             if (pageLists[i] !== "header_section") {
//               const ab = {
//                 id: pageLists[i],
//                 data: data[pageLists[i]],
//               };
//               removedata.push(ab);
//             }
//           }
//         }
//         setNavLinks(removedata);
//       }
//     }
//   }, [data]);

//   return (
//     <>
//       <Resize>
//         <div className="vision-page-banner">
//           <PageHero headerData={data?.header_section} />
//         </div>
//         <div>
//           <SectionNavigation data={navLinks} />
//         </div>
//         <div>
//           <AboutResidences data={data} />
//         </div>
//         <div>
//           <Mansions data={data} />
//         </div>
//         <div>
//           <TypeOfResidences data={data} />
//         </div>
//         <div>
//           <DesignMeetsFunction data={data} />
//         </div>
//       </Resize>
//       <Footer />
//     </>
//   );
// };

// export default Residences;

// export function Head() {
//   return <title>Verdala - The Residences</title>;
// }
import React, { useEffect, useState } from "react";
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";
import "../assets/css/js_composer.min.css";
import Resize from "../components/resize/index";
import SectionNavigation from "../components/sectionNavigation";
import AboutResidences from "./Residences/AboutResidences";
import Mansions from "./Residences/Mansions";
import TypeOfResidences from "./Residences/TypeOfResidences";
import DesignMeetsFunction from "./Residences/DesignMeetsFunction";
import { allResidences } from "../utils/api";
const Residences = ({ pageTitle, children }) => {
  const [navLinks, setNavLinks] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const res = await allResidences();
        setData(res.acf);
      } catch (error) {
        console.log("ERROR DURING GET PRODUCT DATA");
      }
    };
    func();
  }, []);
  useEffect(() => {
    if (typeof data !== "undefined") {
      if (Object.keys(data).length > 0) {
        const pageLists = Object.keys(data);

        const removedata = [];
        for (let i = 0; i < pageLists.length; i++) {
          if (pageLists[i] !== "fieldGroupName") {
            if (pageLists[i] !== "header_section") {
              const ab = {
                id: pageLists[i],
                data: data[pageLists[i]],
              };
              removedata.push(ab);
            }
          }
        }
        setNavLinks(removedata);
      }
    }
  }, [data]);

  return (
    <>
      <Resize>
        <div className="lifestyle-amenities-banner">
          <PageHero headerData={data?.header_section} />
        </div>
        <div>
          <SectionNavigation data={navLinks} />
        </div>
        <div>
          <AboutResidences data={data} />
        </div>
        <div>
          <Mansions data={data} />
        </div>
        <div>
          <TypeOfResidences data={data} />
        </div>
        <div>
          <DesignMeetsFunction data={data} />
        </div>
      </Resize>
      <Footer />
    </>
  );
};

export default Residences;

export function Head() {
  return <title>Verdala - The Residences</title>;
}
