import React, { useState } from "react";
import Chart from "react-apexcharts";
import { chartdata } from "../../../Data/WnsData";


const LineChart = () => {

  
  let siarr = [];
  let searr = [];
  let giarr = [];
  let gearr = [];


    for (let i = 0; i < chartdata.length; i++) {
      siarr.push({x:chartdata[i].Category,y:chartdata[i].ServicesImports});
      giarr.push({x:chartdata[i].Category,y:chartdata[i].GoodsImports});
      searr.push({x:chartdata[i].Category, y:chartdata[i].ServicesExports});
      gearr.push({x:chartdata[i].Category, y:chartdata[i].GoodsExports});
    }

  const series = [
    {
      name: "Goods Exports",
      data: gearr
   },
   {
    name: "Goods Imports",
      data: giarr
  },
    {
      name: "Service Exports",
      data:searr
    },
    {
      name: "Service Imports",
        data: siarr
    }
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
        offsetX: 6,
        text: "Goods and Service trade"
      },
      xaxis: {
      },
      fill: {
        type: "solid",
        opacity: 1
      },
      tooltip: {
        x: {
          format: "YYYY",
        },
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
      colors: ["#f1416c","#081875", "#FA8B0C","#5F63F2", "#EE423D", "#2EA738"],
    }
  
  
  };


      return <div className="Charts">
          <div className="Chart">

          <Chart options={data.options} series={series}  type="line"  height={350} />


          </div>
    
        
      </div>
    };

export default LineChart;