import React from "react";

import ServicesBalanceCard from "./ServicesBalanceCard";
import ServicesExportCard from "./ServicesExportCard";
import ServicesImportCard from "./ServicesImportCard";
import ServicesChart from "./ServicesChart";

const ServicesMain = () => {
    return (
        <>
    <div className="servicegroupbg">
        <h2>Services Info</h2>
      <div className="Cards  m-t-0 m-b-0">
     
            <div className="parentContainer green">   
                  <ServicesExportCard />
              </div>
              <div className="parentContainer">   
                  <ServicesImportCard />
              </div>
              <div className="parentContainer green">   
                  <ServicesBalanceCard />
              </div>
        </div>
        <div className="Cards  m-t-0 m-b-0">
            <ServicesChart/>
        </div>
    </div>
        </>
    );
  };
  
  export default ServicesMain;