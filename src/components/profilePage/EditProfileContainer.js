import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import * as request from 'superagent';
import { updateProfile, getMyProfile } from '../../actions/results';
import { updateParameters, deleteAccount } from '../../actions/users';
import {
	CLOUDINARY_UPLOAD_PRESET,
	CLOUDINARY_UPLOAD_URL
} from '../../constants';
import Dropzone from 'react-dropzone';
import { Redirect } from 'react-router-dom';

class EditProfileContainer extends Component {
	state = {};

	componentDidMount() {
		if (!this.props.profile) this.props.getMyProfile();
	}

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

	onImageDrop(files) {
		this.setState({
			uploadedFile: files[0]
		});
		this.handleImageUpload(files[0]);
	}

	handleImageUpload(file) {
		let upload = request
			.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
				this.setState({
					photoUrl: response.body.secure_url
				});
			}
		});
	}

	myStyle = input => {
		if (input === 'old') {
			const mystyle = {
				backgroundImage: `url(${this.props.profile.photoUrl})`,
				backgroundSize: '150%'
			};
			return mystyle;
		} else if (input === 'new') {
			const mystyle = {
				backgroundImage: `url(${this.state.photoUrl})`,
				backgroundSize: '150%'
			};
			return mystyle;
		}
	};

	dropzoneStyle = () => {
		if (this.state.photoURL)
			return `background-image=url(${
				this.state.photoURL
			}); background-size:100%;`;
	};

	renderDropZone() {
		return (
			<Dropzone
				className={'dropZone'}
				style={this.state.photoUrl ? this.myStyle('new') : this.myStyle('old')}
				onDrop={this.onImageDrop.bind(this)}
				multiple={false}
				data-toggle="tooltip"
				title="add a picture"
				accept="image/*"
			/>
		);
	}

	render() {
		if (!this.props.currentUser) return <Redirect to="/" />;
		if (!this.props.profile) return null;
		return (
			<div>
				<EditProfileForm
					dropZone={this.renderDropZone()}
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
					onImageDrop={this.onImageDrop}
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
	{ updateProfile, updateParameters, deleteAccount, getMyProfile }
)(EditProfileContainer);
