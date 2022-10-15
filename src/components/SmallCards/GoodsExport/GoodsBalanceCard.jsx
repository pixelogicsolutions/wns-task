import React from "react";
import "./../SmallCards.css";
import { chartdata, tradebalance } from "../../../Data/WnsData";
import { CircularProgressbar, CircularProgressbarWithChildren,  buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const GoodsBalanceCard  = () => {

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
        <>
            <motion.div
      className="CompactCard"
      style={{
        background: white,
        boxShadow: white,
      }}
      layoutId="expandableCard"
    >
      <div className="radialBar">
      <TrendingDownIcon className="material-icons red" fontSize="large" />       
      </div>
      <div className="detail">
      <span>Goods Balance</span>
        <span>-$3,535 m</span>
        
      </div>
    </motion.div>
    </>
         
    );
  };
  
  export default GoodsBalanceCard ;