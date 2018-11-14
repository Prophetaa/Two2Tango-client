import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/users';
import LoginForm from './LoginForm';

class LoginPage extends Component {
	handleSubmit = data => {
		this.props.login(data.email, data.password);
	};

	render() {
		if (this.props.currentUser) return <Redirect to="/results" />;
		return (
			<div>
				<LoginForm onSubmit={this.handleSubmit} error={this.props.error} />
			</div>
		);
	}
}
const mapStateToProps = function(state) {
	return {
		error: state.login.error,
		currentUser: state.currentUser
	};
};

export default connect(
	mapStateToProps,
	{ login }
)(LoginPage);
