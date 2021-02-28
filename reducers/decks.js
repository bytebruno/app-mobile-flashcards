import { ADD_DECK, DELETE_DECK, RECEIVE_DECKS } from '../actions/decks'

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case DELETE_DECK:
      const next = {...state}
      delete next[action.id]
      return next
    default:
      return state
  }
}

export default decks
