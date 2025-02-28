import DashboardCharts from './dashboardHomeComponents/dashboardChart/DashboardCharts'
import { Link, useNavigate } from 'react-router-dom'
import BusinessOverview from './dashboardHomeComponents/BusinessOverview'
import Client from '../client/Client'

const DashboardHome = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1
          className="text-xl font-semibold cursor-pointer mt-5"
          onClick={() => Navigate(-1)}
        >
          ← Dashboard
        </h1>
      </div>
      <BusinessOverview />
      <div className="mt-10 bg-white  rounded-lg card-shadow">
        <DashboardCharts />
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center bg-white p-3">
          <div className="font-semibold">Recently Joined</div>
          <div>
            <Link to={'/users'} className="text-[#0F5E5B] hover:text-[#549491]">
              View All
            </Link>
          </div>
        </div>
        <Client dashboardHome={true} />
      </div>
    </div>
  )
}

export default DashboardHome
