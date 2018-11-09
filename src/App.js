import './styling/App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import NavBar from './components/navBar/NavBar';
import ResultsListContainer from './components/resultsPage/ResultsListContainer';
import homePage from './components/homePage/HomePage';
import ProfilePageContainer from './components/profilePage/ProfilePageContainer'

class App extends Component {
	render() {
		return (
			<div>
          <nav>
            <NavBar />
          </nav>
			<div className="main">
				<Route exact path="/home" component={homePage} />
				<Route exact path="/signup" component={RegistrationPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/results" component={ResultsListContainer} />
				<Route exact path="/profile/" component={ProfilePageContainer} />
			</div>
			</div>
		);
	}
}

export default App;

