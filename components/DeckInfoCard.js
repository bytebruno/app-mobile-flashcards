import { Card, Subheading } from 'react-native-paper'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'

const DeckInfoCard = ({deck, goToDetails}) => (
  <View style={styles.container}>
    <TouchableNativeFeedback onPress={() => goToDetails(deck.id)}>
      <Card>
        <Card.Title title={deck.name} subtitle='Deck' />
        <Card.Content>
          <Subheading>{deck.cards.length} cards</Subheading>
        </Card.Content>
      </Card>
    </TouchableNativeFeedback>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
  },
})

export default DeckInfoCard
