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


function PieChartLikesTT({ chartData }) {
  return (
    // <div className="chart-container">
    //   <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
    //   <Pie
    //     data={{
    //         datasets: {chartData}
    //     }},
    //   />
    // </div>
    <CChart
  type="doughnut"
  data={{
    labels: chartData.map((label) => label.Name),
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        // data: [40, 20, 80, 10],
        data: chartData.map((count) => count.LikesAvg)
      },
    ],
  }}
  options={{
    aspectRatio: 3,
  }}
/>
  );
}
export default PieChartLikesTT;