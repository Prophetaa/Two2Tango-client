import React, { Component } from 'react'
import { connect } from 'react-redux';
import {toUserId} from '../../jwt'

class Messages extends Component {
  render() {
    return (
      <div className="row ">
        {this.props.messages.map(message => (
            <div className="col-12 center-block list-style" key={message.id}>
              <div className={`message ${message.userId === toUserId(this.props.currentUser.jwt) ? 'float-left poster-messages':" receiver-messages float-right"}`}>      
                  <small>
                    <span className="">{message.poster}</span>
                    <span className="">{message.time}</span>
                  </small>
                <div className="messageContent" ><p>{message.content}</p></div>
              </div>
            </div>
          ))}
      </div>
    )
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
)(Messages);

