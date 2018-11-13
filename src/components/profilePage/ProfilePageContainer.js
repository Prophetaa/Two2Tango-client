import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getOneProfile, getMyProfile } from '../../actions/results';
import { Redirect } from 'react-router-dom';

class ProfilePageContainer extends Component {
	state = {};

	componentDidMount() {
		if (this.props.authenticated) {
			if (this.props.match.params.id === 'my-profile')
				this.props.getMyProfile();
			else this.props.getOneProfile(this.props.match.params.id);
		}
	}

	render() {
		if (!this.props.authenticated) return <Redirect to="/login" />;
		if (!this.props.profile) return null;
		return (
			<div>
				<ProfilePage
					profile={this.props.profile}
					currentUser={this.props.currentUser}
				/>
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
	{ getOneProfile, getMyProfile }
)(ProfilePageContainer);
