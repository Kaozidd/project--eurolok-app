import React, { Component } from 'react';
import request from 'superagent';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const API_URL = 'http://localhost:3000';

class AdminBoard extends Component {
  constructor() {
  	super();
  	this.state = {
  	  appo: [],
  	  dialOpen: false
  	}
  };
  componentDidMount() {
  	request
  	  .get(`${API_URL}/api/appointments`)
  	  .then((data) => {
  	  	this.setState({
  	  	  appo: [...data.body]
  	  	})
  	  })
  	  .catch(function(e) {
  	  	console.log(e)
  	  })
  };
  handleOpen = () => {
  	this.setState({
  	  dialOpen: true
  	})
  };
  handleClose = () => {
  	this.setState({
  	  dialOpen: false
  	})
  }
  render() {
  	const actions = [
  	  <FlatButton
  	    label='Cancel'
  	    primary={true}
  	    onClick={this.handleClose}
  	  />,
  	  <FlatButton
  	    label='Submit'
  	    primary={true}
  	    onClick={this.handleClose}
  	  />
  	]
  	return (
	  <div className='agenda--container'>
  	  	<h1 className='agenda--title'>Agenda</h1>
  	  	<ul>
  	  	  {this.state.appo.map((appo, i) => {
  	  	  	return (
  	  	  	  <li 
  	  	  	  	className='agenda--appointment' 
  	  	  	  	key={i}
  	  	  	  	onClick={this.handleOpen}
  	  	  	  >
  	  	  	  	<h3 className='agenda--appointment--title'>Appointment Id: {appo.id}</h3>
  	  	  	    <div className='agenda--appointment--info'>
		  	  	  <img className='agenda--appointment--info--img' src={appo.pictures} />
		  	  	  <p className='agenda--appointment--info--rate'>Rate: <span>{appo.customerRate}</span></p>
  	  	  	  	</div>
  	  	  	  	<div>
		  	  	  <Dialog
		  	  	    title={`Edit Agenda Item Id: ${appo.id}`}
		  	  	    actions={actions}
		  	  	    modal={false}
		  	  	    open={this.state.dialOpen}
		  	  	    onRequestClose={this.handleClose}
		  	  	  >
		  	  	    Edit the selected item in Agenda.
		  	  	  </Dialog>
		  	  	</div>
  	  	  	  </li>
  	  	  	)
  	  	  })}
  	  	</ul>
  	  </div>

  	)
  }
}

export default AdminBoard;