import React from 'react'
import { Zap, Wifi, AlertCircle } from 'lucide-react'
import Card from '../components/Card'
import { TOTAL_TANKERS } from '../utils/constants'

const Sensors = () => {
  const [sensors] = React.useState(
    Array.from({ length: TOTAL_TANKERS }, (_, i) => ({
      id: `SENSOR-${String(i + 1).padStart(3, '0')}`,
      tankId: `TANK-${String(i + 1).padStart(3, '0')}`,
      type: ['temperature', 'pressure', 'level', 'gps'][Math.floor(Math.random() * 4)],
      status: Math.random() > 0.1 ? 'operational' : 'offline',
      value: Math.random() * 100,
      battery: Math.random() * 100,
      lastUpdate: new Date(),
    }))
  )

  const operationalSensors = sensors.filter((s) => s.status === 'operational').length
  const offlineSensors = sensors.filter((s) => s.status === 'offline').length

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Sensors</h1>
        <p className="text-gray-400">Monitor all IoT sensor status and health</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-gray-400 text-sm mb-2">Total Sensors</p>
          <p className="text-3xl font-bold">{sensors.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Operational</p>
          <p className="text-3xl font-bold text-success">{operationalSensors}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Offline</p>
          <p className="text-3xl font-bold text-danger">{offlineSensors}</p>
        </Card>
      </div>

      {/* Sensors List */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Sensor Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-semibold">Sensor ID</th>
                <th className="text-left py-3 px-4 font-semibold">Tank ID</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Value</th>
                <th className="text-left py-3 px-4 font-semibold">Battery</th>
              </tr>
            </thead>
            <tbody>
              {sensors.map((sensor) => (
                <tr key={sensor.id} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-all">
                  <td className="py-3 px-4">{sensor.id}</td>
                  <td className="py-3 px-4">{sensor.tankId}</td>
                  <td className="py-3 px-4 capitalize">{sensor.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      sensor.status === 'operational'
                        ? 'bg-success/20 text-success'
                        : 'bg-danger/20 text-danger'
                    }`}>
                      {sensor.status.charAt(0).toUpperCase() + sensor.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">{sensor.value.toFixed(1)}%</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className={sensor.battery > 50 ? 'text-success' : 'text-warning'} />
                      {sensor.battery.toFixed(0)}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Sensors
