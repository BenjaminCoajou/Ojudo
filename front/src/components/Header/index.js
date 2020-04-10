import React from 'react';

import ffjudo from './logo-ffjudo.png';
import './style.scss';

const Header = () => (
    <header className="header">
        <div className="header__top">
            <h1 className="header__top__title">O'judo</h1>
            <img className="header__top__ffjudo" src={ffjudo} />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-around" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Actualité</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Evénements</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Connexion</a>
                    </li>

                </ul>
            </div>
        </nav>
    </header>

);

export default Header;