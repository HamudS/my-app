import React from "react";
import "./Nav.css";
import logo from "../assets/logo.svg";
export const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </nav>
  );
};
