import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const StatCard = ({ icon: Icon, label, value, change, trend = 'up', unit = '' }) => {
  return (
    <div className="bg-card-dark rounded-lg p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-2">{label}</p>
          <p className="text-3xl font-bold">
            {value}
            <span className="text-lg ml-1">{unit}</span>
          </p>
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon size={24} className="text-primary" />
        </div>
      </div>

      {change && (
        <div className={`mt-4 flex items-center gap-1 text-sm ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{change}% from last month</span>
        </div>
      )}
    </div>
  )
}

export default StatCard
