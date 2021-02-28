import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions/decks'
import { setLocalNotification } from '../utils/api'
import DeckInfoCard from './DeckInfoCard'
import { Button } from 'react-native-paper'

const DeckList = ({ dispatch, decks, navigation }) => {
  useEffect(() => {

    setLocalNotification()
    getDecks().then((receivedDecks) => dispatch(receiveDecks(receivedDecks)))
  }, [])

  const goToDetailsHandler = (id) => {
    navigation.push('DeckDetail', {id})
  }

  return (
    <View style={styles.container}> 
      <FlatList
        data={Object.values(decks)}
        renderItem={({ item }) => <DeckInfoCard key={item.id} deck={item} goToDetails={goToDetailsHandler}/>}
      />
      <Button style={{margin:20}} onPress={() => navigation.push('NewDeck')}>Create Deck</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = ({decks, snackbar}) => {
  return {
    decks,
    snack: snackbar
  }
}

export default connect(mapStateToProps)(DeckList)
