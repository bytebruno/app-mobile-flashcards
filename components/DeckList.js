import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import DeckInfoCard from './DeckInfoCard'

const DeckList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={[{ key: 'bla' }, { key: 'ble' }, { key: 'bli' }]}
        renderItem={({ item }) => <DeckInfoCard />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  //  padding: 20,
    flex: 1,
  },
})

export default DeckList
