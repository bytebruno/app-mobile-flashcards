import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DeckList from './components/DeckList'

export default function App() {
  return (
    <LinearGradient
      colors={['#7f7fd5', '#86a8e7', '#91eae4']}
      style={styles.container}
      start={[0.1, 0.1]}
    >
      <DeckList />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
