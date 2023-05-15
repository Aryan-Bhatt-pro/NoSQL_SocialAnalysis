import React from "react";
// import { Pie } from "react-chartjs-2";
// import {CChart}
import '@coreui/coreui/dist/css/coreui.min.css'
import {
    CChart,
    CChartBar,
    CChartHorizontalBar,
    CChartLine,
    CChartDoughnut,
    CChartRadar,
    CChartPie,
    CChartPolarArea,
  } from '@coreui/react-chartjs'


function PieChartSubscribersYT({ chartData }) {
  return (
    
    <CChart
  type="doughnut"
  data={{
    labels: chartData.map((label) => label.Youtuber),
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        // data: [40, 20, 80, 10],
        data: chartData.map((count) => count.Subscribers)
      },
    ],
  }}
  options={{
    aspectRatio: 3,
  }}
/>
  );
}
export default PieChartSubscribersYT;