import React from "react";
import "./Offer.css";

import { Button } from "../index";

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
      <Button className="third-button" text="Specialities" />
      <Button className="third-button" text="Homestyle Sushi" />
      <Button className="third-button" text="Steak" />
      <Button className="third-button" text="With Rice" />
      <Button className="third-button" text="Cocktails" />
      <Button className="third-button" text="Wine" />
      <Button className="third-button" text="Appetizer" />
    </div>
    
    <div className="offer-main-menu">
    {data.restaurantMainMenu.map(({description,info,price,imgSrc}, index) => (
      <div key={index} className="offer-menu">
        <div className="menu-image">
          <img src={imgSrc} alt="sushi" />
        </div>
        <div className="menu-info">
          <h3>{description}</h3>
          <p>{info}</p>
          <span>{price}</span>
        </div>
      </div>
    ))}
    </div>
  </section>
);

export default Offer;
