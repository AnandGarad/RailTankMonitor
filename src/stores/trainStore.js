import { create } from 'zustand'

const useTrainStore = create((set) => ({
  train: {
    id: 'RTM-2024-001',
    engineNumber: 'WDM-3A-18456',
    driverName: 'Rajesh Kumar',
    status: 'in_transit',
    currentStation: 'Mumbai Central',
    nextStation: 'Pune Junction',
    lastUpdated: new Date(),
    gpsSignal: 'strong',
    speed: 85,
    distance: 150,
    eta: '14:30',
    latitude: 19.0760,
    longitude: 72.8777,
    heading: 45,
  },
  tankersCount: 100,
  totalCapacity: 50000,
  totalWater: 42500,
  averageWaterLevel: 85,
  sensorStatus: 'operational',

  updateTrainPosition: (latitude, longitude, speed, heading) => {
    set((state) => ({
      train: {
        ...state.train,
        latitude,
        longitude,
        speed,
        heading,
        lastUpdated: new Date(),
      },
    }))
  },

  updateTrainStatus: (updates) => {
    set((state) => ({
      train: { ...state.train, ...updates },
    }))
  },

  updateMetrics: (metrics) => {
    set(metrics)
  },
}))

export default useTrainStore
