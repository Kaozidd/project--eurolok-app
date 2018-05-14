import React, { Component } from 'react';
import request from 'superagent';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const API_URL = 'http://localhost:3000';

class SignIn extends Component {
  createNewUser = function(e) {
  	e.preventDefault()
  	const newUserData = {
  	  name: e.target.signInName.value,
  	  email: e.target.signInEmail.value,
  	  password: e.target.signInPass.value,
  	  phone: e.target.signInPhone.value,
  	  roleId: 0
  	};
  	request
  	  .post(`${API_URL}/auth/register`)
  	  .send(newUserData)
  	  .then((response) => {
  	  	alert('New User registered!\nLog In now!')
  	  })
  	  .catch((e) => {
  	  	console.log(e)
  	  	alert('That user already exists.\nLog In or try different e-mail')
  	  })
  };
  render() {
  	return (
  	  <div>
        <Paper className='log-container' zDepth={5} >
          <div className='login-form-container'>
            <h2 className='login-title'>Register (Sign In)</h2>
            <form className='form' onSubmit={(e) => { this.createNewUser(e) } }>
              <div>
                <TextField
                  floatingLabelText='Your name'
                  name='signInName'
                />
              </div>
              <div>
                <TextField 
                  floatingLabelText='Your email'
                  name='signInEmail'
                />
              </div>
              <div>
                <TextField 
                  floatingLabelText='Your Password'
                  type='password'
                  name='signInPass'
                />
              </div>
              <div>
                <TextField 
                  floatingLabelText='Your Phone Number'
                  name='signInPhone'
                />
              </div>
              <FlatButton
                className='login-button'
                label="Signin"
                type='submit'
              />
            </form>
          </div>
        </Paper>  
	    </div>
  	);
  }
}

export default SignIn;