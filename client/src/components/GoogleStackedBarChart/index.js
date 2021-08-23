import React from 'react'
import { Chart } from 'react-google-charts'

function GoogleStackedBarChart ({ data }) {
  return (
    <Chart
      chartType='BarChart'
      data={data}
      options={{
        width: '100%',
        height: 300,
        title: 'NEW BAR CHART DEMO',
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
        legend: {
          position: 'top',
          maxLines: 3
        },
        bar: { groupWidth: '75%' },
        isStacked: true
      }}
    />
  )
}

export default GoogleStackedBarChart
