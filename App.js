import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'

const theme = {
  ...DefaultTheme,
  roundness: 0,
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <PaperProvider theme={theme}>
            <Stack.Navigator initialRouteName="Decks"> 
              <Stack.Screen name='DeckList' component={DeckList} options={{headerTitle: 'Decks'}} />
              <Stack.Screen name='DeckDetail' component={DeckDetail} options={{headerTitle: 'Deck'}} />
              <Stack.Screen name='NewDeck' component={NewDeck} options={{headerTitle: 'New Deck'}} />
              <Stack.Screen name='NewQuestion' component={NewQuestion} options={{headerTitle: 'New Question'}} />
            </Stack.Navigator>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
