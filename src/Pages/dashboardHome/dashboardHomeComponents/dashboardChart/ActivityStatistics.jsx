import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const ActivityStatistics = () => {
  const allData = {
    labels: ['Active clients', 'Active talents'],
    datasets: [
      {
        label: 'Activity Statistics',
        data: [120, 120],
        backgroundColor: ['#0F5E5B', '#7FB5B1'],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw
            return `${context.label}: ${value}`
          },
        },
      },
    },
    cutout: '70%',
  }

  return (
    <div className="shadow  p-2 rounded-md pt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Activity Statistics
      </h2>

      <div className="flex justify-center items-center relative mb-6">
        <Doughnut data={allData} options={options} />
        <div className="absolute top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-xl font-bold text-black">
          360
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-sm">
        <div className="flex items-center gap-1 ">
          <span className="w-3 h-3  bg-[#0F5E5B] rounded-full mr-2"></span>
          Active Clients
          <span className="px-3 py-1 bg-[#0F5E5B] text-white rounded-md">
            {allData.datasets[0]?.data[0]}
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-3 h-3 bg-[#7FB5B1] rounded-full mr-2"></span>
          Active Talents
          <span className="px-3 py-1 bg-[#7FB5B1]  rounded-md">
            {allData.datasets[0]?.data[1]}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ActivityStatistics
