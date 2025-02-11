import React from "react";
import "./Button.css";

const Button = ({ text, className }) => (
  <button className={className}>
    <p>{text}</p>
    </button>
);

export default Button;
