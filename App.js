import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DeckList from './components/DeckList'



const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LinearGradient
        colors={['#7f7fd5', '#86a8e7', '#91eae4']}
        style={styles.container}
        start={[0.1, 0.1]}
      >
        <DeckList />
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
