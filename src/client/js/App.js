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
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';

import AdminBoard from './components/AdminBoard';
import CustomerBoard from './components/CustomerBoard';
import TeamBoard from './components/TeamBoard';

import Appointments from './components/Appointments';
import Book from './components/BookAppointment';
import Services from './components/Services';
import Profile from './components/Profile';
import Store from './components/Store';

import ManageAppointments from './components/ManageAppointments';
import ManageCustomers from './components/ManageCustomers';
import ManageProd from './components/ManageProd-Serv';
import ManageTeam from './components/ManageTeam';
import NotFound from './components/NotFound';

const API_URL = 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
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
      userType: ''
    });
  }
  render () {
    return (
      <div>
      { this.state.loggedOut ?
        <div className='grid'>
          <img 
            src='assets/images/eurolook-logo.png' 
            className='grid--logo'
            />
          <div className='grid--logs'>
            <SignIn />
            <LogIn logUser={this.updateStateAtUserLogin}/>
          </div>
        </div>
      :
        <div>
          <div>
            <Header 
              logOut={this.updateStateAtUserLogout}
              userType={this.state.userType}
              />
          </div>
          { this.state.userType == 0 ?
            <div className='container'>
              <Switch>
                <Route exact path='/' render={()=><Profile user={this.state.user}/>}/>
                <Route exact path='/book' render={()=><Book user={this.state.user}/>}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          : null
          }
          { this.state.userType == 1 ?
            <div className='container'>
              <Switch>
                <Route exact path='/' render={()=><Profile user={this.state.user}/>}/>
                <Route exact path='/mngcst' component={ManageCustomers} />
                <Route component={NotFound} />
              </Switch>
            </div>
          : null
          }
          { this.state.userType == 2 ?
            <div className='container'>
              <Switch>
                <Route exact path='/' render={()=><Profile user={this.state.user}/>}/>
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