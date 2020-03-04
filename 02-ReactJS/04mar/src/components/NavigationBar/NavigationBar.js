import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Root</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
