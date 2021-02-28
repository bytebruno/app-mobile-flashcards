import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper'

import {
  handleHideSuccessSnackBar,
  handleHideErrorSnackBar,
} from '../actions/snackbar'

import { connect } from 'react-redux'

const SnackbarComp = ({ dispatch, message, showError, showSuccess }) => {

  const handleSuccessClose = () => {
    dispatch(handleHideSuccessSnackBar())
  }

  const handleErrorClose = () => {
    dispatch(handleHideErrorSnackBar())
  }

  useEffect(() => {
    let successTimeout = null
    let errorTimeout = null

    if (showSuccess) {
      successTimeout = setTimeout(() => {
        dispatch(handleHideSuccessSnackBar())
      }, 3000)
      return () => clearTimeout(successTimeout)
    }

    if (showError) {
      errorTimeout = setTimeout(() => {
        dispatch(handleHideErrorSnackBar())
      }, 3000)
      return () => clearTimeout(errorTimeout)
    }
  })

  return (
    <View style={styles.container}>
      <Snackbar
        visible={showSuccess}
        onDismiss={handleSuccessClose}
        style={{ backgroundColor: 'green' }}
      >
        {message}
      </Snackbar>
      <Snackbar
        style={{ backgroundColor: 'red' }}
        visible={showError}
        onDismiss={handleErrorClose}
      >
        {message}
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
})

const mapStateToProps = ({ snackbar }) => {
  const { showSuccess, showError, message } = snackbar
  return {
    showSuccess,
    showError,
    message,
  }
}

export default connect(mapStateToProps)(SnackbarComp)
