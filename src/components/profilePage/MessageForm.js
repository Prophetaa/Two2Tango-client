import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messages';
import "../../styling/MessageForm.css";

class MessageForm extends PureComponent {
	state = {};

	handleSubmit = e => {
		e.preventDefault();
		this.props.sendMessage(this.state.message, this.props.profile.userId);
		this.setState({
			message: ''
		});
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className='container-msg'>
			<div className="form-group was-validated message-form">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							className="form-control message"
							id="message"
							rows="4"
							cols="50"
							name="message"
							placeholder="Send along your email address and a nice message so this person can contact you!"
							value={this.state.message || ''}
							onChange={this.handleChange}
							required
						/>
						<button type="submit" className="btn btn-success btn-block send">
					</div>

						Send
					</button>
					</div>
				</form>
			</div>
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
	{ sendMessage }
)(MessageForm);
