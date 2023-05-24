import React, { useEffect, useState, useRef } from "react";
import TheHotel from './The Hotel'
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";

const Hotel = () => {
  const headerData = {
    header_title:"The Hotel",
    header_image:{
      url:"http://localhost:8000/static/hotel-img-1-3a6d2d03873996a9ef6d7fdaf30a800f.png"
    }
  }
  return (
    <>
       <div className="lifestyle-amenities-banner">
         <PageHero headerData={headerData}/>
        </div>
        <TheHotel/>
        <Footer />
    </>
  )
}

export default Hotel