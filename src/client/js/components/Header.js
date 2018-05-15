import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

const API_URL = 'http://localhost:3000'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '',
      menu: true
    }
  };
  componentWillMount() {
    this.setState({
      userType: this.props.userType
    })
  };
  menuClicked = () => {
    this.setState({
      menu: false
    })
  };
  homeClicked = () => {
    this.setState({
      menu: true
    })
  };
  logout = (e) => {
    request
      .get(`${API_URL}/auth/logout`)
  	  .then((data) => {
      const loggedOut = data.body.loggedOut
      this.props.logOut(loggedOut)
    })
    .catch(function(e){
      console.log(e)
    })
  };
  render() {
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
                  to='/book' 
                  className={this.state.menu ? 'header--list--item' : 'header--list--item--none'}
                  onClick={this.menuClicked}
                >
                  <li>Book Appointment</li>
                </Link>
                <Link 
                  to='/' 
                  className={this.state.menu ? 'header--list--item--none' : 'header--list--item'}
                  onClick={this.homeClicked}
                >
                  <li>Home</li>
                </Link>
              </ul>
            </div>
            : null
          }
          { this.state.userType == 1 ?
            <div>
              <ul className='header--list'>
                <Link 
                  to='/mngcst' 
                  className={this.state.menu ? 'header--list--item' : 'header--list--item--none'}
                  onClick={this.menuClicked}
                >
                  <li>Manage Accounts</li>
                </Link>
                <Link 
                  to='/' 
                  className={this.state.menu ? 'header--list--item--none' : 'header--list--item'}
                  onClick={this.homeClicked}
                >
                  <li>Home</li>
                </Link>
              </ul>
            </div>
          : null
          }
          { this.state.userType == 2 ?
            <div>
              <ul className='header--list'>          
                <Link 
                  to='/services' 
                  className={this.state.menu ? 'header--list--item' : 'header--list--item--none'}
                  onClick={this.menuClicked}
                >
                  <li>My Services</li>
                </Link>
                <Link 
                  to='/' 
                  className={this.state.menu ? 'header--list--item--none' : 'header--list--item'}
                  onClick={this.homeClicked}
                >
                  <li>Home</li>
                </Link>
              </ul>
            </div>
          : null
          }
        </div>
  	  	<FlatButton 
          className='header--logout'
          onClick={this.logout}
          label='Log Out'
          labelStyle={{
            color: '#AAA'
          }}
          style={{
            margin: '10px 50px 0 0',
            position: 'relative',
            left: '100px'
          }}
          />
  	  </div>
  	);
  }
}

export default Header;