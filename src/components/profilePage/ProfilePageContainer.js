import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getOneProfile, getMyProfile } from '../../actions/results';
import { createChat } from '../../actions/messages'
import { Redirect } from 'react-router-dom';

class ProfilePageContainer extends Component {
	state = {};

	componentDidMount() {
		if (this.props.authenticated) {
			this.props.getOneProfile(this.props.match.params.id);
		}
	}
	
	handleMatch = async(userId) =>{
		await this.props.createChat(userId)
	}

	render() {
		if (!this.props.authenticated) return <Redirect to="/login" />;
		if (!this.props.profile) return null;
		return (
			<div>
				<ProfilePage
					profile={this.props.profile}
					currentUser={this.props.currentUser}
					matchUser={this.handleMatch}
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
	{ getOneProfile, getMyProfile, createChat }
)(ProfilePageContainer);
