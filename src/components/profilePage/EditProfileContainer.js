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
		this.props.updateProfile(this.state);
		this.props.history.push(`/results`);
	};

	render() {
		return (
			<div>
				<EditProfileForm
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
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
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
	{ updateProfile }
)(EditProfileContainer);
