import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Login = ({ email, password, isLogged, loggedMessage, error, inputChange, handleLogin, handleLogout }) => (
    <div className="loginPage">
        {error && <div className="alert alert-danger loginPage__alert" role="alert">                            
            {error}
        </div>}
       {loggedMessage && <div className="alert alert-success" role="alert">
            {loggedMessage}
        </div>}
        { !isLogged && <form className="loginPage__form" onSubmit={(evt) => { evt.preventDefault(); handleLogin() }}>
            <div className="form-group">
                <label htmlFor="InputEmail">Adresse Email</label>
                <input type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    value={email}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Mot de Passe</label>
                <input type="password"
                    className="form-control"
                    id="InputPassword"
                    name="password"
                    value={password}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }}
                />
            </div>
            <button type="submit" className="btn btn-primary">Se Connecter</button>
        </form> }
        { isLogged && <button type="button" className="btn btn-primary" onClick={handleLogout}>Se Déconnecter</button> }
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