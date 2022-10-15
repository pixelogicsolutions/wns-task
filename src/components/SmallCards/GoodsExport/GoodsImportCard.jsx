import React from "react";
import "./../SmallCards.css";
import { chartdata, tradebalance } from "../../../Data/WnsData";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const GoodsImportCard = () => {

  let gearr = [];
  let gearrseries = [];
    for (let i = 0; i < chartdata.length; i++) {
     gearr.push(chartdata[i].GoodsImports);
     gearrseries.push({name:chartdata[i].Category, data:chartdata[i].GoodsImports});
    }

    const sum = gearr.reduce((a, b) => a + b, 0);
    console.log(gearr);
    console.log(sum);
    const white = "#fff";

    return (
        
      <motion.div
      className="CompactCard"
      style={{
        background: white,
        boxShadow: white,
      }}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value="76"
          text={`76%`}
        />
        
      </div>
      <div className="detail">
      <span>Goods Import</span>
        <span className="red">$59,168 m</span>
        
      </div>
    </motion.div>
         
    );
  };
  
  export default GoodsImportCard;