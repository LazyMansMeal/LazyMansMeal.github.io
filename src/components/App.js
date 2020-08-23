import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
