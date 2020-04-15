import React from 'react';

import './style.scss';

const News = () => (
    <div className="news">
        <h2 className="news__title"> Les Actualités</h2>
        <div className="news__container">
            <div className="news__container__navsearch">
                <div className="news__container__navsearch__nav">
                    <button className="news__container__navsearch__nav__button">Athlètes</button>
                    <button className="news__container__navsearch__nav__button">Club</button>
                    <button className="news__container__navsearch__nav__button">Résultats</button>
                </div>
                <div className="news__container__navsearch__search">
                    <form className="news__container__navsearch__search__form">
                        <input className="news__container__navsearch__search__form__input" type="text" placeholder="Search"></input>
                    </form>
                </div>
            </div>
            <div className="news__container__articles">
                <div className="news__container__articles__article">
                    <img className="news__container__articles__article__image" src="" />
                    <div className="news__container__articles__article__text">
                        <button className="news__container__articles__article__text__tag"></button>
                        <h3 className="news__container__articles__article__text__title">Titre</h3>
                    </div>
                </div>
            </div>
            <div className="news__container__prevnext">
            </div>
        </div>
    </div>
);

export default News;