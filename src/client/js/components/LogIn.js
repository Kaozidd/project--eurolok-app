import React, { Component } from 'react';
import request from 'superagent';

const API_URL = 'http://localhost:3000';

class LogIn extends Component {
  login = function(e) {
  	e.preventDefault()
  	const userData = {
  	  email: e.target.signInEmail.value,
  	  password: e.target.signInPass.value,
  	};
  	request
  	  .post(`${API_URL}/auth/login`)
  	  .send(userData)
  	  .then((response) => {
  	  	alert(`Welcome back, ${response.body.name}`)
        this.props.logUser()
  	  })
  	  .catch(function(e) {
  	  	console.log(e)
        alert('Invalid e-mail/password.\nPlease try again')
  	  })
  };
  render() {
  	return (
  	  <div className='grid'>
        <div className='login-form-container'>
          <h2 className='login-title'>Access (Log In)</h2>
          <form className='form' onSubmit={ (e) => { this.login(e) } }>
            <div>
              <input
                placeholder='Your user (email)'
                type='text'
                name='signInEmail'
              />
            </div>
            <div>
              <input
                placeholder='Password'
                type='password'
                name='signInPass'
              />
            </div>
            <button
              className='login-button'
              label="Login"
              type='submit'
            >Log In</button>
          </form>
        </div>
	    </div>
  	);
  }
}

export default LogIn;