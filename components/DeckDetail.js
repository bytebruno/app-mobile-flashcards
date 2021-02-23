import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Title, Subheading, Button } from 'react-native-paper'

const DeckDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title style={{fontSize:26}}>Technology</Title>
        <Subheading style={{fontSize:20}}>3 cards</Subheading>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon='play'
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          Start Quiz
        </Button>
        <Button
          icon='plus'
          mode='outlined'
          onPress={() => console.log('Pressed')}
        >
          Add card
        </Button>

        <Button
          mode='text'
          color='red'
          onPress={() => console.log('Pressed')}
        >
          Delete Deck
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
})

export default DeckDetail
