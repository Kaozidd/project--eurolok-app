import React, { Component } from 'react';
import request from 'superagent';

import EditAccDial from './EditAccDial';

import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const API_URL = 'http://localhost:3000';

class ManageCustomers extends Component {
  constructor() {
  	super();
  	this.state = {
  	  accList: [],
      dialOpen: false,
      userId: '',
      user: [],
      roleVal: 1,
      dialDel: false,
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
  };
  handleOpen = (e) => {
    const id = e+1
    request
      .get(`${API_URL}/api/accounts/${id.toString()}`)
      .then((data) => {
        this.setState({
          userId: id,
          user: data.body,
          dialOpen: true,
          roleVal: data.body.roleId+1
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  };
  handleClose = () => {
    this.setState({
      dialOpen: false
    })
  };
  handleChange = (e, i, val) => {
    this.setState({
      roleVal: val
    })
  };
  editAccount = (e) => {
    e.preventDefault();
    const newUserData = {
      name: e.target.formName.value,
      email: e.target.formEmail.value,
      phone: e.target.formPhone.value,
      roleId: this.state.roleVal-1
    }
    request
      .put(`${API_URL}/api/accounts/${this.state.userId.toString()}`)
      .send(newUserData)
      .then((res) => {
        alert('This User Account has been updated!')
      })
      .catch((e) => {
        console.log(e)
      })
  };
  handleDelete = () => {
    this.setState({
      dialDel: true
    })
  };
  handleConfClick = () => {
    this.setState({
      dialDel: false
    })
  };
  deleteAccount = () => {
    request
      .delete(`${API_URL}/api/accounts/${this.state.userId.toString()}`)
      .then((res) => {
        alert('This User Account has been deleted!')
      })
      .catch((e) => {
        console.log(e)
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
        label='Delete Account'
        primary={true}
        onClick={this.handleDelete}
      />,
      <FlatButton
        label='Submit Changes'
        primary={true}
        keyboardFocused={true}
        form='editAccForm'
        type='submit'
      />
    ]
    return (
  	  <div className='mng-cst'>
  	  	<h2 className='mng-cst--title'>Manage Accounts</h2>
  	  	<Table 
          style={
            {margin: '20px', 
            width: '95%'
          }}
          onCellClick={this.handleOpen}
        >
          <TableHeader 
            displaySelectAll={false} 
            adjustForCheckbox={false}
            style={{
              margin: '0'
            }}
          >  
          <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn 
                tooltip="Users that haven't upload any picture 
                are displaying the default avatar"
              >Avatar</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
    	  	  {this.state.accList.map((user, i) => {
    	  	  	return (
                <TableRow key={i}>
                  <TableRowColumn>{user.id}</TableRowColumn>
                  <TableRowColumn><Avatar src={user.picture || '/assets/images/def-avatar.png'}/></TableRowColumn>
                  <TableRowColumn>{user.name}</TableRowColumn>
                </TableRow>
              )
    	  	  })}
  	  	  </TableBody>
        </Table>
        <Dialog
          actions={actions}
          title={`Editting ${this.state.user.name}'s Account`} 
          modal={false}
          open={this.state.dialOpen}
          onRequestClose={this.handleClose}
        >
          <form id='editAccForm' onSubmit={(e) => { this.editAccount(e) }}>
            <TextField
              floatingLabelText='User Name' 
              defaultValue={this.state.user.name} 
              name='formName'
              style={{
                margin: '10px'
              }}
            />
            <TextField
              floatingLabelText='User Email Address' 
              defaultValue={this.state.user.email} 
              name='formEmail'
              style={{
                margin: '10px'
              }}
            />
            <TextField
              floatingLabelText='User Phone Number' 
              defaultValue={this.state.user.phone} 
              name='formPhone'
              style={{
                margin: '10px'
              }}
            /><SelectField
              floatingLabelText='User Type'
              value={this.state.roleVal}
              onChange={this.handleChange}
              name='formRole'
              style={{
                margin: '30px 0 0 10px'
              }}
            >
              <MenuItem value={1} primaryText='Customer' />
              <MenuItem value={2} primaryText='Admin' />
              <MenuItem value={3} primaryText='Team Member' />
            </SelectField>
          </form>
        </Dialog>
        <Dialog
          actions={[
            <FlatButton
              label='Cancel'
              primary={true}
              onClick={this.handleConfClick}
            />,
            <FlatButton
              label='Confirm'
              primary={true}
              keyboardFocused={true}
              onClick={this.deleteAccount}
            />
          ]}
          title='Are you sure?'
          modal={false}
          open={this.state.dialDel}
          onRequestClose={this.handleConfClick}
        >This action is permanent, therefore, it cannot be undone!</Dialog>
  	  </div>
  	)
  }
}

export default ManageCustomers;