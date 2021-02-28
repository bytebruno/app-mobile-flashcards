import { Card, Subheading } from 'react-native-paper'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'

import { numberOfCardsWithLabelText} from '../utils/helpers'

const DeckInfoCard = ({ deck, goToDetails }) => {
  const cardsText = numberOfCardsWithLabelText(deck.cards.length)

  return <View style={styles.container}>
    <TouchableHighlight onPress={() => goToDetails(deck.id)}>
      <Card>
        <Card.Title title={deck.name}  />
        <Card.Content>
          <Subheading>{cardsText}</Subheading>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
  },
})

export default DeckInfoCard
