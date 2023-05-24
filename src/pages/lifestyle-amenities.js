import React, { useEffect, useState } from "react";
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";
import "../assets/css/js_composer.min.css";
import Resize from "../components/resize/index";
import SectionNavigation from "../components/sectionNavigation";
import CommunalDestination from "./LIfestyles/ACommunalDestination";
import Amenities from "./LIfestyles/Amenities";
import ADayInTheLIfe from "./LIfestyles/ADayInTheLife";
import Lifestyle from "./LIfestyles/Lifestyle";
import axios from "axios";

const LifestyleAmenities = ({ pageTitle, children }) => {
  const [navLinks, setNavLinks] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://verdalastage.bison-studio.com/wp-json/acf/v3/pages/176`)
      .then((res) => {
        setData(res.data.acf);
      });
  }, []);

  useEffect(() => {
    if (typeof data !== "undefined") {
      if (Object.keys(data).length > 0) {
        const pageLists = Object.keys(data);
        const removedata = [];
        for (let i = 0; i < pageLists.length; i++) {
          if (pageLists[i] !== "fieldGroupName") {
            if (pageLists[i] !== "header_section") {
              if (pageLists[i] !== "header_section_life") {
                if (pageLists[i] !== "lifestyle_lifestylePage") {
                  const ab = {
                    id: pageLists[i],
                    data: data[pageLists[i]],
                  };
                  removedata.push(ab);
                }
              }
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
        <section>
          <div>
            <Amenities data={data} />
          </div>
          <div>
            <ADayInTheLIfe data={data} />
          </div>
          <div>
            <Lifestyle data={data} />
          </div>
          <div>
            <CommunalDestination data={data} />
          </div>
        </section>
      </Resize>
      <Footer />
    </>
  );
};

export default LifestyleAmenities;

export function Head() {
  return <title>Verdala - Lifestyle & Amenities</title>;
}
