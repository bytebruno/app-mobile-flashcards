import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'

const theme = {
  ...DefaultTheme,
  roundness: 0,
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <PaperProvider theme={theme}>
        <LinearGradient
          colors={['#7f7fd5', '#86a8e7', '#91eae4']}
          style={styles.container}
          start={[0.1, 0.1]}
        >
          {/* <NewQuestion /> */}
          {/* <NewDeck /> */}
          {/* <DeckDetail /> */}
          <DeckList />
        </LinearGradient>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
