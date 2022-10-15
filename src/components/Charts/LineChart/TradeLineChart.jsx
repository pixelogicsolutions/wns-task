import React, { useState } from "react";
import Chart from "react-apexcharts";
import { tradebalance } from "../../../Data/WnsData";
import ReactApexChart from "react-apexcharts";



const TradeLineChart = () => {

  
  let tradearr = [];
  let goodstarr = [];
  let servicearr = [];

    for (let i = 0; i < tradebalance.length; i++) {
      tradearr.push({x:tradebalance[i].Category,y:tradebalance[i].TradeBalance});
      goodstarr.push({x:tradebalance[i].Category,y:tradebalance[i].GoodsBalance});
      servicearr.push({x:tradebalance[i].Category, y:tradebalance[i].ServicesBalance});
    }

  const series = [
    {
      name: "Goods Balance",
      type: 'column',
      data:goodstarr
    },
    {
      name: "Service Balance",
      type: 'line',
    data: servicearr
    },
    {
      name: "Trade Balance",
      type: 'area',
      data: tradearr
   },
    
    
  ];
 


  const data = {
    options: {
      chart: {
        type: "line",
        stacked: false,
        zoom: {
          enabled: true
        }
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      title: {
        text: "Trade balance"
      },
      xaxis: {
      },
      fill: {
        opacity: [1, 1, 0.5],
          gradient: {
            inverseColors: false,
            shadeIntensity: 1,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 80, 100]
          }
       
      },
      yaxis: {
        labels: {
          show: true,
          showForNullSeries: false,
          showForZeroSeries: false
        },
        title: {
          text: ""
        }
      },
      labels: {
        show: true,
        minWidth: 40
      },
      responsive: [{
        breakpoint: 748,
        options: {},
    }],
      colors: ["#f1416c", "#081875", "#FA8B0C" ],
    }

  };
  return <div className="Charts">
  <div className="Chart">
      <Chart options={data.options} series={series}  type="line"  height={350} />
      </div>
  </div>
};

export default TradeLineChart;