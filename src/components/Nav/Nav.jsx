import React from "react";
import "./Nav.css";
import { Button } from "../index";

import logo from "../../assets/logo.png";

const navItems = [
  { label: "Menu", href: "/home" },
  { label: "Fine Dining", href: "/fine-dining" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => (
  <nav className="navigation-bar" aria-label="Main Navigation">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <ul>
      {navItems.map(({ label, href }) => (
        <li key={label}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
    <div className="reservation-button">
      <Button className="main-button" text="Reservation" />
    </div>
  </nav>
);

export default Nav;
