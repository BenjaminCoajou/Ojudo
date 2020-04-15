// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Home from '../Home';
import Presentation from '../Presentation';
import News from '../News';
import Article from '../Article';
import Events from '../Events';
import Contact from '../Contact';
import Login from '../Login';
import Sponsors from '../Sponsors';
import Footer from '../Footer';

import slugify from 'slugify';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
