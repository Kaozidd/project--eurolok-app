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
  	  dialOpen: false,
  	  confDial: false,
  	  appoId: null
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
  handleOpen = (e) => {
  	this.setState({
  	  dialOpen: true,
  	  appoId: true
  	})
  	console.log(e.target)
  };
  handleClose = () => {
  	this.setState({
  	  dialOpen: false
  	})
  };
  handleCClose = () => {
  	this.setState({
  	  confDial: false
  	})
  };
  confOpen = () => {
  	this.setState({
  	  confDial: true
  	})
  };
  deleteAppointment = () => {

  }
  render() {
  	const actions = [
  	  <FlatButton
  	    label='Cancel'
  	    primary={true}
  	    onClick={this.handleClose}
  	  />,
  	  <FlatButton
  	    label='Delete'
  	    primary={true}
  	    keyboardFocused={true}
  	    onClick={this.confOpen}
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
		  	  	</div>
  	  	  	  </li>
  	  	  	)
  	  	  })}
  	  	</ul>
	  	<Dialog
	  	  title='Edit Agenda Item'
	  	  actions={actions}
	  	  modal={false}
	  	  open={this.state.dialOpen}
	  	  onRequestClose={this.handleClose}
	  	>
	  	  Edit the selected item in Agenda.
	  	</Dialog>
	  	<Dialog
	  	  modal={false}
	  	  open={this.state.confDial}
	  	  title='Are you sure you want to delete this?'
	  	  actions={[
	  	  	<FlatButton
	  	  	  label='Cancel'
	  	  	  primary={true}
	  	  	  onClick={this.handleCClose}
	  	  	/>,
	  	  	<FlatButton
	  	  	  label='Confirm'
	  	  	  primary={true}
	  	  	  keyboardFocused={true}
	  	  	  onClick={this.deleteAppointment}
	  	  	/>
	  	  ]}
	  	/>
  	  </div>

  	)
  }
}

export default AdminBoard;