import React, { useContext } from 'react'
import {
  PageHeaderContainer,
  PageTitle,
  WelcomeMessage,
  CurrentDate
} from './pageHeader.styles'
import { Grid } from '@material-ui/core'
import UserContext from '../../utils/UserContext'
import ExpenseContext from '../../utils/ExpenseContext'

function PageHeader ({ title }) {
  const { userData } = useContext(UserContext)
  const {
    displayDate: { dayOfWeek, month, day, year }
  } = useContext(ExpenseContext)
  let dayOfWeekStr = ''
  switch (dayOfWeek) {
    case 0:
      dayOfWeekStr = 'Sunday'
      break
    case 1:
      dayOfWeekStr = 'Monday'
      break
    case 2:
      dayOfWeekStr = 'Tuesday'
      break
    case 3:
      dayOfWeekStr = 'Wednesday'
      break
    case 4:
      dayOfWeekStr = 'Thursday'
      break
    case 5:
      dayOfWeekStr = 'Friday'
      break
    default:
      dayOfWeekStr = 'Saturday'
  }
  //   const desktopWidth = useMediaQuery('(min-width:960px)')

  return (
    <PageHeaderContainer container item xs={12}>
      <Grid container item xs={7} alignItems='flex-end'>
        <PageTitle variant='h1'>{title}</PageTitle>
      </Grid>
      <Grid
        container
        item
        xs={5}
        direction='column'
        alignItems='flex-end'
        justify='flex-end'
      >
        <CurrentDate variant='body2'>{`${dayOfWeekStr}, ${month +
          1}/${day}/${year}`}</CurrentDate>
        <WelcomeMessage variant='body1'>Hi, {userData.username}</WelcomeMessage>
      </Grid>
    </PageHeaderContainer>
  )
}

export default PageHeader
