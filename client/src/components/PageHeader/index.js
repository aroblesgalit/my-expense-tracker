import React, { useContext } from 'react'
import {
  PageHeaderContainer,
  PageTitle,
  WelcomeMessage,
  CurrentDate
} from './pageHeader.styles'
import { Grid } from '@material-ui/core'
import UserContext from '../../utils/UserContext'

function PageHeader ({ title }) {
  const { userData } = useContext(UserContext)

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
        <CurrentDate variant='body2'>DayofWeek mm/dd/yyyy</CurrentDate>
        <WelcomeMessage variant='body1'>Hi, {userData.username}</WelcomeMessage>
      </Grid>
    </PageHeaderContainer>
  )
}

export default PageHeader
