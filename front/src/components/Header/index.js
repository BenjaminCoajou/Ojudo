import React from "react";
import { NavLink } from "react-router-dom";

import ffjudo from "./logo-ffjudo.png";
import "./style.scss";
import "./navbar.js";

const Header = () => (
  <header className="header">
    <div className="header__top">
      <h1 className="header__top__title">O'judo</h1>
      <img className="header__top__ffjudo" src={ffjudo} />
    </div>

    <div className="menuContainer">
      {" "}
      <span className="menuTitle">menu</span>
      <div className="menu">
        <ul>
          <li>
            {" "}
            <a href="#">Accueil</a>
          </li>
          <li>
            {" "}
            <a href="#">Présentation</a>
          </li>
          <li>
            {" "}
            <a href="#">Actualité</a>
          </li>
          <li>
            {" "}
            <a href="#">Evénements</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
          <li>
            {" "}
            <a href="#">Connexion</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
