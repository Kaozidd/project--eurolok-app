import React, { Component } from 'react';
import request from 'superagent';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000';

class LogIn extends Component {
  login = (e) => {
  	e.preventDefault()
  	const userData = {
  	  email: e.target.signInEmail.value,
  	  password: e.target.signInPass.value,
  	}
  	request
  	  .post(`${API_URL}/auth/register`)
  	  .send(newUserData)
  	  .then(function(response) {
  	  	alert(`Welcome back, ${response.body.name}`)
        this.props.updateStateOnLogin()
  	  })
  	  .catch(function(e) {
  	  	console.log(e)
        alert('Invalid e-mail/password.\nPlease try again')
  	  })
  }
  render() {
  	return (
  	  <div className='grid'>
        <Paper className='login-material-ui-paper' zDepth={5} >
          <div className='login-form-container'>
            <h2 className='login-title'>Access (Log In)</h2>
            <form className='form' onSubmit={ (e) => { this.createNewUser(e) } }>
              <div>
                <TextField
                  hintText='Your email'
                  floatingLabelText='Your email'
                  type='text'
                  placeholder='Type in your e-mail'
                  name='signInEmail'
                />
              </div>
              <div>
                <TextField
                  hintText='Password'
                  floatingLabelText='Password'
                  type='password'
                  name='signInPass'
                  placeholder='Type in your password'
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

export default LogIn;