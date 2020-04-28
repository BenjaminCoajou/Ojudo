import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import './style.scss';


const Developpeur = () => {
    return (
    <div>
        <Header/>
        <div className="container">
            <div className="presentation__member__container__scroll__list__card">
            <aside className="profile-card">

                <header className="header_presentation">
        
                    <img src=""/>

                    <h1>Lemarchand Johan</h1>
                    <br />
                    <h2>johan.lm@hotmail.fr</h2>
                    
                </header>

                <div className="profile-bio">
                    <h3>Product Owner/Lead Dev Back</h3>
                    <ul>
                        <li>Porteur et responsable du projet </li>
                        <li>Prise de décision lors de conflits</li>
                        <li>Réaliser les choix techniques en back</li>
                    </ul>
                </div>

            </aside>
        </div>
            <div className="presentation__member__container__scroll__list__card">
            <aside className="profile-card">

                <header className="header_presentation">
        
                    <img src=""/>

                    <h1>Coajou Benjamin</h1>
                    <br />
                    <h2>coajou.benjamin@gmail.com</h2>
                    
                </header>

                <div className="profile-bio">
                    <h3>Lead Dev Front</h3>
                    <ul>
                        <li>Réaliser les choix techniques en front</li>
                    </ul>
                </div>

            </aside>
        </div>
            <div className="presentation__member__container__scroll__list__card">
            <aside className="profile-card">

                <header className="header_presentation">
        
                    <img src=""/>

                    <h1>Serbin Freddy</h1>
                    <br />
                    <h2>freddyserbin@gmail.com</h2>
                    
                </header>

                <div className="profile-bio">
                    <h3>Git Master/Dev Front</h3>
                    <ul>
                        <li>Responsable des pulls et des merges sur master</li>
                    </ul>
                </div>

            </aside>
        </div>
            <div className="presentation__member__container__scroll__list__card">
        <aside className="profile-card">

            <header className="header_presentation">
      
                <img src=""/>

                <h1>Guechi Cyril</h1>
                <br />
                <h2>cyrilguechi71@gmail.com</h2>
                
            </header>

            <div className="profile-bio">
                 <h3>Scrum Master/Dev Back</h3>
                 <ul>
                     <li>Responsable du trello</li>
                     <li>Répartition des tâches</li>
                </ul>
            </div>

        </aside>
    </div>
    
    </div>
      <Footer/>
    </div>
    );
}



export default Developpeur;