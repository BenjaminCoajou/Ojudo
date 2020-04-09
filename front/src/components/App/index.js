// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import Footer from '../Footer';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <News />
    <Footer />
  </div>
);

// == Export
export default App;
