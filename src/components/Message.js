import React, { PropTypes } from 'react'
import './Message.css';

const Message = ({ id, date, message, user }) => (
  <p className="message-container">
    <span className="user"><strong>{user} </strong>{date}</span>
    <span className="message">{message}</span>
  </p>
)

Message.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Message
