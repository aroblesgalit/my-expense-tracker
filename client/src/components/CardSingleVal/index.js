import React from 'react'
import { CardContainer, CardTitle, CardValue } from './cardSingleVal.styles'

function CardSingleVal ({ name, value }) {
  return (
    <CardContainer elevation={1}>
      <CardTitle variant={'subtitle1'}>{name}</CardTitle>
      <CardValue variant={'body1'} component={'p'}>
        {value}
      </CardValue>
    </CardContainer>
  )
}

export default CardSingleVal
