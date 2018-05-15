import React, { Component } from 'react';
import request from 'superagent';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const API_URL = 'http://localhost/3000';

class Profile extends Component {
  constructor() {
  	super();
  	this.state = {
  	  user: []
  	}
  };
  componentWillMount() {
  	this.setState({
  	  user: this.props.user
  	})
  };
  render() {
  	console.log(this.state)
  	return (
  	  <div className='profile--container'>
  	  	<div className='profile--header'>
          <Avatar 
    	  	  src={this.state.user.picture || 'assets/images/def-avatar.png'}
    	  	  className='profile--avatar'
            style={{
              height: '75px',
              width: '75px'
            }}
    	  	/>
      	  <h2 className='profile--name'>{this.state.user.name}'s Profile</h2>
        </div>
        <article className='profile--article'>
          <h3>My last visit</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet blandit quam. Maecenas ut dui eget orci malesuada tempus. Sed ultrices eros vitae nibh ultrices, tincidunt mollis neque sollicitudin. Pellentesque tempor hendrerit elit, vitae fermentum elit mattis nec. Vestibulum nec massa in dui condimentum commodo. Vestibulum tincidunt eros justo. </p>
        </article>
        <article className='profile--article'>
          <h3>My last visit</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet blandit quam. Maecenas ut dui eget orci malesuada tempus. Sed ultrices eros vitae nibh ultrices, tincidunt mollis neque sollicitudin. Pellentesque tempor hendrerit elit, vitae fermentum elit mattis nec. Vestibulum nec massa in dui condimentum commodo. Vestibulum tincidunt eros justo. </p>
        </article>
        <article className='profile--article'>
          <h3>My last visit</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet blandit quam. Maecenas ut dui eget orci malesuada tempus. Sed ultrices eros vitae nibh ultrices, tincidunt mollis neque sollicitudin. Pellentesque tempor hendrerit elit, vitae fermentum elit mattis nec. Vestibulum nec massa in dui condimentum commodo. Vestibulum tincidunt eros justo. </p>
        </article>
        <article className='profile--article'>
          <h3>My last visit</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet blandit quam. Maecenas ut dui eget orci malesuada tempus. Sed ultrices eros vitae nibh ultrices, tincidunt mollis neque sollicitudin. Pellentesque tempor hendrerit elit, vitae fermentum elit mattis nec. Vestibulum nec massa in dui condimentum commodo. Vestibulum tincidunt eros justo. </p>
        </article>
  	  </div>
  	)
  }
}

export default Profile;