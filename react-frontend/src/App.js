import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './containers/Home'
import Shop from './containers/Shop'
import Profile from './containers/Profile'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" render = {() => (<Redirect from='/' to='/home' />)} />
          <Route exact path = "/home" component = {Home} />
          <Route exact path = "/shop" component = {Shop} />
          <Route exact path = "/profile" component = {Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
