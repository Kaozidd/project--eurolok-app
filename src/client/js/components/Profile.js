import React, { Component } from 'react';
import request from 'superagent';

import Avatar from 'material-ui/Avatar';

const API_URL = 'http://localhost/3000'

class Profile extends Component {
  constructor() {
  	super();
  	this.state = {
  	  user: []
  	}
  }
  componentWillMount() {
  	this.setState({
  	  user: this.props.user
  	})
  };
  render() {
  	console.log(this.state)
  	return (
  	  <div className='profile--container'>
  	  	<Avatar 
  	  	  src={this.state.user.picture || 'assets/images/def-avatar.png'}
  	  	  className='profile--avatar'
  	  	/>
	  	<h2 className='profile--name'>{this.state.user.name}'s Profile</h2>
	  	<div className ='profile--appointments'>
	  	  
	  	</div>
	  </div>
  	)
  }
}

export default Profile;