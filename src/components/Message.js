import React, { PropTypes } from 'react'
import './Message.css';

const Message = ({ id, date, message }) => (
  <p className="message-container">
    <span className="message">{message}</span>
    <span className="date">{date}</span>
  </p>
)

Message.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Message
