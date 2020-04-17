// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Header from '../Header';
import Home from '../Home';
import Presentation from '../Presentation';
import News from '../News';
import Article from '../Article';
import Events from '../Events';
import Contact from '../Contact';
import Login from '../../containers/Login';
import Sponsors from '../Sponsors';
import Footer from '../Footer';

import slugify from 'slugify';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/presentation" component={Presentation}/>
      <Route exact path="/actualite" component={News}/>
      <Route exact path="/actualite/article" component={Article}/>
      <Route exact path="/evenements" component={Events}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/connexion" component={Login}/>
      <Route exact path="/sponsors" component={Sponsors}/>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
