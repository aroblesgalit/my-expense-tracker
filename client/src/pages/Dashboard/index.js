import React, { useState } from 'react'
import { PageContainer, CardsWrapper } from '../pages.styles'
import { useStyles } from './dashboard.styles'
import { ExpenseConsumer } from '../../utils/ExpenseContext'
import PageHeader from '../../components/PageHeader'
import CardSingleVal from '../../components/CardSingleVal'
import CollapsibleTable from '../../components/CollapsibleTable'
import { Grid, Paper } from '@material-ui/core'
import {
  InsertChartOutlinedSharp,
  TableChartOutlined
} from '@material-ui/icons'
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

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  }
})
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
)
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase)
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap'
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

  const [viewMode, setViewMode] = useState('Chart')

  return (
    <ExpenseConsumer>
      {value => {
        const { categoryMonthlyTotals, monthlyTotals } = value
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
            <CardsWrapper className={classes.px} container item xs={12}>
              {Object.keys(categoryMonthlyTotals[currentMonth]).map(
                (category, i) =>
                  category !== 'month' &&
                  categoryMonthlyTotals[currentMonth][category] > 0 && (
                    <CardSingleVal
                      key={`${i}-${category}`}
                      name={category}
                      value={`$${categoryMonthlyTotals[currentMonth][category]}`}
                    />
                  )
              )}
            </CardsWrapper>

            <Grid container item xs={12} className={classes.px}>
              <Paper className={`${classes.w100} ${classes.overflow}`}>
                <Grid container item xs={12} justify='flex-end'>
                  <InsertChartOutlinedSharp
                    fontSize='large'
                    onClick={() => setViewMode('Chart')}
                  />
                  <TableChartOutlined
                    fontSize='large'
                    onClick={() => setViewMode('Table')}
                  />
                </Grid>
                {viewMode === 'Chart' ? (
                  <Chart data={categoryMonthlyTotals} width='100%'>
                    <ArgumentAxis />
                    <ValueAxis max={3000} />

                    <BarSeries
                      name='Groceries'
                      valueField='groceries'
                      argumentField='month'
                      color='#80F9DC'
                    />
                    <BarSeries
                      name='Bills'
                      valueField='bills'
                      argumentField='month'
                      color='#808CF9'
                    />
                    <BarSeries
                      name='Auto'
                      valueField='auto'
                      argumentField='month'
                      color='#F980C9'
                    />
                    <BarSeries
                      name='Medical'
                      valueField='medical'
                      argumentField='month'
                      color='#F9BA80'
                    />
                    <BarSeries
                      name='Clothing'
                      valueField='clothing'
                      argumentField='month'
                      color='#9FF980'
                    />
                    <BarSeries
                      name='Travel'
                      valueField='travel'
                      argumentField='month'
                      color='#D9A778'
                    />
                    <BarSeries
                      name='Loans'
                      valueField='loans'
                      argumentField='month'
                      color='#80DCF9'
                    />
                    <BarSeries
                      name='Household'
                      valueField='household'
                      argumentField='month'
                      color='#C480F9'
                    />
                    <BarSeries
                      name='Fun'
                      valueField='fun'
                      argumentField='month'
                      color='#F98080'
                    />
                    <BarSeries
                      name='Gifts'
                      valueField='gifts'
                      argumentField='month'
                      color='#EFF980'
                    />
                    <BarSeries
                      name='Other'
                      valueField='other'
                      argumentField='month'
                      color='#78B0D9'
                    />
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
                          series: [
                            'Groceries',
                            'Bills',
                            'Auto',
                            'Medical',
                            'Clothing',
                            'Travel',
                            'Loans',
                            'Household',
                            'Fun',
                            'Gifts',
                            'Other'
                          ]
                        }
                      ]}
                    />
                  </Chart>
                ) : (
                  <CollapsibleTable rows={monthlyTotals} />
                )}
              </Paper>
            </Grid>
          </PageContainer>
        )
      }}
    </ExpenseConsumer>
  )
}

export default Dashboard
