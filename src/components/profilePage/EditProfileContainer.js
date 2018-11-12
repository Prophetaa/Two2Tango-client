import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/results';
import { updateParameters, deleteAccount } from '../../actions/users';

class EditProfileContainer extends Component {
	state = {};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleProfileSubmit = e => {
		e.preventDefault();
		this.props.updateProfile(this.state);
		this.props.history.push(`/results`);
	};

	handleParametersSubmit = e => {
		e.preventDefault();
		this.props.updateParameters(this.state.password);
		this.props.history.push(`/results`);
	};

	deleteAccount = e => {
		this.props.deleteAccount();
		this.props.history.push(`/logout`);
	};

	render() {
		return (
			<div>
				<EditProfileForm
					profile={this.props.profile}
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					city={this.state.city}
					role={this.state.role}
					level={this.state.level}
					height={this.state.height}
					age={this.state.age}
					gender={this.state.gender}
					about={this.state.about}
					email={this.state.email}
					password={this.state.password}
					onProfileSubmit={this.handleProfileSubmit}
					onParametersSubmit={this.handleParametersSubmit}
					onChange={this.handleChange}
					deleteAccount={this.deleteAccount}
				/>
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		currentUser: state.currentUser,
		profile: state.profile
	};
};

export default connect(
	mapStateToProps,
	{ updateProfile, updateParameters, deleteAccount }
)(EditProfileContainer);
