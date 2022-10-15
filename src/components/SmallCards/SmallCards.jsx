import React from "react";
import "./SmallCards.css";
import { chartdata, tradebalance } from "../../Data/WnsData";
import {cardsData} from "../../Data/Data"


import SmallCard from "../Card/SmallCard";

const SmallCards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>   
            <SmallCard
              title={card.title}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SmallCards;
