import React, { Component } from 'react';
import request from 'superagent';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const API_URL = 'http://localhost:3000';

class ManageCustomers extends Component {
  constructor() {
  	super();
  	this.state = {
  	  accList: []
  	}
  };
  componentWillMount() {
  	request
  	  .get(`${API_URL}/api/accounts`)
  	  .then((data) => {
  	  	this.setState({
  	  	  accList: [...data.body]
  	  	})
  	  })
  	  .catch(function(e) {
  	  	console.log(e)
  	  })
  }
  render() {
  	return (
  	  <div className='mng-cst'>
  	  	<h2 className='mng-cst--title'>Manage Customers</h2>
  	  	<List className='mng-cst--list'>
  	  	  {this.state.accList.map((user, i) => {
  	  	  	return (
              <ListItem
                className='mng-cst--list--item'
                key={i}
    	  	  	  primaryText={user.name}
    	  	  	  leftAvatar={<Avatar src={user.picture} />}
  	  	  	  />
            )
  	  	  })}
  	  	</List>
  	  </div>
  	)
  }
}

export default ManageCustomers;