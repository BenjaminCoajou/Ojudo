import React from "react";
import { NavLink } from "react-router-dom";

//import ffjudo from "./logo-ffjudo.png";
import "./style.scss";
import "./navbar.js";
import "./logo.js";

const Header = () => (
  <header className="header">
    <div className="header__top">
      <h1 className="header__top__title">O'judo</h1>
      <div className="menuContainer">
        {" "}
        <span className="menuTitle">menu</span>
        <div className="menu">
          <ul>
            <li>
              {" "}
              <NavLink className="nav-link" exact to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/presentation">
                Présentation
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/actualite">
                Actualité
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/evenements">
                Evénements
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/connexion">
                Connexion
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
          <div class="body_logo">
      <div class="view">
  <div class="mat">
    <a><img src="https://vgy.me/raR1xG.png"/></a>
    <a><img src="https://vgy.me/eek83g.png"/></a>
    <a><img src="https://vgy.me/kpVjd0.png"/></a>
    <a><img src="https://vgy.me/wT4qTx.png"/></a>
  </div>
</div>
</div>
     
    </div>
  </header>

);

export default Header;
