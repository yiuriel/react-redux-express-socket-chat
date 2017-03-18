import React, { PropTypes } from 'react'

const Message = ({ id, date, message }) => (
  <li>
    {date} : {message}
  </li>
)

Message.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Message
