import React from "react";
import "./Cards.css";
import LineChart from "../LineChart/LineChart";
import TradeLineChart from "../LineChart/TradeLineChart";

const MainCards = () => {
 return (
    
    <div className="maincard">
      <LineChart/>
      <TradeLineChart/>
    </div>
  );
};

export default MainCards;
