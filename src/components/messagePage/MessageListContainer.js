import React, { Component } from 'react';
import Chats from './Chat';
import { getAllChats, renderMessageContainer } from '../../actions/messages';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toUserId } from '../../jwt';


class MessageListContainer extends Component {
	state={}

	componentDidMount() {
		if (this.props.authenticated) {
			this.props.getAllChats();
		}
	}

	renderMessage = (message) =>{
		console.log(message)
		this.props.renderMessageContainer(message.id)
	}

	render() {
		if (!this.props.currentUser) return <Redirect to="/home" />;
		if (!this.props.chats) return null;
		return (
			<div>
				{!this.props.messages ?
				<Chats currentUser={toUserId(this.props.currentUser.jwt)}chats={this.props.chats} renderMessage={this.renderMessage}/>  :
				<Redirect to="/chat"/> 
				}
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		authenticated: state.currentUser !== null,
		currentUser: state.currentUser,
		profile: state.profile,
		chats: state.chats,
		messages: state.messages
	};
};
export default connect(
	mapStateToProps,
	{ getAllChats,
	renderMessageContainer,
	postMessage}
)(MessageListContainer);
