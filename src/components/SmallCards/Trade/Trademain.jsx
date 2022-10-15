import React from "react";
import GoodsTradecard from "./GoodsTradecard";
import ServicesTradecard from "./ServicesTradecard";
import TradeBalancecard from "./TradeBalancecard";


const Trademain = () => {



    return (
        <>

      <div className="Cards trade">
            <div className="parentContainer green">   
                <GoodsTradecard />
            </div>
            <div className="parentContainer">   
                <ServicesTradecard />
            </div>
            <div className="parentContainer">   
                <TradeBalancecard />
            </div>
        </div>
       
        </>
    );
  };
  
  export default Trademain;