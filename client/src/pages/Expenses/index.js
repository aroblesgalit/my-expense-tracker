import React from 'react'
import { useStyles, PageContainer } from '../pages.styles'
import { TableTopContent } from './expenses.styles'
import { SelectInput } from '../../components/Input'
import Table from '../../components/Table'
import Button from '../../components/Button'
import { ExpenseConsumer } from '../../utils/ExpenseContext'
import PageHeader from '../../components/PageHeader'
import { Grid } from '@material-ui/core'

function Expenses () {
  const classes = useStyles()

  // const desktopWidth = useMediaQuery('(min-width:960px)');

  return (
    <ExpenseConsumer>
      {value => {
        const {
          activeFilter,
          onFilterChange,
          filteredExpenses,
          setNewExpense,
          setOpenAlertDialog
        } = value
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
              <PageHeader title='Expenses' />
              <TableTopContent
                container
                item
                xs={12}
                alignItems='flex-end'
                className={classes.padTop32}
              >
                <Grid item xs={4}>
                  <SelectInput
                    label='Filter'
                    name='filter'
                    options={['All', 'Daily', 'Monthly', 'Yearly']}
                    value={activeFilter}
                    onChange={onFilterChange}
                  />
                </Grid>
                <Grid container item xs={8} justify='flex-end'>
                  <Button
                    type='button'
                    text='New'
                    action='primary'
                    color='magenta'
                    onClick={() => setNewExpense(true)}
                  />
                </Grid>
              </TableTopContent>
              <Grid
                item
                xs={12}
                className={`${classes.padX32} ${classes.padBot32}`}
              >
                <Table
                  headings={['Date', 'Category', 'Description', 'Amount', '']}
                  rows={filteredExpenses}
                  setOpenAlertDialog={setOpenAlertDialog}
                />
              </Grid>
            </Grid>
          </PageContainer>
        )
      }}
    </ExpenseConsumer>
  )
}

export default Expenses
