import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messages';

class MessageForm extends PureComponent {
	state = {};

	handleSubmit = e => {
		e.preventDefault();
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
			<div className="message-form">
				<form onSubmit={this.handleSubmit}>
					<label>
						Message:
						<textarea
							rows="4"
							cols="50"
							name="message"
							value={this.state.message || ''}
							onChange={this.handleChange}
						/>
					</label>
					<button type="submit">Send</button>
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
