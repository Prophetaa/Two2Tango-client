import React, { Component } from 'react';
import Messages from './Messages';
import { getAllMessages } from '../../actions/messages';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MessageListContainer extends Component {
	componentDidMount() {
		if (this.props.authenticated) {
			this.props.getAllMessages();
		}
	}

	render() {
		if (!this.props.currentUser) return <Redirect to="/home" />;
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
