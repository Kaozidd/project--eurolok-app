import React, { Component } from 'react'
import request from 'superagent';

const API_URL = 'http://localhost:3000';

class EditAccDial extends Component {
  constructor() {
  	super();
  	this.state = {
  	  user: []
  	}
  };
  // componentDidMount() {
  // 	request
  // 	  .get(`${API_URL}/api/accounts/${this.props.userId}`)
  // 	  .then((data) => {
  // 	  	this.setState({
  // 	  	  user: data.body
  // 	  	})
  // 	  })
  // }
  render() {
  	return (
  	  <form>
  	  	<input placeholde={this.state.user.name} />
  	  	<button label='Submit Changes' />
  	  </form>
  	)
  }
}

export default EditAccDial;