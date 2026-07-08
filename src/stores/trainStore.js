import { create } from 'zustand'

const useTrainStore = create((set) => ({
  train: {
    id: 'RTM-2024-001',
    status: 'in_transit',
    speed: 0,
    latitude: 19.0760,
    longitude: 72.8777,
    heading: 45,
    distance: 0,
    currentStation: 'Mumbai Central',
    nextStation: 'Dadar',
    eta: '14:30',
    driverName: 'Raj Kumar',
    engineNumber: 'E-001',
    gpsSignal: 'strong',
    lastUpdated: new Date(),
  },

  updateTrainPosition: (lat, lon, speed, heading) => {
    set((state) => ({
      train: {
        ...state.train,
        latitude: lat,
        longitude: lon,
        speed,
        heading,
        lastUpdated: new Date(),
      },
    }))
  },

  updateTrainStatus: (status) => {
    set((state) => ({
      train: {
        ...state.train,
        status,
      },
    }))
  },

  updateMetrics: (metrics) => {
    set((state) => ({
      train: {
        ...state.train,
        ...metrics,
      },
    }))
  },
}))

export default useTrainStore
