import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const API_URL = 'http://localhost:3000'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '',
      anchorEl: null
    }
  };
  componentWillMount() {
    this.setState({
      userType: this.props.userType
    })
  };
  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    })
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  };
  logout = (e) => {
    request
      .get(`${API_URL}/auth/logout`)
  	  .then((response) => {
      const loggedOut = response.body.loggedOut
      this.props.logOut(loggedOut)
    })
    .catch(function(e){
      console.log(e)
    })
  };
  render() {
    const { anchorEl } = this.state;
  	return (
  	  <div className='header'>
  	    <img 
          src='assets/images/eurolook-logo.png'
          className='header--logo' 
        />
        <div>
          { this.state.userType == 0 ?
            <div>
              <ul className='header--list'>
                <Link 
                  to='/profile' 
                  className='header--list--item'
                >
                  <li>My Profile</li>
                </Link>          
                <Link 
                  to='/shop' 
                  className='header--list--item'
                >
                  <li>Purchase Items</li>
                </Link>
                <Link 
                  to='/book' 
                  className='header--list--item'
                >
                  <li>Book Appointment</li>
                </Link>
              </ul>
            </div>
            : null
          }
          { this.state.userType == 1 ?
            <Menu>
              <Link to='/profile'><MenuItem>My Profile</MenuItem></Link>
              <Link to='/mngcst'><MenuItem>Manage Customers</MenuItem></Link>
              <Link to='/mngtm'><MenuItem>Manage Team</MenuItem></Link>
              <Link to='/mngprsr'><MenuItem>Manage Products/Services</MenuItem></Link>
              <Link to='/mngaps'><MenuItem>Manage Appointments</MenuItem></Link>
            </Menu>
          : null
          }
          { this.state.userType == 2 ?
            <Menu>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>My Services</MenuItem>
              <MenuItem>Manage Appointments</MenuItem>
            </Menu>
          : null
          }
        </div>
  	  	<FlatButton 
          className='header--logout'
          onClick={this.logout}
          label='Log Out'
          />
  	  </div>
  	);
  }
}

export default Header;