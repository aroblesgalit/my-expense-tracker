import React from 'react'
import { Alert } from '@material-ui/core'

function AlertMessage ({ type, message }) {
  return <Alert serverity={type}>{message}</Alert>
}

export default AlertMessage
