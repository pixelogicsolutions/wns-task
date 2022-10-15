import React from "react";
import "./../SmallCards.css";
import { chartdata, tradebalance } from "../../../Data/WnsData";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const GoodsExportCard = () => {

  let gearr = [];
  let gearrseries = [];
    for (let i = 0; i < chartdata.length; i++) {
     gearr.push(chartdata[i].GoodsExports);
     gearrseries.push({name:chartdata[i].Category, data:chartdata[i].GoodsExports});
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
      layoutId="expandableCard">
      <div className="radialBar">
        <CircularProgressbar
          value="70"
          text={`70%`}
        />
       
      </div>
      <div className="detail">
      <span>Goods Exports</span>
        <span className="green">$55,633 m</span>
        
      </div>
    </motion.div>
       
    );
  };
  
  export default GoodsExportCard;