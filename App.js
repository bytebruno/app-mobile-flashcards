import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StyleSheet } from 'react-native'

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'

import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SnackbarComp from './components/SnackbarComp'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'

enableScreens()

const theme = {
  ...DefaultTheme,
  roundness: 0,
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName='DeckList'>
            <Stack.Screen
              name='DeckList'
              component={DeckList}
              options={{ headerTitle: 'Decks' }}
            />
            <Stack.Screen
              name='DeckDetail'
              component={DeckDetail}
              options={{ headerTitle: 'Deck' }}
            />
            <Stack.Screen
              name='NewDeck'
              component={NewDeck}
              options={{ headerTitle: 'New Deck' }}
            />
            <Stack.Screen
              name='NewQuestion'
              component={NewQuestion}
              options={{ headerTitle: 'New Question' }}
            />
            <Stack.Screen
              name='Quiz'
              component={Quiz}
              options={{ headerTitle: 'Quiz' }}
            />
          </Stack.Navigator>
          <SnackbarComp />
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
