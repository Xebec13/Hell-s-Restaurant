import React from "react";
import "./Header.css";
import {Button} from '../index'


const Header = () => (
  <header className="section-padding">
    <span>Best sushi in town</span>
    <h1>Taste the rich flavor of <br /> high quality sushi</h1>
    <p>
      We only use the five star quality for <br /> our menu, come and get the richness in <br />
      every food we serve.
    </p>
    <Button className='second-button' text='Go to menu'/>
  </header>
);

export default Header;
