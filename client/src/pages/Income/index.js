import React from 'react'
import { PageContainer } from '../pages.styles'
import PageHeader from '../../components/PageHeader'
import { Grid } from '@material-ui/core'

function Income () {
  // const classes = useStyles()

  return (
    <PageContainer
      component='section'
      container
      item
      md={10}
      xs={12}
      alignContent='space-between'
    >
      <Grid container item xs={12}>
        <PageHeader title='Income' />
      </Grid>
    </PageContainer>
  )
}

export default Income
