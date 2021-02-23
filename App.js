import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'



const theme = {
  ...DefaultTheme,
  roundness: 0,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LinearGradient
        colors={['#7f7fd5', '#86a8e7', '#91eae4']}
        style={styles.container}
        start={[0.1, 0.1]}
      >
        
        <NewDeck />
        {/* <DeckDetail /> */}
        {/* <DeckList /> */}
      </LinearGradient>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
