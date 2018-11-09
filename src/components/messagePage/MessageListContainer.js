import React, { Component } from 'react';
import Messages from './Messages';
import { getAllMessages } from '../../actions/messages';
import { connect } from 'react-redux';

class MessageListContainer extends Component {
	componentDidMount() {
		this.props.getAllMessages();
	}

	render() {
		if (!this.props.messages) return null;
		return (
			<div>
				<Messages messages={this.props.messages} />
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		currentUser: state.currentUser,
		profile: state.profile,
		messages: state.messages
	};
};
export default connect(
	mapStateToProps,
	{ getAllMessages }
)(MessageListContainer);
