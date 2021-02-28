import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, TextInput, Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/decks'
import { handleShowSuccessSnackBar, handleShowErrorSnackBar } from '../actions/snackbar'

const NewQuestion = ({ dispatch, decks, route, navigation }) => {
  const { id } = route.params

  if (decks[id] === undefined) {
    navigation.popToTop()
    return null
  }

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const addQuestion = () => {
    dispatch(
      handleAddQuestion({ deckId: id, question: { question, answer } })
    ).then(() => {
      dispatch(handleShowSuccessSnackBar('Question was created!'))
      navigation.pop()
      return null
    }, () => {
      dispatch(handleShowErrorSnackBar('Question not created! An error has occurred.'))
    })
  }

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
          onPress={addQuestion}
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

const mapStateToProps = ({ decks, snackbar }) => {
  return {
    decks,
    snackbar,
  }
}

export default connect(mapStateToProps)(NewQuestion)
