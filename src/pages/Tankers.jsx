import React, { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import Card from '../components/Card'
import useTankers from '../hooks/useTankers'
import { formatPercentage, formatTemperature, formatPressure, getStatusBadgeClass } from '../utils/helpers'

const Tankers = () => {
  const { filteredTankers, filterTankers, searchTanker } = useTankers()
  const [searchQuery, setSearchQuery] = useState('')
  const [healthFilter, setHealthFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query) {
      searchTanker(query)
    } else {
      filterTankers({ health: healthFilter === 'all' ? null : healthFilter })
    }
  }

  const handleFilterChange = (type, value) => {
    if (type === 'health') setHealthFilter(value)
    if (type === 'status') setStatusFilter(value)

    const criteria = {}
    if (value !== 'all') criteria[type] = value
    filterTankers(criteria)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Tankers</h1>
        <p className="text-gray-400">Manage and monitor all water tankers</p>
      </div>

      {/* Search & Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tanker ID..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Filters */}
          <select
            value={healthFilter}
            onChange={(e) => handleFilterChange('health', e.target.value)}
            className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">All Health</option>
            <option value="normal">Normal</option>
            <option value="warning">Warning</option>
            <option value="critical">Critical</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">All Status</option>
            <option value="operational">Operational</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </Card>

      {/* Tankers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTankers.map((tanker) => (
          <Card key={tanker.id} hover>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Tanker ID</p>
                <p className="text-xl font-bold">{tanker.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadgeClass(tanker.health)}`}>
                {tanker.health}
              </span>
            </div>

            {/* Water Level */}
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Water Level</span>
                <span className="text-sm font-bold">{formatPercentage(tanker.waterPercentage)}</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    tanker.waterPercentage > 80
                      ? 'bg-success'
                      : tanker.waterPercentage > 50
                        ? 'bg-primary'
                        : tanker.waterPercentage > 20
                          ? 'bg-warning'
                          : 'bg-danger'
                  }`}
                  style={{ width: `${tanker.waterPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-800/50 rounded p-2">
                <p className="text-gray-400 text-xs mb-1">Temperature</p>
                <p className="font-bold">{formatTemperature(tanker.temperature)}</p>
              </div>
              <div className="bg-gray-800/50 rounded p-2">
                <p className="text-gray-400 text-xs mb-1">Pressure</p>
                <p className="font-bold">{formatPressure(tanker.pressure)}</p>
              </div>
              <div className="bg-gray-800/50 rounded p-2">
                <p className="text-gray-400 text-xs mb-1">Valve Status</p>
                <p className="font-bold capitalize">{tanker.valveStatus}</p>
              </div>
              <div className="bg-gray-800/50 rounded p-2">
                <p className="text-gray-400 text-xs mb-1">Sensor</p>
                <p className={`font-bold ${tanker.sensorStatus === 'operational' ? 'text-success' : 'text-danger'}`}>
                  {tanker.sensorStatus === 'operational' ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredTankers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No tankers found</p>
        </div>
      )}
    </div>
  )
}

export default Tankers
