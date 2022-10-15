import React from "react";
import GoodsExportCard from "./GoodsExportCard";
import GoodsImportCard from "./GoodsImportCard";
import GoodsBalanceCard from "./GoodsBalanceCard";
import GoodsChart from "./GoodsChart";


const Goodsmain = () => {



    return (
        <>
        <div className="groupbg">
        <h2>Goods Info</h2>
      <div className="Cards m-t-0 m-b-0">
            <div className="parentContainer green">   
                <GoodsExportCard />
            </div>
            <div className="parentContainer">   
                <GoodsImportCard />
            </div>
            <div className="parentContainer">   
                <GoodsBalanceCard />
            </div>
        </div>
        <div className="Cards m-t-0 m-b-0">
            <GoodsChart/>
            </div>
        </div>
        </>
    );
  };
  
  export default Goodsmain;