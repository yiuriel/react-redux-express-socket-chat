// containers should be with connect()(component)

import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'
import { browserHistory } from 'react-router'

import './CreateUser.css';

let User = ({ dispatch }) => {
  let input;

  return (
    <div className="user-create">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addUser(input.value))
        input.value = ''
        browserHistory.push('/chat');
      }}>
        <div className="form-group">
            <input type="text" ref={(node) => {input = node}} className="form-control" id="user_name" placeholder="nombre de usuario" />
        </div>
        <button type="submit" className="btn btn-default">Entrar al chat</button>
      </form>
    </div>
  )
}

const CreateUser = connect()(User)

export default CreateUser