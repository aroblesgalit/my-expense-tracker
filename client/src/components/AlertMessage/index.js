import React from 'react'
import { Alert } from './alertMessage.styles'

function AlertMessage ({ type, message }) {
  return <Alert severity={type}>{message}</Alert>
}

export default AlertMessage
