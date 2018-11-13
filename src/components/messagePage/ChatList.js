import '../../styling/MessagesPage.css';
import '../../styling/ChatList.css'
import React from 'react';
import { Link } from 'react-router-dom';


export default function messages(props) {
  if (props.chats[0].length < 1 && props.chats[1].length < 1)
    return (
      <div className="NoMessages">
        <h1 className=" header">
          Looks Like you didn't connect with anyone yet..
        </h1>
        <Link className="Links" to="/results">
          <button className="matchButton btn">Start Matching!</button>
        </Link>
      </div>
    );
  return (

    <div className="container messages ">
      <h1 className="text-center">Inbox</h1>
      <ul className="list-unstyled">
        {props.chats[0].map(message => (
          <li
            key={message.id}
            className="media flex-row my-5"
            onClick={() => props.renderMessage(message)}>
            <img
              className="mr-3"
              src="https://mbtskoudsalg.com/images/vector-envelope-silhouette-1.png"
              alt=""
              width="50"
            />
            <div className="media-body message chatNamesContainer">
              {props.currentUser === message.userId
                ? <div> <img alt="" className="chatUserPhoto" src={message.receiverPhoto}/><span className="chatNames text-uppercase">{message.receiver}</span></div>
                : <div> <img alt="" className="chatUserPhoto" src={message.creatorPhoto}/><span className="chatNames text-uppercase">{message.creator}</span></div>}
            </div>
          </li>
        ))}
        {props.chats[1].map(message => (
          <li
            key={message.id}
            className="chatContainer media " 
            onClick={() => props.renderMessage(message)}>
            <div className="media-body message chatNamesContainer">
              {props.currentUser === message.userId
                ? <div> <img alt="" className="chatUserPhoto" src={message.receiverPhoto}/><span className="chatNames text-uppercase">{message.receiver}</span></div>
                : <div> <img alt="" className="chatUserPhoto" src={message.creatorPhoto}/><span className="chatNames text-uppercase">{message.creator}</span></div>}
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}
