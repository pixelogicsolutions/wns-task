import React, { useState } from "react";
import Chart from "react-apexcharts";
import { chartdata } from "../../../Data/WnsData";


const ServicesChart = () => {

 
  let siarr = [];
  let searr = [];

    for (let i = 0; i < chartdata.length; i++) {
      siarr.push({x:chartdata[i].Category,y:chartdata[i].ServicesImports});
      searr.push({x:chartdata[i].Category, y:chartdata[i].ServicesExports});
    }

  const series = [
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
          type: 'area',
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
          curve: "smooth",
           width: 2,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        colors:["#FA8B0C","#5F63F2"],

        grid: {
          show: false,
        },
        fill: {
          colors:["#FA8B0C","#5F63F2"],
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.5,
            stops: [0, 80, 100],
            colorStops: [
                {
                  offset: 0,
                  color: "#FA8B0C",
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
          type: "datetime",
          labels: {
            show: false
          },
          
          
        },
      },
  
  
  
  };

      return  <Chart options={data.options} series={series}  type="area"  height={150} width={745} />

    };

export default ServicesChart;