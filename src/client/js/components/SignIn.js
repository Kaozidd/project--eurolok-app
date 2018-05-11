import React, { Component } from 'react';
import request from 'superagent';

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
  	  <div className='grid'>
        <div className='login-form-container'>
          <h2 className='login-title'>Register (Sign In)</h2>
          <form className='form' onSubmit={(e) => { this.createNewUser(e) } }>
            <div>
              <input
                placeholder='Your name'
                name='signInName'
              />
            </div>
            <div>
              <input 
                placeholder='Your email'
                name='signInEmail'
              />
            </div>
            <div>
              <input 
                placeholder='Your Password'
                type='password'
                name='signInPass'
              />
            </div>
            <div>
              <input 
                placeholder='Your Phone Number'
                name='signInPhone'
              />
            </div>
            <button
              className='login-button'
              label="Signin"
              type='submit'
            >Button</button>
          </form>
        </div>
	    </div>
  	);
  }
}

export default SignIn;