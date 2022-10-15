import React from "react";
import Table from "../Table/Table";
import LineChart from "../Charts/LineChart/LineChart";
import TradeLineChart from "../Charts/LineChart/TradeLineChart";
import MainCards from "../Charts/MainCards/MainCards";
import MainSmallCard from "../SmallCards/MainSmallCard";
import GoodsTradecard from "../SmallCards/Trade/GoodsTradecard";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>New Zealand trade for the year ended June 2018</h1>
      <MainSmallCard/>
      <MainCards/>
      <Table />
    </div>
  );
};

export default MainDash;
