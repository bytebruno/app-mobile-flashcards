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
    if (question.length < 2 || answer.length < 2) {
      dispatch(handleShowErrorSnackBar('Please, fill the question and answer inputs...'))
      return null;
    }

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
        <Title style={{ fontSize: 30 }}>New Question</Title>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          label='Question'
          value={question}
          onChangeText={(text) => setQuestion(text)}
        />
        <TextInput
          style={styles.input}
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
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop: 20
  },
  formContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  input: {
    marginBottom: 20
  }
})

const mapStateToProps = ({ decks, snackbar }) => {
  return {
    decks,
    snackbar,
  }
}

export default connect(mapStateToProps)(NewQuestion)
