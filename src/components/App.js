import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recipes from '../pages/Recipes';

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/recipes" component={Recipes} />
      </Router>
    );
  }
}

export default App;
