import {
  ADD_DECK,
  DELETE_DECK,
  RECEIVE_DECKS,
  ADD_QUESTION,
} from '../actions/decks'

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
        [action.deck.id]: action.deck
      }
    case DELETE_DECK:
      const next = { ...state }
      delete next[action.id]
      return next
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [...state[action.deckId].cards, action.question],
        },
      }
    default:
      return state
  }
}

export default decks
