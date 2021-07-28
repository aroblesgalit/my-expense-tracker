import React from 'react'
import { Chart } from 'react-google-charts'

function GooglePieChart ({ data }) {
  return (
    <Chart
      width={'500px'}
      height={'400px'}
      chartType='PieChart'
      loader={<div>Loading chart...</div>}
      data={data}
      options={{
        title: 'Totals this month'
      }}
      rootProps={{ 'data-tested': '1' }}
    />
  )
}

export default GooglePieChart
