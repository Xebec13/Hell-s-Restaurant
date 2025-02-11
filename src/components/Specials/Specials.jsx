import React from "react";
import "./Specials.css";
import { Button } from "../index";

import sushi1 from '../../assets/sushi1.png'
import sushi2 from '../../assets/sushi2.png'
import sushi3 from '../../assets/sushi3.png'

const Specials = () => {
  const menuItems = [
    { imgSrc: sushi1, title: "Tuna Sushi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam architecto fuga." },
    { imgSrc: sushi2, title: "Salomon Sushi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam architecto fuga." },
    { imgSrc: sushi3, title: "Just Sushi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam architecto fuga." }
  ];

  return (
    <section className="section-padding">
      <div className="special-info">
        <span>Special Menu</span>
        <h2>Today's Special</h2>
        <p>
          Special menu often comes different every day, this is our special food
          for today.
        </p>
      </div>
      <div className="special-menu">
        {menuItems.map((item, index) => (
          <div className="menu" key={index}>
            <img src={item.imgSrc} alt="sushi" />
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="menu-icons"></div>
              <Button className="main-button" text="Order Now" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
