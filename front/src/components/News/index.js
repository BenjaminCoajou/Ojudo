import React from 'react';

import './style.scss';

const News = () => (
    <div className="news">
        <h2 className="news__title"> Les Actualités</h2>
        <div className="news__nav-search">
            <div className="news__nav-search__nav">
                <button className="news__nav-search__nav__tag">Athlètes</button>
                <button className="news__nav-search__nav__tag">Club</button>
                <button className="news__nav-search__nav__tag">Résultats</button>
            </div>
            <div className="news__nav-search__search">
            
            </div>
        </div>
        <div className="news__articles">
        
        </div>
        <div className="news__prev-next">
        </div>
    </div>
);

export default News;