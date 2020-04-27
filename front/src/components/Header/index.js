import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

//import ffjudo from "./logo-ffjudo.png";
import "./style.scss";
import initMenu from "./navbar.js";
import initLogo from "./logo.js";
import logo from "./logo.png";



const Header = () => {
  useEffect ( () => {initLogo();initMenu();} );
  return ( 
  <header className="header">
    <div className="header__top">
      <img className="header__top__logo" src={logo} />
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
          <div className="body_logo">
      <div className="view">
  <div className="mat">
    <a><img src="https://vgy.me/raR1xG.png"/></a>
    <a><img src="https://vgy.me/eek83g.png"/></a>
    <a><img src="https://vgy.me/kpVjd0.png"/></a>
    <a><img src="https://vgy.me/wT4qTx.png"/></a>
  </div>
</div>
</div>
     
    </div>
  </header>
  )
};

export default Header;
