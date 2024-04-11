import React from 'react'
import Chart from "react-apexcharts";
import { useState } from 'react';

const BalanceVsTime = () => {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "basic-area"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995]
      }
    },
    series: [
      {
        name: "Balance",
        data: [0, 40, 45, 20, 49]
      }
    ]
  })

  return (
    <div className="graph shadow-2xl flex flex-col h-full w-full rounded-b-xl bg-[#ECECEC]">
      <div className='h-1/8 text-md font-semibold text-neutral-600 pl-3 pt-2'>Graph</div>

      <div className='w-auto -mr-16'>
        <Chart
          options={{
            ...chartState.options,
            dataLabels: { enabled: false },
            stroke: { width: 0 },
            chart: {
              toolbar: {
                show: false
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 10,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(0, 229, 255)", // Light blue
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: "rgb(0, 34, 255)" // Dark blue
                  }
                ]
              }
            }
          }}
          series={chartState.series}
          type="area"
          width="80%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default BalanceVsTime