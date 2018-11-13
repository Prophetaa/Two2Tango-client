import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
      <div>
        <h2 className="text-center">Chat</h2>
        <div className="container">
          {this.props.messages.map(message => (
            <div className="message-candidate center-block">
              <div className="row">
                <div className="col-xs-8 col-md-6">
                  <h4 className="message-name">{message.poster}</h4>
                </div>
                <div className="col-xs-4 col-md-6 text-right message-date">
                  {message.time}
                </div>
              </div>
              <div className="row message-text">{message.content}</div>
            </div>
          ))}
          <div className="messaging center-block fixThis">
            <div className="row">
              <div className="col-md-12">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default"
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
