import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Route, Redirect } from "react-router-dom";
import Appbar from './Appbar';

export function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export const PrivateRoute = ({component: Component, ...rest}) => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const dispatch = useDispatch();
  const isAuthenticated = (token) => {
    if (token === '' || token === undefined || token === null) {
      return false;
    }
    let jwt = parseJwt(token);
    if (Date.now() >= jwt.exp * 1000) {
      console.log("Token expired", jwt.exp);
      dispatch({ type: 'TOKEN_EXPIRED' });
      return false;
    }
    else return true;
  }
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route {...rest} render={props => (
      isAuthenticated(accessToken) ?
        <>
          <Appbar />
          <Component {...props} />
        </>
      : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;