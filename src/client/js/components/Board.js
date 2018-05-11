import React, { Component } from 'react';
import request from 'superagent';

import AdminBoard from './AdminBoard';
import CustomerBoard from './CustomerBoard';
import TeamBoard from './TeamBoard';
import Services from './Services';

const API_URL = 'http://localhost:3000';

class Board extends Component {
  constructor() {
  	super();
  	this.state = {
  	  userType: 'none'
  	}
  }
  componentWillMount() {
  	request
  	  .get(`${API_URL}/auth/current`)
  	  .then((data) => {
  	  	if (typeof data.body.email === 'number') {
  	  	  this.setState({
  	  	  	userType: data.body.roleId
  	  	  })
  	  	}
  	  })
  	  .catch(function(e) {
  	  	console.log(e)
  	  })
  };
  render() {
  	return (
  	  <div>
  	  	{ this.state.userType == 1 ?
  	  	  <div>
  	  	  	<AdminBoard />
  	  	  </div>
  	  	: null
  	  	}
  	  	{ this.state.userType == 2 ?
  	  	  <div>
  	  		<TeamBoard />
  	  	  </div>
  	  	: null
  	  	}
  	  	{ this.state.userType != 1 && this.state.userType != 2 ?
  	  	  <div>
  	  	  	<CustomerBoard />
  	  	  </div>
  	  	: null
  	  	}
  	  </div>
  	)
  }
}

export default Board;