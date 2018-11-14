import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../styling/MessagesContainer.css'

import { postMessage, resetMessages, resetChatId } from '../../actions/messages';

class MessagesContainer extends Component {
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async chatId => {
    console.log(chatId);
    await this.props.postMessage(this.state.message, chatId);
  };

  componentWillUnmount(){
    this.props.resetMessages()
    this.props.resetChatId()
  }

  render() {
    if (!this.props.messages) return <Redirect to="/messages" />;
    return (
      <div className="container">
        <h2 className="text-center">Chat</h2>
        <div className="container">
          {this.props.messages.map(message => (
            <div className="center-block" key={message.id}>
              <div className="row">
                <div className="col-xs-1 col-md-3 ">
                  {/* <h4 className="message-name">{message.poster}</h4> */}
                  <h6><small>{message.poster},{message.time}</small></h6>
                </div>
                {/* <div className="col-xs-4 col-md-6 text-right message-date">
                  {message.time}
                </div> */}
              </div>
              <div className="row message-text poster-messages container">{message.content}</div>
            </div>
          ))}

          <div className="messaging center-block fixThis">
          <div className="row-12">
            <div className="col-xs-12">
              <div className="input-group">
                <input
                  type="text"
                  name="message"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-outline-light btn-send"
                    type="button"
                    onClick={() =>
                      this.handleSubmit(this.props.chatId)
                    }>
                    Send
                  </button>
                </span>
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
  { postMessage, resetMessages, resetChatId }
)(MessagesContainer);
