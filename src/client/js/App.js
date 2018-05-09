import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedOut: true,
      display: 'none'
    };
  }
  componentWillMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then(function(data) {
        if (typeof data.body.email === 'string') {
          this.setState({
            user: data.body,
            loggedOut: false,
            display: ''
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
      .then(function(data) {
        this.setState({
          user: data.body,
          loggedOut: false,
          display: ''
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  };
  updateStateAtUserLogout = (logOut) {
    this.setState({
      user: {},
      loggedOut: logOut,
      display: 'none'
    })
  }  
  render (){
    return 
    <MuiThemeProvider>
      <div>
        <h1>Hey</h1>  
        <SignIn />
        <LogIn updateStateOnLogin={this.updateStateAtUserLogin}/>
      </div>
    </MuiThemeProvider>
  }
}

ReactDOM.render(
  <Router>
    <App/>
  </Router>, document.getElementById('app-container')
);
