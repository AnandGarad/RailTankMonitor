import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Droplet, Thermometer, Gauge, AlertCircle } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import useTankers from '../hooks/useTankers'
import { formatPercentage, formatTemperature, formatPressure, getStatusColor } from '../utils/helpers'

const TankerDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getTankerById } = useTankers()
  const tanker = getTankerById(id)

  if (!tanker) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg mb-4">Tanker not found</p>
        <Button onClick={() => navigate('/tankers')}>Back to Tankers</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button onClick={() => navigate('/tankers')} variant="ghost">
          <ArrowLeft size={20} />
          Back
        </Button>
        <div>
          <h1 className="text-4xl font-bold">{tanker.id}</h1>
          <p className="text-gray-400">Detailed tanker information</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Water Status */}
          <Card>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Droplet size={24} className="text-primary" />
              Water Status
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-lg">Water Level</span>
                  <span className="text-2xl font-bold text-primary">{formatPercentage(tanker.waterPercentage)}</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-4">
                  <div
                    className="bg-primary rounded-full h-4 transition-all"
                    style={{ width: `${tanker.waterPercentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Current</p>
                  <p className="text-2xl font-bold">{tanker.waterLiters}</p>
                  <p className="text-xs text-gray-400">Liters</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Capacity</p>
                  <p className="text-2xl font-bold">{tanker.capacity}</p>
                  <p className="text-xs text-gray-400">Liters</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Available</p>
                  <p className="text-2xl font-bold">{tanker.capacity - tanker.waterLiters}</p>
                  <p className="text-xs text-gray-400">Liters</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Environmental Conditions */}
          <Card>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Thermometer size={24} className="text-warning" />
              Environmental Conditions
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-4">Temperature</p>
                <p className="text-4xl font-bold mb-2">{formatTemperature(tanker.temperature)}</p>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div
                    className="bg-warning rounded-full h-2"
                    style={{ width: `${Math.min((tanker.temperature / 40) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-4">Pressure</p>
                <p className="text-4xl font-bold mb-2">{formatPressure(tanker.pressure)}</p>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div
                    className="bg-info rounded-full h-2"
                    style={{ width: `${Math.min((tanker.pressure / 3.5) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* System Status */}
          <Card>
            <h2 className="text-xl font-bold mb-6">System Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-400">Sensor Status</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tanker.sensorStatus === 'operational'
                      ? 'bg-success/20 text-success'
                      : 'bg-danger/20 text-danger'
                  }`}
                >
                  {tanker.sensorStatus === 'operational' ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-400">Valve Status</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary capitalize">
                  {tanker.valveStatus}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-400">Health</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tanker.health === 'normal'
                      ? 'bg-success/20 text-success'
                      : tanker.health === 'warning'
                        ? 'bg-warning/20 text-warning'
                        : 'bg-danger/20 text-danger'
                  }`}
                >
                  {tanker.health.charAt(0).toUpperCase() + tanker.health.slice(1)}
                </span>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Location</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Latitude</p>
                <p className="font-mono bg-gray-800/50 p-2 rounded">{tanker.gpsLat.toFixed(4)}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Longitude</p>
                <p className="font-mono bg-gray-800/50 p-2 rounded">{tanker.gpsLon.toFixed(4)}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TankerDetails
