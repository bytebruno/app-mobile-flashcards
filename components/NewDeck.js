import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Title, Subheading, Button, TextInput } from 'react-native-paper'

const NewDeck = () => {
  const [title, setTitle] = useState('New Title')

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title style={{ fontSize: 26 }}>{title}</Title>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label='Title'
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Button
          icon='check'
          color='green'
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          Save Deck
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      margin: 20,
    },
    headerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      flex: 2,
      justifyContent:'space-around'
 
    },
  })

export default NewDeck
