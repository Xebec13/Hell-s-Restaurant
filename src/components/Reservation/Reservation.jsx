import React from "react";
import "./Reservation.css";

import { Button } from "../index";

import { data } from "../../constants/index";

const Reservation = () => (
  <section className="section-padding">
    {data.reservationEventInfo.map(({ description, info, span }, index) => (
      <div key={index} className="reservation-info">
        <span>{span}</span>
        <h2>{description}</h2>
        <p>{info}</p>
      </div>
    ))}
    <div className="event-buttons">
      <Button className="third-button" text="Pritave Events" />
      <Button className="third-button" text="Pritave Events" />
    </div>
    <div className="event-info">
      {data.reservationEvent.map(
        ({ description, info, price, imgSrc }, index) => (
          <div key={index} className="reservation-event">
            <div className="event-text">
              <div>
                <span>{price}</span>
                <h3>{description}</h3>
              </div>
              <p>{info}</p>
            </div>
            <div className="event-image">
              <img src={imgSrc} alt="dish" />
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export default Reservation;
