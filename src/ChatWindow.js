import React, { Component } from 'react';
import MessageInput from './MessageInput';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

  	render() {
      return(
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.users[0].username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
		    <MessageInput/>

          </div>
	  )
   }
}

ChatWindow.propTypes = {
	users: PropTypes.array.isRequired,
	messages: PropTypes.array.isRequired
};

export default ChatWindow