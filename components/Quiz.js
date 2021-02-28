import React, { Fragment, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Button } from 'react-native-paper'
import QuizCard from './QuizCard'

const Quiz = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)

  const { deck } = route.params

  useEffect(() => {
    if (currentQuestionIndex < deck.cards.length) {
      navigation.setOptions({
        headerTitle: `Quiz - ${currentQuestionIndex + 1} / ${
          deck.cards.length
        }`,
      })
    } else {
      navigation.setOptions({
        headerTitle: `Quiz - Result`,
      })
    }
  }, [currentQuestionIndex, navigation, deck])

  const finalResult = Math.round((correctAnswersCount * 100) / deck.cards.length)

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setCorrectAnswersCount(correctAnswersCount + 1)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const restartQuiz = () => {
      setCurrentQuestionIndex(0)
      setCorrectAnswersCount(0)
  }

  if (currentQuestionIndex < deck.cards.length) {
    return (
      <Fragment>
        <QuizCard info={deck.cards[currentQuestionIndex]} />
        <View style={styles.buttonContainer}>
          <Button
            icon='check'
            color='green'
            mode='contained'
            style={styles.button}
            onPress={() => handleAnswer(true)}
          >
            Correct
          </Button>

          <Button
            icon='alert'
            color='red'
            mode='contained'
            style={styles.button}
            onPress={() => handleAnswer(false)}
          >
            Incorrect
          </Button>
        </View>
      </Fragment>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title style={[{ fontSize: 30 }, styles.result]}>
          You got {finalResult}% of the answers right!
        </Title>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon='play'
          mode='contained'
          style={styles.button}
          onPress={restartQuiz}
        >
          Restart Quiz
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 20,
  },
  headerContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  result: {
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 20,
  },
  button: {
    marginBottom: 40,
  },
})

export default Quiz
