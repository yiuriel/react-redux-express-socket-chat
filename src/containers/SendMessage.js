// containers should be with connect()(component)

import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

import './SendMessage.css';

import io from 'socket.io-client';

let Message = ({ dispatch, user }) => {
  let input;
  let socket;
  if (process.env.NODE_ENV === 'production') {
    socket = io();
    socket.on('chat message', function (msg) {
      dispatch(addMessage(msg.message, user))
    });
  }

  return (
    <div className="message-send">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

        if (process.env.NODE_ENV === 'production') {
          socket.emit('chat message', addMessage(input.value, user));
        }
        dispatch(addMessage(input.value, user))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} type="text" />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user_name
})

const SendMessage = connect(mapStateToProps, null)(Message)

export default SendMessage