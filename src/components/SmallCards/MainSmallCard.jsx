import React from "react";
import "./SmallCards.css";
import Goodsmain from "./GoodsExport/Goodsmain";
import ServicesMain from "./Service/ServicesMain";
import Trademain from "./Trade/Trademain";
const MainSmallCard = () => {



    return (
        <>
     <div className="maincard">
      <Goodsmain/>
      <ServicesMain/>
    </div>
    <Trademain/>
        </>
    );
  };
  
  export default MainSmallCard;