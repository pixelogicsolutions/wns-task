import React, { useState } from "react";
import Chart from "react-apexcharts";
import { chartdata } from "../../../Data/WnsData";


const GoodsChart = () => {

  let giarr = [];
  let gearr = [];

  let catarray =chartdata.Category

    for (let i = 0; i < chartdata.length; i++) {
      giarr.push({x:chartdata[i].Category,y:chartdata[i].GoodsImports});
      gearr.push({x:chartdata[i].Category, y:chartdata[i].GoodsExports});
    }

  const series = [
    {
      name: "Goods Exports",
      type: 'area',
      data: gearr
      
   },
    {
      name: "Goods Imports",
      type: 'area',
        data: giarr
     
    },
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
          colors:["#f1416c","#081875"],
          title: {
            text: "Goods",
            align: 'center',
          },
        grid: {
          show: false,
        },
        fill: {
          colors: ['#20C997', '#f1416c' ],
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
          type: "datetime",
          labels: {
            show: false
          },
          
          
        },
      },
  
  
  
  };

      return  <Chart options={data.options} series={series}  type="area"  height={150} width={745} />

    };

export default GoodsChart;