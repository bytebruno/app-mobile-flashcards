import React, { Fragment, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Title, Subheading, Button } from 'react-native-paper'
import { connect } from 'react-redux'

import { handleRemoveDeck } from '../actions/decks'
import { handleShowSuccessSnackBar } from '../actions/snackbar'
import { numberOfCardsWithLabelText } from '../utils/helpers'

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

  const cardsText = numberOfCardsWithLabelText(deck.cards.length);

  return (
    <Fragment>
      {deck !== undefined ? (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Title style={{ fontSize: 26 }}>{deck.name}</Title>
            <Subheading style={{ fontSize: 20 }}>{cardsText}</Subheading>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon='play'
              mode='contained'
              onPress={() => console.log('Pressed')}
            >
              Start Quiz
            </Button>
            <Button
              icon='plus'
              mode='outlined'
              onPress={() => navigation.push('NewQuestion', { id: deck.id })}
            >
              Add card
            </Button>

            <Button mode='text' color='red' onPress={() => removeDeck(deck.id)}>
              Delete Deck
            </Button>
          </View>
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
    alignItems: 'center',
    margin: 20,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  notFound: {
    marginTop: 20,
    textAlign: 'center',
  },
})

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckDetail)
