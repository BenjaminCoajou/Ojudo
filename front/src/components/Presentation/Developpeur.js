import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import './style.scss';


const Developpeur = () => {
    return (
    <div>
        <Header/>
        <div className="presentation__member__container__scroll__list__card">
        <aside className="profile-card">

            <header className="header_presentation">
      
                <img src=""/>

                <h1>nom prénom </h1>
                <br />
                <h2>email</h2>
                
            </header>

            <div className="profile-bio">

                <p>rôle
                <br />numéros de téléphone</p>
            </div>

        </aside>
    </div>
      <Footer/>
    </div>
    );
}



export default Developpeur;