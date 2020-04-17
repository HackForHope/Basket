import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'
import ShopPage from './containers/ShopPage'
import AccountPage from './containers/AccountPage'
import RequestsPage from './containers/RequestsPage'
import MissionsPage from './containers/MissionsPage'
import styled from 'styled-components'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 60px;
  padding: 0 auto;
`
function App() {
  return (
    <Router>
      <NavBar />
      <Page>
        <Switch>
          <Route exact path = "/" render = {() => (<Redirect from='/' to='/home' />)} />
          <Route exact path = "/home" component = {HomePage} />
          <Route exact path = "/shop" component = {ShopPage} />
          <Route exact path = "/profile" render = {() => (<Redirect from='/profile' to='/profile/account'></Redirect>)} />
          <Route path = "/profile/account" component = {AccountPage} />
          <Route path = "/profile/requests" component = {RequestsPage} />
          <Route path = "/profile/missions" component = {MissionsPage} />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
