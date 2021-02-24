import AsyncStorage from '@react-native-community/async-storage'

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export const saveDeck = ({ deck, key }) => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({ [key]: deck })
  )
}

export const removeDeck = (key) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}

export const getDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((res) => JSON.parse(res))
}

export const clearAll = () => {
    return AsyncStorage.clear();
}