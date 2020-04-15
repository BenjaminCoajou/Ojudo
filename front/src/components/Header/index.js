import React from 'react';
import { NavLink } from 'react-router-dom';

import ffjudo from './logo-ffjudo.png';
import './style.scss';

const Header = () => (
    <header className="header">
        <div className="header__top">
            <h1 className="header__top__title">O'judo</h1>
            <img className="header__top__ffjudo" src={ffjudo} />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-around" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" >Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/presentation" >Présentation</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/actualite" >Actualité</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/evenements" >Evénements</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/connexion" >Connexion</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    </header>

);

export default Header;