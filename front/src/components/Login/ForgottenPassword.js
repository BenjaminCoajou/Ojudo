import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import './style.scss';

const ForgottenPassword = ({  }) => (
    <div className="login-container">
    <Header />
    <div className="login-box">
    <form className="loginPage__form">
    <div className="user-box">
                <input type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    value=""
                    />
                    <label htmlFor="InputEmail">Entrez votre email pour réinitialiser votre mot de passe</label> 
                    
            <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               Confirmer</button>
            </div>
            <Link to="/connexion">	<a className="passwordlost" >Revenir à la connexion</a></Link>
            </form>
    </div>
    <Footer />
    </div>
);


export default ForgottenPassword;