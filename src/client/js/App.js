import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Header from './components/Header';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import Board from './components/Board';

const API_URL = 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedOut: true,
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
        <div className='grid'>
          <SignIn />
          <LogIn logUser={this.updateStateAtUserLogin}/>
        </div>
      :
        <div>
          <div>
            <Header isAuthenticated={this.updateStateAtUserLogout}/>
          </div>
          
          <Board />
        
        </div>
      }
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router >
      <App />
    </Router>
  </MuiThemeProvider>, document.getElementById('app-container')
);