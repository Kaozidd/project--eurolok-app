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
import AdminBoard from './components/AdminBoard';
import CustomerBoard from './components/CustomerBoard';
import TeamBoard from './components/TeamBoard';
import Services from './components/Services';
import NotFound from './components/NotFound';

const API_URL = 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedOut: true,
      userType: ''
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
            userType: data.body.roleId
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
          userType: data.body.roleId
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
          { this.state.userType == 1 ?
            <div>
              <Switch>
                <Route exact path='/' component={AdminBoard} />
                <Route exact path='/services' component={Services} />
                <Route component={NotFound} />
              </Switch>
            </div>
          : null
          }
          { this.state.userType == 2 ?
            <div>
              <Switch>
                <Route exact path='/' component={TeamBoard} />
                <Route exact path='/services' component={Services} />
                <Route component={NotFound} />
              </Switch>
            </div>
          : null
          }
          { this.state.userType != 1 && this.state.userType != 2 ?
            <div>
              <Switch>
                <Route exact path='/' component={CustomerBoard} />
                <Route exact path='/services' component={Services} />
                <Route component={NotFound} />
              </Switch>
            </div>
          : null
          }
        </div>
      }
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>, document.getElementById('app-container')
);