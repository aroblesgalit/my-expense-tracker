import React from 'react'
import { Chart } from 'react-google-charts'

function GooglePieChart () {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType='PieChart'
      loader={<div>Loading chart...</div>}
      data={[
        ['Category', 'Total'],
        ['Food', 18.6],
        ['Bills', 40.02],
        ['Travel', 204.1],
        ['Other', 210.94]
      ]}
      options={{
        title: 'Totals this month'
      }}
      rootProps={{ 'data-tested': '1' }}
    />
  )
}

export default GooglePieChart
