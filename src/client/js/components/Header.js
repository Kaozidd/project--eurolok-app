import React, { Component } from 'react';
import request from 'superagent';
import Link from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const API_URL = 'http://localhost:3000'

class Header extends Component {
  logout = (e) => {
    request
      .get(`${API_URL}/auth/logout`)
  	  .then((response) => {
      const loggedOut = response.body.loggedOut
      this.props.isAuthenticated(loggedOut)
    })
    .catch(function(e){
      console.log(e)
    })
  }
  render() {
  	return (
  	  <div className='header--container'>
  	  	<h1>Header</h1>
  	  	<button onClick={this.logout}>Log Out</button>
  	  </div>
  	);
  }
}

export default Header;