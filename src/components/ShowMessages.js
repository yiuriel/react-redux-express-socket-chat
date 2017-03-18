import React, { PropTypes } from 'react'
import Message from './Message'

import './ShowMessages.css'

const Messages = ({ messages }) => (
  <ul className="messages-view">
    {messages.map(message =>
      <Message
        key={message.id}
        {...message}
      />
    )}
  </ul>
)

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired)
}

export default Messages
