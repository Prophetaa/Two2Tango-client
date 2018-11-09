import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messages';

class MessageForm extends PureComponent {
	state = {};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.props.profile.userId);
		this.props.sendMessage(this.state.message, this.props.profile.userId);
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="form-group was-validated  message-form">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							className="form-control"
							id="message"
							rows="4"
							cols="50"
							name="message"
							placeholder="Send along your email address and a nice message so this person can contact you!"
							value={this.state.message || ''}
							onChange={this.handleChange}
							required
						/>
					</div>

					<button type="submit" className="btn btn-success btn-block">
						Send
					</button>
				</form>
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
	{ sendMessage }
)(MessageForm);
