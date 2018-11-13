import React, { Component } from 'react';
import ChatList from './ChatList';
import {
  getAllChats,
  renderMessageContainer,
  setChatId
} from '../../actions/messages';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toUserId } from '../../jwt';

class MessageListContainer extends Component {
  state = {};

  componentDidMount() {
    if (this.props.authenticated) {
      this.props.getAllChats();
    }
  }

  renderMessage = async message => {
    console.log(message);
    await this.props.renderMessageContainer(message.id);
    await this.props.setChatId(message.id);
  };

  render() {
    if (!this.props.currentUser) return <Redirect to="/home" />;
    if (!this.props.chats) return null;
    return (
      <div>
        {!this.props.messages ? (
          <ChatList
            currentUser={toUserId(this.props.currentUser.jwt)}
            chats={this.props.chats}
            renderMessage={this.renderMessage}
          />
        ) : (
          <Redirect to="/chat" />
        )}
      </div>
    );
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
  { getAllChats, renderMessageContainer, postMessage, setChatId }
)(MessageListContainer);
