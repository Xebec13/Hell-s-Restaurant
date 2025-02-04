import React from "react";
import './Nav.css'

import logo from '../../assets/logo.png'
const Nav = () => (
    <nav className="navigation-bar">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            {['Home', 'Fine Dining', 'About', 'Contact'].map((item) => (
                <li key={item}>
                    <a href="#">{item}</a>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
