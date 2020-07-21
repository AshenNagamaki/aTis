import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const GuardedRoute = ({ component: C, isGuarded, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isGuarded ? <Redirect to="/" /> : <C {...props} />)}
  />
);
