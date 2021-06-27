import React, { useState } from 'react'
import {
  useStyles,
  PageContainer,
  CardsWrapper,
  SectionHeading
} from '../pages.styles'
import {
  useStyles as dashboardStyles,
  MonthlyTotalsWrapper,
  ViewIconWrapper,
  TotalsContainer
} from './dashboard.styles'
import { ExpenseConsumer } from '../../utils/ExpenseContext'
import PageHeader from '../../components/PageHeader'
import CardSingleVal from '../../components/CardSingleVal'
import CollapsibleTable from '../../components/CollapsibleTable'
import { Grid } from '@material-ui/core'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui'
import { Stack, Animation } from '@devexpress/dx-react-chart'
import { withStyles } from '@material-ui/core'
import GraphViewIcon from '../../images/icon_view_graph.svg'
import TableViewIcon from '../../images/icon_view_table.svg'

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',

    '& li': {
      width: 'auto'
    }
  }
})
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
)
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase)
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
    '& span': {
      fontSize: '12px'
    }
  }
})
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
)
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(
  legendLabelBase
)

function Dashboard () {
  const classes = useStyles()
  const classesDashboard = dashboardStyles()

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
        const categoryNames = categories.map(
          category => category[0].toUpperCase() + category.slice(1)
        )
        const colors = [
          '#80F9DC',
          '#808CF9',
          '#F980C9',
          '#F9BA80',
          '#9FF980',
          '#D9A778',
          '#80DCF9',
          '#C480F9',
          '#F98080',
          '#EFF980',
          '#78B0D9'
        ]
        const currentMonth = categoryMonthlyTotals.length - 1
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
            <Grid className={classes.padTop32} container item xs={12}>
              <Grid className={classes.padX32} item xs={12}>
                <SectionHeading variant={'h3'}>
                  Highest expenses this month
                </SectionHeading>
              </Grid>
              <CardsWrapper className={classes.padX32} container item xs={12}>
                {Object.keys(categoryMonthlyTotals[currentMonth]).map(
                  (category, i) =>
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
              className={`${classes.padX32} ${classes.padTop32} ${classes.padBot32}`}
            >
              <MonthlyTotalsWrapper>
                <Grid container item xs={12} justify='flex-end'>
                  <ViewIconWrapper
                    onClick={() => setViewMode('Chart')}
                    className={`${classes.marRight16} ${viewMode === 'Chart' &&
                      classesDashboard.active}`}
                  >
                    <img src={GraphViewIcon} alt='Graph View Icon' />
                  </ViewIconWrapper>
                  <ViewIconWrapper
                    onClick={() => setViewMode('Table')}
                    className={`${viewMode === 'Table' &&
                      classesDashboard.active}`}
                  >
                    <img src={TableViewIcon} alt='Table View Icon' />
                  </ViewIconWrapper>
                </Grid>
                {viewMode === 'Chart' ? (
                  <Chart data={categoryMonthlyTotals} width='100%'>
                    <ArgumentAxis showTicks={false} />
                    <ValueAxis max={3000} />
                    {categories.map((category, i) => (
                      <BarSeries
                        key={`${i}-${category}`}
                        name={categoryNames[i]}
                        valueField={category}
                        argumentField='month'
                        color={colors[i]}
                      />
                    ))}
                    <Animation />
                    <Legend
                      position='bottom'
                      rootComponent={Root}
                      labelComponent={Label}
                    />
                    <Title text='Monthly totals' />
                    <Stack
                      stacks={[
                        {
                          series: categoryNames
                        }
                      ]}
                    />
                  </Chart>
                ) : (
                  <CollapsibleTable rows={monthlyTotals} />
                )}
              </MonthlyTotalsWrapper>
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
