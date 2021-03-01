import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Button, TextInput } from 'react-native-paper'
import { connect } from 'react-redux'

import { handleAddDeck } from '../actions/decks'
import { handleShowSuccessSnackBar, handleShowErrorSnackBar } from '../actions/snackbar'

const NewDeck = ({ dispatch, navigation }) => {
  const [title, setTitle] = useState('')

  const createDeckObject = (name) => {
    return {
      id: name.trim().toLowerCase().replace(' ', ''),
      name,
      cards: [],
    }
  }

  const addDeck = () => {
    if (title.length < 2) {
      dispatch(handleShowErrorSnackBar('Please, give a bigger name for your deck...'))
      return null;
    }
    const newDeck = createDeckObject(title)

    dispatch(handleAddDeck(newDeck)).then(
      () => {
        dispatch(handleShowSuccessSnackBar('Deck was created!'))
        navigation.push('DeckDetail', { id: newDeck.id })
        return null
      },
      () => {
        navigation.pop()
        return null
      }
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title style={{ fontSize: 30 }}>{title}</Title>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          label='Title'
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Button icon='check' color='green' mode='contained' onPress={addDeck}>
          Save Deck
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  headerContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  input: {
    marginBottom: 20,
  },
})

export default connect()(NewDeck)
