import React from 'react'
import { PageContainer, SectionHeading } from '../pages.styles'
import {
  useStyles,
  TableTopContent,
  TotalsContainer,
  CardsWrapper
} from './expenses.styles'
import Input, { SelectInput } from '../../components/Input'
import Table from '../../components/Table'
import Button from '../../components/Button'
import CardSingleVal from '../../components/CardSingleVal'
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
          deleteExpense,
          setNewExpense,
          totalToday,
          totalWeek,
          totalMonth,
          totalYear
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
                justify='space-between'
                alignItems='flex-end'
              >
                <SelectInput
                  label='Filter'
                  name='filter'
                  options={['All', 'Daily', 'Monthly', 'Yearly']}
                  value={activeFilter}
                  onChange={onFilterChange}
                />
                <Button
                  type='button'
                  text='New'
                  action='primary'
                  color='magenta'
                  onClick={() => setNewExpense(true)}
                />
              </TableTopContent>
              <Grid item xs={12} className={classes.mobilePadding}>
                <Table
                  headings={['Date', 'Category', 'Description', 'Amount', '']}
                  rows={filteredExpenses}
                  handleDelete={deleteExpense}
                />
              </Grid>
            </Grid>
            <TotalsContainer container item xs={12}>
              <Grid item xs={12}>
                <SectionHeading variant={'h3'}>Totals</SectionHeading>
              </Grid>
              <CardsWrapper container item xs={12}>
                <CardSingleVal
                  name='Today'
                  value={`$${totalToday.toFixed(2)}`}
                />
                <CardSingleVal
                  name='This week'
                  value={`$${totalWeek.toFixed(2)}`}
                />
                <CardSingleVal
                  name='This month'
                  value={`$${totalMonth.toFixed(2)}`}
                />
                <CardSingleVal
                  name='This year'
                  value={`$${totalYear.toFixed(2)}`}
                />
              </CardsWrapper>
            </TotalsContainer>
          </PageContainer>
        )
      }}
    </ExpenseConsumer>
  )
}

export default Expenses
