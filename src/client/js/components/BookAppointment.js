import React, { Component } from 'react';
import request from 'superagent';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const API_URL = 'http://localhost:3000';

class Book extends Component {
  constructor() {
  	super();
  	this.state = {
  	  user: [],
  	  team: [],
  	  serVal: 1,
  	  teamSel: 1,
  	  controlledDate: null
  	}
  };
  componentDidMount() {
  	request
  	  .get(`${API_URL}/api/accounts/team`)
  	  .then((data) => {
  	  	this.setState({
  	  	  user: this.props.user,
  	  	  team: [...data.body]
  	  	})
  	  })
  	  .catch((e)=>{
  	  	console.log(e)
  	  })
  };
  handleSChange = (e, i, val) => {
  	this.setState({
  	  serVal: val
  	})
  };
  handleTChange = (e, i, val) => {
  	this.setState({
  	  teamSel: val
  	})
  };
  handleDateChange = (e, date) => {
  	this.setState({
  	  controlledDate: date
  	})
  };
  submitAppo = (e) => {
  	e.preventDefault();
  	const data = {
  	  customerReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
  	  customerRate: 9,
  	  pictures: '/assets/images/haircut-female.jpg',
  	  salesId: 1
  	}
  	request
  	  .post(`${API_URL}/api/appointments`)
  	  .send(data)
  	  .then((res)=>{
  	  	alert('New Appointment Sent!')
  	  })
  	  .catch((e)=>{
  	  	console.log(e)
  	  })
  }
  render() {
  	return (
  	  <div className='book--container'>
  	  	<h2 className='book--title'>Book Appointment</h2>
  	  	<form className='book--form' onSubmit={(e)=>{this.submitAppo(e)}}>
  	  	  <TextField
            floatingLabelText='Your Name' 
            defaultValue={this.state.user.name} 
            name='bookName'
          />
  	  	  <TextField
            floatingLabelText='Your Phone Number' 
            defaultValue={this.state.user.phone} 
            name='bookPhone'
          /><br />
          <SelectField
            floatingLabelText='Desired Service'
            value={this.state.serVal}
            onChange={this.handleSChange}
            name='bookServ'
          >
            <MenuItem value={1} primaryText='Haircut' />
            <MenuItem value={2} primaryText='Brushing' />
            <MenuItem value={3} primaryText='Effects' />
            <MenuItem value={4} primaryText='Dye' />
          </SelectField>
          <SelectField
            floatingLabelText='Desired Hairdresser'
            value={this.state.teamSel}
            onChange={this.handleTChange}
            name='bookServ'
          >
          	{this.state.team.map((tm, i)=>{
          	  return <MenuItem key={i} value={i+1} primaryText={tm.name} />
          	})}
          </SelectField>
          <DatePicker
	        hintText="Choose a day"
	        value={this.state.controlledDate}
	        onChange={this.handleDateChange}
	      />
	      <TimePicker
		    hintText="Choose an hour"
		    autoOk={true}
		  />
		  <FlatButton
		  	label='Schedule Appointment'
		  	type='submit'
		  />
  	  	</form>
  	  </div>
  	)
  }
}

export default Book;