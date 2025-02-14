import React from "react";
import "./Specials.css";
import { Button } from "../index";
import { FaStar } from "react-icons/fa";

import { data } from "../../constants/index";

const Specials = () => (
  <section className="section-padding">
    {data.restaurantSpecialInfo.map(({ span, description, info }, index) => (
      <div key={index} className="special-info">
        <span>{span}</span>
        <h2>{description}</h2>
        <p>{info}</p>
      </div>
    ))}
    <div className="special-menu">
      {data.restaurantSpecialMenu.map(
        ({ imgSrc, title, description }, index) => (
          <div key={index} className="special-offer">
            <div className="special-img">
              <img src={imgSrc} alt="sushi" />
            </div>
            <div className="special-offer-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="special-icons">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <Button className="main-button" text="Order Now" />
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export default Specials;
