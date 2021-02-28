import { Card, Subheading } from 'react-native-paper'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'

import { numberOfCardsWithLabelText} from '../utils/helpers'

const DeckInfoCard = ({ deck, goToDetails }) => {
  const cardsText = numberOfCardsWithLabelText(deck.cards.length)

  return <View style={styles.container}>
    <TouchableNativeFeedback onPress={() => goToDetails(deck.id)}>
      <Card>
        <Card.Title title={deck.name}  />
        <Card.Content>
          <Subheading>{cardsText}</Subheading>
        </Card.Content>
      </Card>
    </TouchableNativeFeedback>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
  },
})

export default DeckInfoCard
