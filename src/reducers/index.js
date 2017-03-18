import { combineReducers } from 'redux'

const messages = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          message: action.message,
          date: action.date,
          id: action.id
        }
      ]
    default:
      return state
  }
}

const chatApp = combineReducers({
  messages
})

export default chatApp
