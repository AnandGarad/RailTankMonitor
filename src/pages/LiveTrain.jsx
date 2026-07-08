import React from 'react'
import { MapPin, Gauge, Thermometer, AlertCircle } from 'lucide-react'
import Card from '../components/Card'
import Map from '../components/Map'
import useTrain from '../hooks/useTrain'
import { TRAIN_ROUTE } from '../utils/constants'

const LiveTrain = () => {
  const { train } = useTrain()

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Live Train Tracking</h1>
        <p className="text-gray-400">Real-time position and status monitoring</p>
      </div>

      {/* Map */}
      <Card>
        <h2 className="text-xl font-bold mb-4">Train Location</h2>
        <Map
          markers={[
            { lat: train.latitude, lng: train.longitude, name: `Train ${train.id}` },
            ...TRAIN_ROUTE,
          ]}
          center={{ lat: train.latitude, lng: train.longitude }}
          height="500px"
        />
      </Card>

      {/* Train Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location & Route */}
        <Card>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MapPin size={24} className="text-primary" />
            Location & Route
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Latitude</p>
              <p className="text-lg font-bold">{train.latitude.toFixed(4)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Longitude</p>
              <p className="text-lg font-bold">{train.longitude.toFixed(4)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Heading</p>
              <p className="text-lg font-bold">{train.heading.toFixed(0)}°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Station</p>
              <p className="text-lg font-bold">{train.currentStation}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Next Station</p>
              <p className="text-lg font-bold">{train.nextStation}</p>
            </div>
          </div>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Gauge size={24} className="text-primary" />
            Performance Metrics
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-2">Speed</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">{train.speed}</p>
                <p className="text-gray-400">km/h</p>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-2 mt-2">
                <div className="bg-primary rounded-full h-2" style={{ width: `${(train.speed / 120) * 100}%` }}></div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Distance Covered</p>
              <p className="text-lg font-bold">{train.distance} km</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">ETA</p>
              <p className="text-lg font-bold">{train.eta}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">GPS Signal</p>
              <p className="text-lg font-bold capitalize text-success">{train.gpsSignal}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Driver Info */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Driver Information</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">Driver Name</p>
            <p className="text-lg font-bold">{train.driverName}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Engine Number</p>
            <p className="text-lg font-bold">{train.engineNumber}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Status</p>
            <p className="text-lg font-bold capitalize text-primary">{train.status.replace(/_/g, ' ')}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Last Updated</p>
            <p className="text-lg font-bold">{train.lastUpdated.toLocaleTimeString()}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default LiveTrain
