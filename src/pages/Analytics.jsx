import React from 'react'
import { BarChart3, TrendingUp, Calendar } from 'lucide-react'
import Card from '../components/Card'
import Chart from '../components/Chart'
import { generateMockAnalyticsData } from '../services/apiService'

const Analytics = () => {
  const [analyticsData] = React.useState(generateMockAnalyticsData())

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-400">Water consumption and system performance metrics</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-gray-400 text-sm mb-2">Total Consumption (Week)</p>
          <p className="text-3xl font-bold">28,500</p>
          <p className="text-xs text-success mt-2">+5.2% vs last week</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Average Daily Use</p>
          <p className="text-3xl font-bold">4,071</p>
          <p className="text-xs text-warning mt-2">-2.1% vs baseline</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Peak Usage Hour</p>
          <p className="text-3xl font-bold">14:00</p>
          <p className="text-xs text-info mt-2">Updated today</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Consumption */}
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

        {/* Tank Performance */}
        <Card>
          <h2 className="text-xl font-bold mb-6">Tank Efficiency Rating</h2>
          <div className="h-80">
            <Chart
              type="bar"
              data={analyticsData.tankPerformance}
              dataKey="efficiency"
              fill="#22C55E"
            />
          </div>
        </Card>
      </div>

      {/* Monthly Usage */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Monthly Water Usage Trend</h2>
        <div className="h-96">
          <Chart
            type="line"
            data={analyticsData.monthlyUsage}
            dataKey="usage"
            stroke="#F59E0B"
          />
        </div>
      </Card>
    </div>
  )
}

export default Analytics
