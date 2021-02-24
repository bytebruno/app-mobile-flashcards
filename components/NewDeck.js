import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Button, TextInput } from 'react-native-paper'
import {connect} from 'react-redux'

import {handleAddDeck} from '../actions'
import { getDecks} from '../utils/api'

const NewDeck = ({dispatch}) => {
  const [title, setTitle] = useState('New Title')

  const createDeckObject = (name) => {
    return {
        id: name.trim().toLowerCase().replace(' ',''),
        name,
        cards:[]
    }
}

  const addDeck = () => {
    dispatch(handleAddDeck(createDeckObject(title))).then((dispatch) => getDecks().then((receivedDecks) => dispatch(receiveDecks(receivedDecks))))
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title style={{ fontSize: 26 }}>{title}</Title>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label='Title'
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Button
          icon='check'
          color='green'
          mode='contained'
          onPress={addDeck}
        >
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      flex: 2,
      justifyContent:'space-around'
 
    },
  })

export default connect()(NewDeck)
