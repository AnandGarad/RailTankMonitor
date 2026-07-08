import { create } from 'zustand'

const useAlertStore = create((set) => ({
  alerts: [],

  addAlert: (alertData) => {
    set((state) => ({
      alerts: [
        ...state.alerts,
        {
          id: Date.now(),
          ...alertData,
          createdAt: new Date(),
          resolved: false,
        },
      ],
    }))
  },

  resolveAlert: (id) => {
    set((state) => ({
      alerts: state.alerts.map((a) =>
        a.id === id ? { ...a, resolved: true } : a
      ),
    }))
  },

  dismissAlert: (id) => {
    set((state) => ({
      alerts: state.alerts.filter((a) => a.id !== id),
    }))
  },

  getActiveAlerts: () => {
    const store = useAlertStore.getState()
    return store.alerts.filter((a) => !a.resolved)
  },
}))

export default useAlertStore
