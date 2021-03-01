import AsyncStorage from '@react-native-community/async-storage'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export const saveDeck = ({ deck, key }) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)

    if (data !== null && data[key] !== undefined) {
      return Promise.reject('Deck already exists')
    } else {
      return AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({ [key]: deck })
      )
    }
  })
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

export const addQuestion = ({ deckId, question }) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    data[deckId].cards.push(question)
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}

export const clearAll = () => {
  return AsyncStorage.clear()
}

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  )
}

export const createNotification = () => {
  return {
    title: `Quiz remember!`,
    body: `Don't forget to take your Quiz today!`,
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  }
}
export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            const trigger = new Date()
            trigger.setDate(trigger.getDate() + 1)
            trigger.setHours(21)
            trigger.setMinutes(0)

            Notifications.scheduleNotificationAsync({
              content: createNotification(),
              trigger
            })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
