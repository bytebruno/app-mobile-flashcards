import { saveDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const addDeck = (deck) => {
  debugger
  return {
    type: ADD_DECK,
    deck,
  }
}

export const handleAddDeck = (deck) => {
  return (dispatch) => {
    return saveDeck({ key: deck.id, deck }).then((savedDeck) =>
      dispatch(addDeck(savedDeck))
    )
  }
}
