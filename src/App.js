import './styling/App.css';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import NavBar from './components/navBar/NavBar';
import { toUserId } from './jwt';
import { connect } from 'react-redux';
import ResultsListContainer from './components/resultsPage/ResultsListContainer';
import homePage from './components/homePage/HomePage';
import ProfilePageContainer from './components/profilePage/ProfilePageContainer';
import MessageListContainer from './components/messagePage/MessageListContainer';
import EditProfileContainer from './components/profilePage/EditProfileContainer';
import LogoutPage from './components/logout/LogoutPage';

class App extends Component {
	render() {
		return (
			<div>
				<nav>
					<NavBar />
				</nav>
				<div className="main">
					<Route exact path="/" render={() => <Redirect to="/results" />} />
					<Route exact path="/home" component={homePage} />
					<Route exact path="/signup" component={RegistrationPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/logout" component={LogoutPage} />
					<Route exact path="/results" component={ResultsListContainer} />
					{this.props.currentUser && (
						<Route
							exact
							path="/my-profile"
							render={props => (
								<ProfilePageContainer
									{...props}
									userId={toUserId(this.props.currentUser.jwt)}
								/>
							)}
						/>
					)}
					<Route exact path="/profiles/:id" component={ProfilePageContainer} />
					<Route exact path="/messages" component={MessageListContainer} />
					<Route exact path="/edit-profile" component={EditProfileContainer} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = function(state) {
	return {
		currentUser: state.currentUser
	};
};

export default connect(mapStateToProps)(App);
