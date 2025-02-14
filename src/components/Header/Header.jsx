import React from "react";
import "./Header.css";

import { data } from "../../constants/index";
import { Button } from "../index";

const Header = () => (
  <header className="section-padding">
      {data.restaurantHeader.map(({ span, description, info }, index) => (
        <div className="header-info" key={index}>
          <span>{span}</span>
          <h1>{description}</h1>
          <p>{info}</p>
          <Button className="second-button" text="Go to menu" />
        </div>
      ))}
    </header>
);

export default Header;
