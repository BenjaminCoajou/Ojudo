import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import './style.scss';

const Login = ({ email, password, isLogged, loggedMessage, error, inputChange, handleLogin, handleLogout }) => (
    <div>
    <Header />
    <div class="login-box">
        <h2>Login</h2>
        {error && <div className="alert alert-danger loginPage__alert" role="alert">
            {error}
        </div>}
        {loggedMessage && <div className="alert alert-success" role="alert">
            {loggedMessage}
        </div>}
        {!isLogged && <form className="loginPage__form" onSubmit={(evt) => { evt.preventDefault(); handleLogin() }}>

            <div class="user-box">
                <input type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    value={email}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                <label htmlFor="InputEmail">Email</label>
            </div>
            <div class="user-box">
                <input type="password"
                    className="form-control"
                    id="InputPassword"
                    name="password"
                    value={password}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                <label htmlFor="InputPassword">Mot de passe</label>
            </div>

            <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Se Connecter</button>
        </form>}
        {isLogged && <button type="button" className="btn btn-primary" onClick={handleLogout}>Se Déconnecter</button>}

    </div>
    <Footer />
    </div>
);

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    loggedMessage: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
}

export default Login;