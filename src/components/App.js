import React from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from './molecules/Navbar';

const Appbar = () => {
  return (
    <Navbar>
      <Navbar.Logo>
        <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="text-xl font-semibold tracking-tight">Lazy Mans Meal</span>
      </Navbar.Logo>
      <Navbar.List>
        <Navbar.Item>
          Item 1
        </Navbar.Item>
        <Navbar.Item>
          Item 2
        </Navbar.Item>
        <Navbar.Item>
          Item 3
        </Navbar.Item>
        <Navbar.Item className="text-red-400" style={{ float: "right" }}>
          Profile
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  );
}
const isAuthenticated = () => {
  // TODO: implement this function
  return true;
}
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isAuthenticated() ?
              <>
                <Appbar />
                <Component {...props} />
              </>
            : <Redirect to="/login" />
        )} />
    );
};

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <PrivateRoute exact path="/" component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    );
  }
}

export default App;
