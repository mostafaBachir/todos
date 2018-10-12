import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
  Route,
  Redirect
} from "react-router-dom";




const Privatisator = ({ auth,component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default Privatisator;
