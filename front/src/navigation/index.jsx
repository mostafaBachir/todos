import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Accueil from './views/Accueil'
import Login from './views/Login'
import Privatisator from './Privatisator'
import Private from './views/Private'
const AppNav = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/login">Connexion</Link>
        </li>
        <li>
          <Link to="/private">Private</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Accueil} />
      <Route path="/login" component={Login} />
      <Privatisator auth={{isAuthenticated:true}} path="/private" component={Private} />
    </div>
  </Router>
);


export default AppNav;
