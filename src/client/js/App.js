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

class AdminBoard extends Component {
  render() {
    return <h1>Admin's Board, Baby!</h1>
  }
}

class CustomerBoard extends Component {
  render() {
    return <h1>Customer's Board, Baby!</h1>
  }
}

class TeamMemberBoard extends Component {
  render() {
    return <h1>TeamMemberBoard's Board, Baby!</h1>
  }
}

class Services extends Component {
  render() {
    return <h1>Services</h1>
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
            userType: data.body.roleId.toString()
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
        <div className='grid'>
          <SignIn />
          <LogIn logUser={this.updateStateAtUserLogin}/>
        </div>
      :
        <div>
          <div>
            <Header isAuthenticated={this.updateStateAtUserLogout}/>
          </div>
          
          <Switch>
              <Route exact path='/' component={CustomerBoard} />
              <Route exact path='/admin' component={AdminBoard} />
              <Route exact path='/team' component={TeamMemberBoard} />
              <Route exact path='/services' component={Services} />
          </Switch>
        
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