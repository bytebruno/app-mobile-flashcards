import { Card, Subheading } from 'react-native-paper'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'

const DeckInfoCard = () => (
  <View style={styles.container}>
    <TouchableNativeFeedback>
      <Card>
        <Card.Title title='Technology' subtitle='Deck' />
        <Card.Content>
          <Subheading>2 cards</Subheading>
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
