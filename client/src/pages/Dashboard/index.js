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
import BarGraph from '../../components/BarGraph'
import { Grid } from '@material-ui/core'
import GraphViewIcon from '../../images/icon_view_graph.svg'
import TableViewIcon from '../../images/icon_view_table.svg'
import GooglePieChart from '../../components/GooglePieChart'

function Dashboard () {
  const mainClasses = mainStyles()
  const classes = useStyles()

  const [viewMode, setViewMode] = useState('Chart')

  return (
    <ExpenseConsumer>
      {value => {
        const {
          categories,
          categoryMonthlyTotals,
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

            <Grid
              container
              item
              xs={12}
              className={`${mainClasses.padX32} ${mainClasses.padTop32} ${mainClasses.padBot32}`}
            >
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
                    className={`${mainClasses.marRight16} ${viewMode ===
                      'Chart' && classes.active}`}
                  >
                    <img src={GraphViewIcon} alt='Graph View Icon' />
                  </ViewIconWrapper>
                  <ViewIconWrapper
                    onClick={() => setViewMode('Table')}
                    className={`${viewMode === 'Table' && classes.active}`}
                  >
                    <img src={TableViewIcon} alt='Table View Icon' />
                  </ViewIconWrapper>
                </Grid>
                {viewMode === 'Chart' ? (
                  <BarGraph
                    categories={categories}
                    categoryMonthlyTotals={categoryMonthlyTotals}
                  />
                ) : (
                  <CollapsibleTable rows={monthlyTotals} />
                )}
              </MonthlyTotalsWrapper>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className={`${mainClasses.padX32} ${mainClasses.padTop32} ${mainClasses.padBot32}`}
            >
              {/* <Chart width={600} data={pieData}>
                <Legend
                  rootComponent={Legend.Root}
                  labelComponent={Legend.Label}
                />
                <PieSeries valueField='total' argumentField='category' />
              </Chart> */}
              <GooglePieChart data={pieData} />
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
