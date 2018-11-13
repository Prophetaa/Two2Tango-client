import './styling/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import NavBar from './components/navBar/NavBar';
import ResultsListContainer from './components/resultsPage/ResultsListContainer';
import HomePage from './components/homePage/HomePage';
import ProfilePageContainer from './components/profilePage/ProfilePageContainer';
import MessageListContainer from './components/messagePage/MessageListContainer';
import EditProfileContainer from './components/profilePage/EditProfileContainer';
import LogoutPage from './components/logoutPage/LogoutPage';
import preferencesPage from './components/preferencesPage/preferencesPage';
import MessagesContainer from './components/messagePage/MessagesContainer'


class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="main">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/home" component={HomePage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/logout" component={LogoutPage} />
						<Route exact path="/signup" component={RegistrationPage} />
						<Route exact path="/results" component={ResultsListContainer} />
						<Route
							exact
							path="/profiles/:id"
							component={ProfilePageContainer}
						/>
						<Route exact path="/preferences" component={preferencesPage} />
						<Route exact path="/messages" component={MessageListContainer} />
						<Route exact path="/chat" component={MessagesContainer}/>
						<Route
							exact
							path="/edit-profile"
							component={EditProfileContainer}
						/>
						<Route component={HomePage} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
