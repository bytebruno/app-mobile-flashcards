import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

import { getDecks, saveDeck } from '../utils/api'
import { receiveDecks } from '../actions'

import DeckInfoCard from './DeckInfoCard'

const DeckList = ({ dispatch, decks }) => {
  useEffect(() => {
    getDecks().then((receivedDecks) => dispatch(receiveDecks(receivedDecks)))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(decks)}
        renderItem={({ item }) => <DeckInfoCard key={item.id} deck={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (decks) => {
  console.log(decks)
  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckList)
