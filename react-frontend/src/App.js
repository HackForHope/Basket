import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './containers/Home'
import Shop from './containers/Shop'
import Profile from './containers/Profile'
import styled from 'styled-components'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 60px;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: row;
`

function App() {
  return (
    <Router>
      <NavBar />
      <Page>
        <Switch>
          <Route exact path = "/" render = {() => (<Redirect from='/' to='/home' />)} />
          <Route exact path = "/home" component = {Home} />
          <Route exact path = "/shop" component = {Shop} />
          <Route exact path = "/profile" component = {Profile} />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
