import { saveDeck, removeDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  }
}

export const removeDeckAction = (id) => {
  return {
    type: DELETE_DECK,
    id,
  }
}

export const handleAddDeck = (deck) => {
  return (dispatch) => {
    return saveDeck({ key: deck.id, deck }).then((savedDeck) =>
      dispatch(addDeck(savedDeck))
    )
  }
}

export const handleRemoveDeck = (id) => {
  return (dispatch) => {
    return removeDeck(id).then(() => {
      return dispatch(removeDeckAction(id))
    })
  }
}
