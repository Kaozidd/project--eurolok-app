import React, { Component } from 'react';
import request from 'superagent';
import Link from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const API_URL = 'http://localhost:3000'

class Header extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  opMenu: false
  	};
  }
  toggleMenu = () => this.setState({opMenu: !this.state.opMenu});
  closeMenu = () => this.setState({opMenu: false});
  getUserType = (roleId) => {
    if (roleId === 0) {
      return 'customer';
    } else if (roleId === 1) {
      return 'admin';
    } else if (roleId === 2) {
      return 'team';
    }
  }
  logout = (e) => {
  	request
  	  .get(`${API_URL}/auth/logout`)
  	  .then((response) => {
  	  	const logOut = response.body.loggedOut
  	  	this.props.updateStateAtUserLogout(logOut)
  	  })
  }
  render() {
  	return (
  	  <div className='header--container'>
  	  	<div className='header--container--user'>{this.props.currentUser.name}</div>
  	  	<div className='header--container--buttons'>
  	  	  <RaisedButton
  	  	  	className='header--container--buttons--btn'
  	  	  	label='Menu'
  	  	  	onClick={this.toggleMenu}
  	  	  />
  	  	  <RaisedButton
  	  	  	className='header--container--buttons--btn'
  	  	  	label='Log Out'
  	  	  	onClick={this.logout}
  	  	  />
  	  	</div>
  	  	<Drawer
  	  	  docked={false}
          width={300}
          openSecondary={true}
          open={this.state.opMenu}
		  onRequestChange={(opMenu) => this.setState({opMenu})}
		>
		  <Link to='/team' className='no-decoration-text'>
		  	<MenuItem onClick={this.closeMenu}>
		  	  Us
		  	</MenuItem>
		  </Link>
		  <Link to='/shop' className='no-decoration-text'>
		  	<MenuItem onClick={this.closeMenu}>
		  	  Buy Products
		  	</MenuItem>
		  </Link>
		  <Link to='/book' className='no-decoration-text'>
		  	<MenuItem onClick={this.closeMenu}>
		  	  Book Appointment
		  	</MenuItem>
		  </Link>
		</Drawer>
  	  </div>
  	)
  }
}

export default Header