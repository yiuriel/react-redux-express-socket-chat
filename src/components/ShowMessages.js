import React, { PropTypes } from 'react'
import Message from './Message'

import './ShowMessages.css'

const Messages = ({ messages }) => {
  let container;
  return (
    <div className="messages-view" ref={(node) => {
      if (node) {
        container = node;
      }
      container.scrollTop = container.scrollHeight;
      }}>
      {messages.map(message =>
        <Message
          key={message.id}
          {...message}
        />
      )}
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired)
}

export default Messages
