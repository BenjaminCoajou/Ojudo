// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Home from '../../containers/Home';
import Presentation from '../../containers/Presentation';
import News from '../News';
import Article from '../Article';
import Events from '../../containers/Events';
import Contact from '../Contact';
import Login from '../../containers/Login';
import Register from '../Register';
import Sponsors from '../Sponsors';

import './styles.css';

import Admin from '../Admin';
import Dashboard from '../Admin/Dashboard';
import Categories from '../Admin/Categories';
import Woman from '../Admin/Categories/Woman';
import Man from '../Admin/Categories/Man';
import UsersList from '../Admin/Users/UsersList';
import Users from '../Admin/Users';
import UsersDetails from '../Admin/Users/UsersDetails';
import EventAdmin from '../Admin/Event';
import SponsorsAdmin from '../Admin/Sponsors';
import ArticleAdmin from '../Admin/Article';
import Mentions from '../Mentions légales/mentions';
import ForgottenPassword from '../Login/ForgottenPassword';
import Developpeur from '../Presentation/Developpeur';

// == Composant
const App = ({ fetchUser, fetchEvents, fetchPresentation, fetchArticle, fetchPicture}) => {
  useEffect(fetchUser, []);
  useEffect(fetchEvents, []);
  useEffect(fetchPresentation, []);
  useEffect(fetchArticle, []);
  useEffect(fetchPicture, []);
   return (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/presentation" component={Presentation}/>
      <Route exact path="/actualite" component={News}/> 
      <Route exact path="/actualite/article" component={Article}/>
      <Route exact path="/evenements" component={Events}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/connexion" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/sponsors" component={Sponsors}/>
      <Route exact path="/forgotten-password" component={ForgottenPassword}/>
      <Route exact path="/mentions-legales" component={Mentions}/>
      <Route exact path="/developpeur" component={Developpeur}/>
      <Admin/>
      <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/categorie" component={Categories} />
      <Route exact path="/admin/categorie/feminin" component={Woman} />
      <Route exact path="/admin/categorie/masculin" component={Man} />
      <Route exact path="/admin/event" component={EventAdmin} />
      <Route exact path="/admin/article" component={ArticleAdmin} />
      <Route exact path="/admin/sponsors" component={SponsorsAdmin} />
      <Route exact path="/admin/userlist" component={UsersList} />
      <Route exact path="/admin/user" component={Users} />
      <Route exact path="/admin/user/detail" component={UsersDetails} />
    </Switch>
  </div>
)};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  fetchPresentation: PropTypes.func.isRequired,
}

// == Export
export default App;
