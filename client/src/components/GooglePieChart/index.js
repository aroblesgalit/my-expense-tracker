import React from 'react'
import { Chart } from 'react-google-charts'

function GooglePieChart ({ data }) {
  return (
    <Chart
      chartType='PieChart'
      loader={<div>Loading chart...</div>}
      data={data}
      options={{
        width: '100%',
        height: '100%',
        title: 'Category totals this month',
        colors: [
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
        ],
        pieSliceText: 'label',
        legend: 'none'
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

export default GooglePieChart
