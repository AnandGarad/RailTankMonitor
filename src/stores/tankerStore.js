import { create } from 'zustand'

const useTankerStore = create((set) => ({
  tankers: [],
  loading: false,
  selectedTanker: null,

  // Initialize tankers with dummy data
  initializeTankers: () => {
    const tankers = Array.from({ length: 100 }, (_, i) => ({
      id: `TANK-${String(i + 1).padStart(3, '0')}`,
      number: i + 1,
      waterPercentage: Math.floor(Math.random() * 100),
      waterLiters: Math.floor(Math.random() * 500),
      capacity: 500,
      temperature: 20 + Math.random() * 15,
      pressure: 1.5 + Math.random() * 2,
      valveStatus: ['open', 'closed', 'partial'][Math.floor(Math.random() * 3)],
      sensorStatus: Math.random() > 0.1 ? 'operational' : 'offline',
      health: ['normal', 'warning', 'critical'][Math.floor(Math.random() * 3)],
      lastUpdated: new Date(),
      gpsLat: 19.0760 + Math.random() * 0.05,
      gpsLon: 72.8777 + Math.random() * 0.05,
      fillHistory: [],
      consumptionHistory: [],
    }))
    set({ tankers })
  },

  updateTankerData: (tankerId, updates) => {
    set((state) => ({
      tankers: state.tankers.map((t) =>
        t.id === tankerId ? { ...t, ...updates, lastUpdated: new Date() } : t
      ),
    }))
  },

  updateAllTankers: () => {
    set((state) => ({
      tankers: state.tankers.map((t) => ({
        ...t,
        waterPercentage: Math.max(0, Math.min(100, t.waterPercentage + (Math.random() - 0.5) * 5)),
        waterLiters: Math.max(0, Math.min(500, t.waterLiters + (Math.random() - 0.5) * 10)),
        temperature: 20 + Math.random() * 15,
        pressure: Math.max(0, 1.5 + Math.random() * 2),
        sensorStatus: Math.random() > 0.95 ? 'offline' : 'operational',
        lastUpdated: new Date(),
      })),
    }))
  },

  setSelectedTanker: (tanker) => {
    set({ selectedTanker: tanker })
  },

  getTankerById: (id) => {
    const state = useTankerStore.getState()
    return state.tankers.find((t) => t.id === id)
  },

  searchTankers: (query) => {
    const state = useTankerStore.getState()
    return state.tankers.filter(
      (t) =>
        t.id.toLowerCase().includes(query.toLowerCase()) ||
        t.number.toString().includes(query)
    )
  },
}))

export default useTankerStore
