import React, { useEffect } from 'react'
import { Activity, Droplet, AlertCircle, Train, TrendingUp } from 'lucide-react'
import Card from '../components/Card'
import StatCard from '../components/StatCard'
import Chart from '../components/Chart'
import useTrain from '../hooks/useTrain'
import useTankers from '../hooks/useTankers'
import useAlerts from '../hooks/useAlerts'
import { generateMockAnalyticsData } from '../services/apiService'

const Dashboard = () => {
  const { train } = useTrain()
  const { tankers, filteredTankers } = useTankers()
  const { activeAlerts, criticalAlerts } = useAlerts()
  const [analyticsData, setAnalyticsData] = React.useState(null)

  useEffect(() => {
    setAnalyticsData(generateMockAnalyticsData())
  }, [])

  const totalWater = tankers.reduce((acc, t) => acc + t.waterLiters, 0)
  const avgWaterLevel = tankers.length > 0 ? (tankers.reduce((acc, t) => acc + t.waterPercentage, 0) / tankers.length).toFixed(1) : 0
  const operationalTankers = tankers.filter((t) => t.sensorStatus === 'operational').length

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your system overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Train}
          label="Active Train"
          value={train.id}
          change={12}
          unit=""
        />
        <StatCard
          icon={Droplet}
          label="Total Water"
          value={(totalWater / 1000).toFixed(1)}
          change={8}
          unit="K L"
        />
        <StatCard
          icon={Activity}
          label="Avg Water Level"
          value={avgWaterLevel}
          change={5}
          unit="%"
        />
        <StatCard
          icon={AlertCircle}
          label="Active Alerts"
          value={activeAlerts.length}
          change={-3}
          trend="down"
          unit=""
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Train Status */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Train Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">ID</p>
                <p className="text-lg font-bold">{train.id}</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Speed</p>
                <p className="text-lg font-bold">{train.speed} km/h</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Current Station</p>
                <p className="text-lg font-bold">{train.currentStation}</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Status</p>
                <p className="text-lg font-bold capitalize text-primary">{train.status.replace(/_/g, ' ')}</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Next Station</p>
                <p className="text-lg font-bold">{train.nextStation}</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">ETA</p>
                <p className="text-lg font-bold">{train.eta}</p>
              </div>
            </div>
          </Card>

          {/* Water Consumption Chart */}
          {analyticsData && (
            <Card>
              <h2 className="text-xl font-bold mb-6">Daily Water Consumption</h2>
              <div className="h-80">
                <Chart
                  type="bar"
                  data={analyticsData.dailyConsumption}
                  dataKey="consumption"
                  fill="#06B6D4"
                />
              </div>
            </Card>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Tanker Stats */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Tanker Overview</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Total Tankers</span>
                  <span className="font-bold">{tankers.length}</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="bg-primary rounded-full h-2 w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Operational</span>
                  <span className="font-bold">{operationalTankers}</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div
                    className="bg-success rounded-full h-2"
                    style={{ width: `${(operationalTankers / tankers.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Recent Alerts</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {activeAlerts.slice(0, 5).map((alert) => (
                <div
                  key={alert.id}
                  className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-warning hover:bg-gray-800 transition-all"
                >
                  <p className="text-sm font-semibold">{alert.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{alert.location}</p>
                </div>
              ))}
              {activeAlerts.length === 0 && (
                <p className="text-sm text-gray-400 py-4 text-center">No active alerts</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
