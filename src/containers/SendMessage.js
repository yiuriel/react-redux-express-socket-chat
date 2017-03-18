// containers should be with connect()(component)

import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

import './SendMessage.css';

import io from 'socket.io-client';

let Message = ({ dispatch }) => {
  let input;

  let socket = io();
  socket.on('chat message', function (msg) {
    dispatch(addMessage(msg.message))
  });

  return (
    <div className="message-send">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        socket.emit('chat message', addMessage(input.value));
        dispatch(addMessage(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}

const SendMessage = connect()(Message)

export default SendMessage