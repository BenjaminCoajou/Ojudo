import React from "react";
import { NavLink } from "react-router-dom";

import ffjudo from "./logo-ffjudo.png";
import "./style.scss";
import "./navbar.js";

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
      <img className="header__top__ffjudo" src={ffjudo} />
    </div>
  </header>

);

export default Header;
