import React, { useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './style.scss';
import './../Footer/raindrop';
import initNews from './article.js';
//import logo from './logo-ffjudo.png';

const News = () => {
  useEffect ( () => { initNews()();} );
    return ( 
    <div>
        <Header/>
        <div className="body_news">
        <div className="news-container">
  <div className="card-column column-0">
    <div className="card card-color-0">
      <div className="border"></div>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" />
      <h1>Hey now, you're an allstar</h1>
    </div>
    <div className="card card-color-2">
      <div className="border"></div>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
      <h1>Hey now, you're a rock star</h1>
    </div>
  </div>
  <div className="card-column column-1">
    <div className="card card-color-1">
      <div className="border"></div>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
      <h1>Get your game on, go play</h1>
    </div>
    <div className="card card-color-3">
      <div className="border"></div>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
      <h1>Get the show on, get paid</h1>
    </div>
  </div>
</div>

<div id="cover" className="cover"></div>

<div id="open-content" className="open-content">
  <a href="#" id="close-content" className="close-content"><span className="x-1"></span><span className="x-2"></span></a>
  <img id="open-content-image" src="" />
  <div className="text" id="open-content-text">
  </div>
</div>
</div>
        <Footer/>
    </div>
)};

export default News;