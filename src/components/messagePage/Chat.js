import React from 'react';
import '../../styling/MessagesPage.css';

export default function messages(props) {
  return (
    <div className="container messages">
      <h1 className="text-center">Inbox</h1>
      {props.chats[0].length < 1 && (
        <h2>You have no messages yet, start a conversation with someone!</h2>
      )}
      <ul className="list-unstyled">
        {props.chats[0].map(message => (
          <li
            key={message.id}
            className="media"
            onClick={() => props.renderMessage(message)}>
            <img
              className="mr-3"
              src="https://mbtskoudsalg.com/images/vector-envelope-silhouette-1.png"
              alt=""
              width="50"
            />
            <div className="media-body message">
              {props.currentUser === message.userId
                ? message.receiver
                : message.creator}
            </div>
          </li>
        ))}
        {props.chats[1].map(message => (
          <li
            key={message.id}
            className="media"
            onClick={() => props.renderMessage(message)}>
            <img
              className="mr-3"
              src="https://mbtskoudsalg.com/images/vector-envelope-silhouette-1.png"
              alt=""
              width="50"
            />
            <div className="media-body message">
              {props.currentUser === message.userId
                ? message.receiver
                : message.creator}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
