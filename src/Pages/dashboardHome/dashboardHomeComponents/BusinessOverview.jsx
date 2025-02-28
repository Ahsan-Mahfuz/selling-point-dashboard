import React from 'react'
import { Card } from 'antd'
import clientImage from '../../../assets/client.svg'
import categoryImage from '../../../assets/category.svg'
import talentImage from '../../../assets/talent.svg'

const statsData = [
  {
    id: 1,
    icon: talentImage,
    title: 'Total Talent',
    count: 750,
  },
  {
    id: 2,
    icon: clientImage,
    title: 'Total Client',
    count: 1576,
  },
  {
    id: 3,
    icon: categoryImage,
    title: 'Total Category',
    count: '40+',
  },
]

const BusinessOverview = () => {
  return (
    <Card className="bg-gradient-to-r from-white to-[#ccfbf9] p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        {statsData.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-5 text-center ${
              item.id === 3 ? '' : 'border-r-2 border-black'
            } pr-28`}
          >
            <div className="text-5xl">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[35px] font-semibold">{item.title}</p>
              <p className="text-[32px] app-default-color font-bold">
                {item.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default BusinessOverview
