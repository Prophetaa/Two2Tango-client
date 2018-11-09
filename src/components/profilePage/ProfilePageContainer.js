import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getOneProfile } from '../../actions/results';

class ProfilePageContainer extends Component {
	componentDidMount() {
		this.props.getOneProfile(this.props.match.params.id);
	}
	render() {
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
		currentUser: state.currentUser,
		profile: state.profile
	};
};
export default connect(
	mapStateToProps,
	{ getOneProfile }
)(ProfilePageContainer);
