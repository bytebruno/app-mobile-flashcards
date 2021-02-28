import React, { Fragment } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'

const QuizCard = ({ info }) => {

  if (info === undefined) return null

  let animValue = 0

  const flipCard = () => {
    if (animValue >= 90) {
        Animated.spring(animatedValue, {
            toValue: 0,
            friction: 8,
            tension: 10,
            useNativeDriver: true
        }).start()

    } else {
        Animated.spring(animatedValue, {
            toValue: 180,
            friction: 8,
            tension: 10,
            useNativeDriver: true,
          }).start()
    }
  }

  const animatedValue = new Animated.Value(0)

  animatedValue.addListener(({ value }) => {
    animValue = value
  })

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  })
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  }
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  }

  return (
    <View style={styles.container}>
      <Fragment>
        <AnimatedCard
          cardStyles={[styles.flipCard, frontAnimatedStyle]}
          cardText={info.question}
          handleFlipCard={flipCard}
        />

        <AnimatedCard
          cardStyles={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
          cardText={info.answer}
          handleFlipCard={flipCard}
        />
      </Fragment>
    </View>
  )
}

const AnimatedCard = ({ cardStyles, cardText, handleFlipCard }) => {
  return (
    <Animated.View style={cardStyles} key={cardText}>
      <TouchableHighlight onPress={() => handleFlipCard()}>
        <Card style={styles.card}>
          <Card.Content>
            <Card.Title title={cardText} />
          </Card.Content>
        </Card>
      </TouchableHighlight>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 20,
  },
  card: {
    height: 150,
    justifyContent: 'center',
  },
  flipCard: {
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    width: '100%',
  },
})



export default QuizCard
