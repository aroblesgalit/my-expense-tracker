import React, { useState } from 'react'
import {
  useStyles as mainStyles,
  PageContainer,
  CardsWrapper,
  SectionHeading
} from '../pages.styles'
import {
  useStyles,
  MonthlyTotalsWrapper,
  ViewIconWrapper,
  TotalsContainer
} from './dashboard.styles'
import { ExpenseConsumer } from '../../utils/ExpenseContext'
import PageHeader from '../../components/PageHeader'
import CardSingleVal from '../../components/CardSingleVal'
import CollapsibleTable from '../../components/CollapsibleTable'
import { Grid } from '@material-ui/core'
import GraphViewIcon from '../../images/icon_view_graph.svg'
import TableViewIcon from '../../images/icon_view_table.svg'
import GooglePieChart from '../../components/GooglePieChart'
import GoogleStackedBarChart from '../../components/GoogleStackedBarChart'

function Dashboard () {
  const mainClasses = mainStyles()
  const classes = useStyles()

  const [viewMode, setViewMode] = useState('Chart')

  return (
    <ExpenseConsumer>
      {value => {
        const {
          categoryMonthlyTotals,
          catMonthlyTotalsArr,
          monthlyTotals,
          totalToday,
          totalWeek,
          totalMonth,
          totalYear
        } = value
        const currentMonth = categoryMonthlyTotals.length - 1
        const pieData = [['category', 'total']]
        for (const [key, value] of Object.entries(
          categoryMonthlyTotals[currentMonth]
        )) {
          if (key !== 'month' && value > 0) {
            pieData.push([key, parseFloat(value.toFixed(2))])
          }
        }

        return (
          <PageContainer
            component='section'
            container
            item
            md={10}
            xs={12}
            alignContent='flex-start'
          >
            <Grid container item xs={12}>
              <PageHeader title='Dashboard' />
            </Grid>
            <Grid
              container
              item
              xs={12}
              spacing={2}
              className={`${mainClasses.padX32} ${mainClasses.padTop32} ${mainClasses.padBot32}`}
            >
              <Grid container item xs={12} lg={8}>
                <MonthlyTotalsWrapper>
                  <Grid
                    container
                    item
                    xs={12}
                    justify='flex-end'
                    className={`${mainClasses.padTop16} ${mainClasses.padRight16}`}
                  >
                    <ViewIconWrapper
                      onClick={() => setViewMode('Chart')}
                      className={`${mainClasses.marRight16} ${
                        viewMode === 'Chart' ? classes.active : undefined
                      }`}
                    >
                      <img src={GraphViewIcon} alt='Graph View Icon' />
                    </ViewIconWrapper>
                    <ViewIconWrapper
                      onClick={() => setViewMode('Table')}
                      className={`${
                        viewMode === 'Table' ? classes.active : undefined
                      }`}
                    >
                      <img src={TableViewIcon} alt='Table View Icon' />
                    </ViewIconWrapper>
                  </Grid>
                  {viewMode === 'Chart' ? (
                    <GoogleStackedBarChart data={catMonthlyTotalsArr} />
                  ) : (
                    <CollapsibleTable rows={monthlyTotals} />
                  )}
                </MonthlyTotalsWrapper>
              </Grid>
              <Grid container item xs={12} lg={4}>
                <MonthlyTotalsWrapper>
                  <GooglePieChart data={pieData} />
                </MonthlyTotalsWrapper>
              </Grid>
            </Grid>

            <Grid className={mainClasses.padTop32} container item xs={12}>
              <Grid className={mainClasses.padX32} item xs={12}>
                <SectionHeading variant={'h3'}>
                  Highest expenses this month
                </SectionHeading>
              </Grid>
              <CardsWrapper
                className={mainClasses.padX32}
                container
                item
                xs={12}
              >
                {Object.keys(categoryMonthlyTotals[currentMonth]).map(
                  (category, i) =>
                    i < 6 &&
                    category !== 'month' &&
                    categoryMonthlyTotals[currentMonth][category] > 0 && (
                      <CardSingleVal
                        key={`${i}-${category}`}
                        name={category}
                        value={`$${categoryMonthlyTotals[currentMonth][
                          category
                        ].toFixed(2)}`}
                      />
                    )
                )}
              </CardsWrapper>
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

export default Dashboard
