import { combineReducers } from 'redux'
import decks from './decks'
import snackbar from './snackbar'

export default combineReducers({
  decks,
  snackbar,
})
