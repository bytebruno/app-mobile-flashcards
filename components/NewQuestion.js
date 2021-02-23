import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, TextInput, Button } from 'react-native-paper'

const NewQuestion = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title style={{ fontSize: 26 }}>New Question</Title>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label='Question'
          value={question}
          onChangeText={(text) => setQuestion(text)}
        />
        <TextInput
          label='Answer'
          value={answer}
          onChangeText={(text) => setAnswer(text)}
        />
        <Button
          icon='check'
          color='green'
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          Save Question
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
    justifyContent: 'space-around',
  },
})

export default NewQuestion
