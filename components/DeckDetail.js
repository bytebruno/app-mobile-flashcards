import React, { Fragment, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Button, FAB } from 'react-native-paper'
import { connect } from 'react-redux'

import { handleRemoveDeck } from '../actions/decks'
import { handleShowSuccessSnackBar, handleShowErrorSnackBar } from '../actions/snackbar'
import { numberOfCardsWithLabelText } from '../utils/helpers'
import { setLocalNotification, clearLocalNotification, clearAll } from '../utils/api'

const DeckDetail = ({ route, decks, dispatch, navigation }) => {
  if (decks === undefined) return null

  const { id } = route.params
  const deck = decks[id]

  const removeDeck = (deckId) => {
    dispatch(handleRemoveDeck(deckId)).then(() => {
      dispatch(handleShowSuccessSnackBar('Deck was deleted!'))
      navigation.pop()
      return null
    })
  }

  const startQuiz = (selectedDeck) => {
    if (selectedDeck.cards.length === 0) {
      dispatch(handleShowErrorSnackBar('No cards on this deck...'))
      return null
    } else {
      clearLocalNotification().then(() => {
        setLocalNotification() 
      })
      navigation.push('Quiz', {deck: selectedDeck})
    }
  }

  if (deck === undefined) return null
  const cardsText = numberOfCardsWithLabelText(deck.cards.length)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: deck.name,
    })
  }, [navigation, deck])

  return (
    <Fragment>
      {deck !== undefined ? (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Title style={{ fontSize: 30 }}>{cardsText}</Title>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon='play'
              mode='contained'
              style={styles.button}
              onPress={() => startQuiz(deck)}
            >
              Start Quiz
            </Button>

            <Button
              icon='delete'
              color='red'
              mode='contained'
              style={styles.button}
              onPress={() => removeDeck(deck.id)}
            >
              Delete Deck
            </Button>
          </View>
          <FAB
            style={styles.fab}
            small
            icon='plus'
            color='blue'
            onPress={() => navigation.push('NewQuestion', { id: deck.id })}
          />
        </View>
      ) : (
        <Title style={styles.notFound}>Deck not found =( </Title>
      )}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 20,
  },
  headerContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    marginBottom: 40
  },
  notFound: {
    marginTop: 20,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckDetail)
