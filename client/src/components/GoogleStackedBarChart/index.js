import React from 'react'
import { Chart } from 'react-google-charts'

function GoogleStackedBarChart ({ data }) {
  return (
    <Chart
      chartType='BarChart'
      data={data}
      options={{
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
