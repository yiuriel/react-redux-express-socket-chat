import React, { PropTypes } from 'react'
import './Message.css';

const Message = ({ id, date, message, user_name }) => (
  <p className="message-container">
    <span className="user"><strong>{user_name} </strong>{date}</span>
    <span className="message">{message}</span>
  </p>
)

Message.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Message
