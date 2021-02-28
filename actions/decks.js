import { saveDeck, removeDeck, addQuestion } from '../utils/api'
import { handleShowErrorSnackBar } from './snackbar'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export const ADD_QUESTION = 'ADD_QUESTION'


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

export const addQuestionAction = ({deckId, question}) => {
  return {
    type: ADD_QUESTION,
    ...{deckId, question},
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
    return saveDeck({ key: deck.id, deck }).then(() =>
      dispatch(addDeck(deck))
    , (err) => {
      dispatch(handleShowErrorSnackBar(err))
      return Promise.reject()
    })
  }
}

export const handleRemoveDeck = (id) => {
  return (dispatch) => {
    return removeDeck(id).then(() => {
      return dispatch(removeDeckAction(id))
    })
  }
}

export const handleAddQuestion = ({deckId,question}) => {
  return (dispatch) => {
    return addQuestion({deckId,question}).then(() =>
      dispatch(addQuestionAction({deckId, question}))
    )
  }
}



