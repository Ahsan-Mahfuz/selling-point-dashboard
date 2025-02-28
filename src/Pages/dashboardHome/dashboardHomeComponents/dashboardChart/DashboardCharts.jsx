import ActivityStatistics from './ActivityStatistics'
import UserGrowth from './UserGrowth'

const DashboardCharts = () => {
  return (
    <div className="flex gap-4 p-4">
      <UserGrowth />
      <ActivityStatistics />
    </div>
  )
}

export default DashboardCharts
