import '../../styling/MessagesPage.css';
import '../../styling/ChatList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import email from '../../styling/images/EMAIL.svg';

export default function messages(props) {
  if (props.chats[0].length < 1 && props.chats[1].length < 1)
    return (
      <div className="container">
        <div className="col-sm-12">
          <div className="row">
            <h1 className="header NoMessages">
              Looks Like you didn't connect with anyone yet..
            </h1>
          </div>
          <div className="row">
            <Link className="Links" to="/results">
              <button className="btn btn btn-primary btn-lg NoMessagesBtn">
                Start Matching!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  return (
    <div className="messages">
      <div className="container">
        <h1 className="text-center">
          <img
            className="mr-3"
            src={email}
            alt="email"
            //  width="50"
          />
          Inbox
        </h1>
      </div>
      <ul className="list-unstyled list-style">
        {props.chats[0].map(message => (
          <div className="row" key={message.id}>
            <li
              key={message.id}
              className="chatContainer media"
              onClick={() => props.renderMessage(message)}>
              <div className="media-body message chatNamesContainer container">
                {props.currentUser === message.userId ? (
                  <div>
                    {' '}
                    <img
                      alt={message.id}
                      className="chatUserPhoto rounded-circle"
                      src={message.receiverPhoto}
                    />
                    <span className="chatNames text-uppercase">
                      {message.receiver}
                    </span>
                    <p className=""> 
                    {message.lastMessage}
                    </p>
                  </div>
                ) : (
                  <div>
                    {' '}
                    <img
                      alt={message.id}
                      className="chatUserPhoto rounded-circle"
                      src={message.creatorPhoto}
                    />
                    <span className="chatNames text-uppercase">
                      {message.creator}
                    </span>
                    <p className=""> 
                    {message.lastMessage}
                    </p>
                  </div>
                )}
              </div>
            </li>
          </div>
        ))}
        {props.chats[1].map(message => (
          <div className="row" key={message.id}>
            <li
              key={message.id}
              className="chatContainer media"
              onClick={() => props.renderMessage(message)}>
              <div className="media-body message chatNamesContainer container">
                {props.currentUser === message.userId ? (
                  <div>
                    {' '}
                    <img
                      alt=""
                      className="chatUserPhoto rounded-circle"
                      src={message.receiverPhoto}
                    />
                    <span className="chatNames text-uppercase">
                      {message.receiver}
                    </span>
                  </div>
                ) : (
                  <div>
                    {' '}
                    <img
                      alt=""
                      className="chatUserPhoto rounded-circle"
                      src={message.creatorPhoto}
                    />
                    <span className="chatNames text-uppercase">
                      {message.creator}
                    </span>
                  </div>
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
