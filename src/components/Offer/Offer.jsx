import React from "react";
import "./Offer.css";

import { data } from "../../constants/index";

const Offer = () => (
  <section className="section-padding">
    {data.restaurantMainOffer.map(({ description, info, span }, index) => (
      <div key={index} className="offer-info">
        <span>{span}</span>
        <h2>{description}</h2>
        <p>{info}</p>
      </div>
    ))}
    <div className="offer-buttons">
      
    </div>
  </section>
);

export default Offer;
