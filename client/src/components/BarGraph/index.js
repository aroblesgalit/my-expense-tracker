import React from 'react'
import { withStyles } from '@material-ui/core'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui'
import { Stack, Animation } from '@devexpress/dx-react-chart'

const legendStyles = () => ({
  root: {
    fontSize: '12px'
  }
})
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
)
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase)
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'wrap',
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

function BarGraph ({ categories, categoryMonthlyTotals }) {
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
  return (
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
      <Legend rootComponent={Root} labelComponent={Label} />
      <Title text='Monthly totals' />
      <Stack
        stacks={[
          {
            series: categoryNames
          }
        ]}
      />
    </Chart>
  )
}

export default BarGraph
