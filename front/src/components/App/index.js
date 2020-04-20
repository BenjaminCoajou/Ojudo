// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import

import Home from '../Home';
import Presentation from '../Presentation';
import News from '../News';
import Article from '../Article';
import Events from '../Events';
import Contact from '../Contact';
import Login from '../../containers/Login';
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
import Mentions from '../Mentions légales/mentions'



// == Composant
const App = ({fetchUser}) => {
  useEffect(fetchUser, []);
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
      <Route exact path="/sponsors" component={Sponsors}/>
      <Route exact path="/mentions-legales" component={Mentions}/>
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

// == Export
export default App;
