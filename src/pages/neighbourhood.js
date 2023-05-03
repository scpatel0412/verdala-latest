import React, { useEffect, useState } from "react";
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";
import RabatAndMdina from "./Neighbourhood/RabatAndMdina";
import Connectivity from "./Neighbourhood/Connectivity";
import ThingsToDo from "./Neighbourhood/ThingsToDo";
import SectionNavigation from "../components/sectionNavigation";
import axios from "axios";

function Neighbourhood() {
  const [navLinks, setNavLinks] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://verdalastage.bison-studio.com/wp-json/acf/v3/pages/684")
      .then((response) => {
        setData(response.data.acf);
      });
  }, [data.length]);

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
      <div className="lifestyle-amenities-banner">
        <PageHero headerData={data?.header_section} />
      </div>
      <div>
        <SectionNavigation data={navLinks} />
      </div>
      {navLinks.length > 0 &&
        navLinks.map((i) => {
          if (i.id === "rabat_and_mdina") {
            return <RabatAndMdina data={i} />;
          }
          if (i.id === "connectivity") {
            return <Connectivity data={i} />;
          }
          if (i.id === "things_to_do") {
            return <ThingsToDo data={i} />;
          }
        })}

      <Footer />
    </>
  );
}

export default Neighbourhood;
