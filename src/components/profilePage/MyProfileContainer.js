import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyProfile from './MyProfile';
import { getMyProfile } from '../../actions/results';
import { Redirect } from 'react-router-dom';

class ProfilePageContainer extends Component {
	componentDidMount() {
		if (this.props.authenticated) {
			this.props.getMyProfile();
		}
	}

	render() {
		if (!this.props.authenticated) return <Redirect to="/login" />;
		if (!this.props.profile) return null;
		return (
			<div>
				<MyProfile profile={this.props.profile} />
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		login: state.login,
		authenticated: state.currentUser !== null,
		currentUser: state.currentUser,
		profile: state.profile
	};
};

export default connect(
	mapStateToProps,
	{ getMyProfile }
)(ProfilePageContainer);
