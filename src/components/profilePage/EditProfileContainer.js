import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/results';

class EditProfileContainer extends Component {
	state = {};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.updateProfile();
		e.target.reset();
	};

	render() {
		return (
			<div>
				<EditProfileForm />
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
	{ updateProfile }
)(EditProfileContainer);
