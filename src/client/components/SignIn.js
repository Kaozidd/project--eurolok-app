import React, { Component } from 'react';
import request from 'superagent';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000';

class SignIn extends Component {
  createNewUser = (e) => {
  	e.preventDefault()
  	const newUserData = {
  	  name: e.target.signInName.value,
  	  email: e.target.signInEmail.value,
  	  password: e.target.signInPass.value,
  	  phone: e.target.signInPhone.value
  	}
  	request
  	  .post(`${API_URL}/auth/register`)
  	  .send(newUserData)
  	  .then(function(response) {
  	  	alert('New User registered!\nLog In now!')
  	  })
  	  .catch(function(e) {
  	  	console.log(e)
  	  })
  }
  render() {
  	return (
  	  <div className='grid'>
        <Paper className='login-material-ui-paper' zDepth={5} >
          <div className='login-form-container'>
            <h2 className='login-title'>Registrarme (Sign In)</h2>
            <form className='form' onSubmit={ (e) => { this.createNewUser(e) } }>
              <div>
                <TextField
                  hintText='Your name'
                  floatingLabelText='Your name'
                  placeholder='Type in your name'
                  name='signInName'
                />
              </div>
              <div>
                <TextField
                  hintText='Your email'
                  floatingLabelText='Your email'
                  placeholder='Type in your e-mail'
                  name='signInEmail'
                />
              </div>
              <div>
                <TextField
                  hintText='Password Field'
                  floatingLabelText='Your Password'
                  type='password'
                  defaultValue='Type in your password'
                  name='signInPass'
                />
              </div>
              <div>
                <TextField
                  hintText='Phone Field'
                  floatingLabelText='Your Phone Number'
                  type='password'
                  defaultValue='Type in your phone number'
                  name='signInPhone'
                />
              </div>
              <RaisedButton
                className='login-button'
                label="Signin"
                type='submit'
              />
            </form>
          </div>
        </Paper> 
	  </div>
  	)
  }
}

export default SignIn;