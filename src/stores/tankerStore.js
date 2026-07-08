import { create } from 'zustand'
import { TOTAL_TANKERS, TANKER_CAPACITY } from '../utils/constants'

const useTankerStore = create((set) => ({
  tankers: [],
  selectedTanker: null,

  initializeTankers: () => {
    const newTankers = Array.from({ length: TOTAL_TANKERS }, (_, i) => ({
      id: `TANK-${String(i + 1).padStart(3, '0')}`,
      waterPercentage: Math.random() * 100,
      waterLiters: Math.random() * TANKER_CAPACITY,
      capacity: TANKER_CAPACITY,
      temperature: 20 + Math.random() * 15,
      pressure: 1 + Math.random() * 2,
      sensorStatus: Math.random() > 0.05 ? 'operational' : 'offline',
      valveStatus: ['open', 'closed', 'partial'][Math.floor(Math.random() * 3)],
      health: ['normal', 'warning', 'critical'][Math.floor(Math.random() * 3)],
      gpsLat: 19.0 + Math.random() * 0.5,
      gpsLon: 72.8 + Math.random() * 0.5,
    }))
    set({ tankers: newTankers })
  },

  updateAllTankers: () => {
    set((state) => ({
      tankers: state.tankers.map((t) => ({
        ...t,
        waterPercentage: Math.max(0, Math.min(100, t.waterPercentage + (Math.random() - 0.5) * 5)),
        waterLiters: Math.max(0, Math.min(TANKER_CAPACITY, t.waterLiters + (Math.random() - 0.5) * 50)),
        temperature: Math.max(10, Math.min(40, t.temperature + (Math.random() - 0.5) * 2)),
        pressure: Math.max(0, Math.min(3, t.pressure + (Math.random() - 0.5) * 0.2)),
      })),
    }))
  },

  setSelectedTanker: (id) => {
    set((state) => ({
      selectedTanker: state.tankers.find((t) => t.id === id),
    }))
  },

  getTankerById: (id) => {
    const store = useTankerStore.getState()
    return store.tankers.find((t) => t.id === id)
  },

  searchTankers: (query) => {
    const store = useTankerStore.getState()
    return store.tankers.filter(
      (t) =>
        t.id.toLowerCase().includes(query.toLowerCase()) ||
        t.health.toLowerCase().includes(query.toLowerCase())
    )
  },
}))

export default useTankerStore
