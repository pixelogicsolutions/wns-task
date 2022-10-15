import React, { useState } from "react";
import "../../assets/Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { tradebalance } from "../../../Data/WnsData";
 
const GoodsTradecard = (props) => {
  let trarr = [];
  let searr = [];
  let giarr = [];

    for (let i = 0; i < tradebalance.length; i++) {
      trarr.push({x:tradebalance[i].Category,y:tradebalance[i].TradeBalance});
      giarr.push({x:tradebalance[i].Category,y:tradebalance[i].GoodsBalance});
      searr.push({x:tradebalance[i].Category, y:tradebalance[i].ServicesBalance});
    }

    const finddata = giarr.find(c => c.x === 2018)

    console.log(finddata)
    const series = [
      {
        name: "Goods Trade",
        data:giarr
      },
    ];

   const cdata = {
    options: {
      chart: {
        type: 'line',
          width: 80,
          height: 1,
          sparkline: {
            enabled: true
          }
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 0,
        color: "#fff",
        opacity: 1,
      },
      stroke: {
        curve: "stepline",
        width:2,
        colors: [ 'red'],
      },
      tooltip: {
        x: {
          format: "YYYY",
        },
      },
      grid: {
        show: false,
      },
      colors: [ '#f1416c' ],
      fill: {
          colors: [ '#f1416c' ],
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.5,
            stops: [0, 80, 100],
            colorStops: [
                {
                  offset: 0,
                  color: "#f1416c",
                  opacity: 0.5
                },
            
                {
                  offset: 50,
                  color: "#fff",
                  opacity: 0.3
                },
                {
                  offset: 100,
                  color: "#fff",
                  opacity: 1
                }
              ]
              }
        },
      dataLabels: {
        enabled: false,
      },
      yaxis:{
        enabled: false,
        show: false,
      },

      xaxis: {
        show: false,
        type: "date",
        labels: {
          show: false
        },
      },
    },
  };
  
  const white = "#fff";

  return (

    <motion.div
      className="CompactCard m-b-0"
      style={{
        background: white,
        boxShadow: white,
      }}
    >
      <div className="radialBar">
      <Chart options={cdata.options} series={series} type="area" height={60} />
      
        
      </div>
      <div className="detail">
      <span>Goods Trades</span>
      <span>$ {finddata.y} m</span>
        <span>Last One Year</span>
      </div>
    </motion.div>

);
};

export default GoodsTradecard;
