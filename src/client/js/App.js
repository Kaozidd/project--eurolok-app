import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  Redirect
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../components/Header';
import SignIn from '../components/SignIn';
import LogIn from '../components/LogIn';

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

class Home extends Component {
  render() {
    return <h3>Home Component View</h3>
  }
}

class Patch extends Component {
  render() {
    return <p>Patching Component</p>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
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
      loggedOut: true,
      userType: logOut,
      userType: 'none'
    });
  }  
  render (){
    return (
      <div>
        { this.state.logOut !== true ?
          <div>
            <Header 
              currentUser={this.state.user}
              updateStateOnLogout={this.updateStateAtUserLogout}
              userType={this.state.userType}
            />
            <h1>Hey</h1>
            <p>Paragraph</p>
            <img src='/assets/team-pictures/carstenn.jpg' />
            <Switch>
              <Route exact path='/team' component={Home} />
              <Route exact path='/shop' component={Patch} />
              <Route exact path='/book' component={Patch} />
            </Switch>
          </div>
        :
          <div className='login--signin'>
            <SignIn />
            <LogIn 
              updateStateOnLogin={this.updateStateAtUserLogin} 
            />
          </div>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Router>, document.getElementById('app-container')
);