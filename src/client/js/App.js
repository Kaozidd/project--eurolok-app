import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BrowserRouter from 'react-router-dom';
const Router = BrowserRouter;
import Switch from 'react-router-dom';
import Route from 'react-router-dom';
import Link from 'react-router-dom';
import Redirect from 'react-router-dom';


import Header from './components/Header';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';

const API_URL = 'http://localhost:3000'

const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true,
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false,
    setTimeout(cb, 100)
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedOut: true,
      userType: 'none'
    };
  }
  componentWillMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        if (typeof data.body.email === 'string') {
          this.setState({
            user: data.body,
            loggedOut: false,
            userType: ''
          })
        }
      })
      .catch(function(e) {
        console.log(e)
      })
  };
  updateStateAtUserLogin = () => {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        this.setState({
          user: data.body,
          loggedOut: false,
          userType: data.body.roleId.toString()
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  };
  updateStateAtUserLogout = (logOut) => {
    this.setState({
      user: [],
      loggedOut: logOut,
      userType: 'none'
    });
  }
  render () {
    return (
      <div>
      { this.state.loggedOut ?
        <div>
          <SignIn />
          <LogIn logUser={this.updateStateAtUserLogin}/>
        </div>
      :
        <div>
          <div>
            <Header isAuthenticated={this.updateStateAtUserLogout}/>
          </div>
          <div>
            <h1>Hey</h1>
            <p>Paragraph</p>
            <img src='/assets/team-pictures/carsten.jpg' />
          </div>
        </div>
      }
      </div>
    );
  }
}

ReactDOM.render(
  // <MuiThemeProvider>
    // <Router >
      <App />
    // </Router>
  // </MuiThemeProvider>
  , document.getElementById('app-container')
);