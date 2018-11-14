import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../styling/MessagesContainer.css';

import {
  postMessage,
  resetMessages,
  resetChatId,
  postLastMessage
} from '../../actions/messages';
import Messages from './Messages';

class MessagesContainer extends Component {
  state = { message: null };

  componentDidMount(){
      window.scrollTo(0, 111111);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSubmit = async chatId => {
    if (!this.state.message) return null;
    await this.props.postLastMessage(this.state.message, chatId)
     this.props.postMessage(this.state.message, chatId);
  };

  componentDidUpdate(){
    window.scrollTo(0,1313123123123123)
  }

  componentWillUnmount() {
    this.props.resetMessages();
    this.props.resetChatId();
  }

  componentDidCatch(){
    console.log("what")
  }
  
  render() {
    if (!this.props.messages) return <Redirect to="/messages" />;
    return (
      <div className="container">
        <h2 className="text-center">Chat</h2>
        <div className="container chat-box">
          <div className="container chat-messages-box">
            <Messages />
          </div>
          <div className="center-block fixed-bottom">
            <div className="container-fluid txtAreaBgrnd">
              <div className="row-12">
                <div className="col-xs-12">
                  <div className="input-group container">
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        this.handleSubmit(this.props.chatId);
                        e.target.children[0].value = ''
                      }}>
                      <input
                        type="text"
                        name="message"
                        id="chat"
                        onChange={this.handleChange}
                        className="form-control"
                        defaultValue=""
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-outline-light btn-send"
                          type="submit">
                          Send
                        </button>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
    chatId: state.chatId
  };
};
export default connect(
  mapStateToProps,
  { postMessage, resetMessages, resetChatId, postLastMessage }
)(MessagesContainer);
