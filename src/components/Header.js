import React from "react";

import logo from "../images/plantology_logo.jpg";

import "../styles/Header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src={logo} alt="Plantology Logo" />
      </div>
      <div className="button-container">
        <button>Buy Now</button>
      </div>
    </header>
  );
}
