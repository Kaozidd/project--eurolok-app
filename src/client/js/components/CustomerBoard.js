import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class Home extends Component {
  render() {
  	return <h2>Home</h2>
  }
}

class View extends Component {
  render() {
  	return <h2>View</h2>
  }
}

class CustomerBoard extends Component {
  render() {
  	return (
  	<Switch>
  	  <Route exact path='/hey' component={Home} />
  	  <Route exact path='/' component ={View} />
  	</Switch>
  	)
  }
}

export default CustomerBoard;

