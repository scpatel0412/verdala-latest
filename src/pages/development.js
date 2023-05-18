import React, { useState, useEffect } from "react";
import Developement from "./DevelopmentProgress/index";
import Footer from "../components/sections/footer/footer";
import { allDevelopmentProgress } from "../utils/api";

const DevelopmentProgress = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const res = await allDevelopmentProgress();
        setData(res.acf);
      } catch (error) {
        console.log("ERROR DURING GET DEVELOPMENT DATA");
      }
    };
    func();
  }, []);
  return (
    <>
      <Developement data={data} />
      <Footer />
    </>
  );
};

export default DevelopmentProgress;
