import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar,NavItem,Nav} from 'react-bootstrap'
import Accueil from './views/Accueil'
import Login from './views/Login'
import Privatisator from './Privatisator'
import Private from './views/Private'
const AppNav = () => (
  <Router>
    <div>

    <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Accueil</Link>

    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      <Link to="/login">Connexion</Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link to="/private">Private</Link>
    </NavItem>

  </Nav>
</Navbar>



      <Route exact path="/" component={Accueil} />
      <Route path="/login" component={Login} />
      <Privatisator auth={{isAuthenticated:true}} path="/private" component={Private} />
    </div>
  </Router>
);


export default AppNav;
