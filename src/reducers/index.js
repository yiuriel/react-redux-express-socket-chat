import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

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

const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        "date_created" : action.date_created,
        "id" : action.id,
        "user_name" : action.user_name
      };
    default:
      return state;
  }
}

const chatApp = combineReducers({
  messages,
  user,
  routing
})

export default chatApp
