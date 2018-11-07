import './styling/App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import ResultsListContainer from './components/resultsPage/ResultsListContainer';

class App extends Component {
	render() {
		return (
			<div className="main">
				<Route exact path="/signup" component={RegistrationPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/results" component={ResultsListContainer} />
			</div>
		);
	}
}

export default App;
