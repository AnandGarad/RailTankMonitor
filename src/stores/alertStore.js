import { create } from 'zustand'

const useAlertStore = create((set) => ({
  alerts: [
    {
      id: 'ALT-001',
      type: 'low_water',
      severity: 'warning',
      message: 'Water level low in Tanker 15',
      timestamp: new Date(Date.now() - 5 * 60000),
      location: 'TANK-015',
      status: 'active',
    },
    {
      id: 'ALT-002',
      type: 'sensor_offline',
      severity: 'critical',
      message: 'Sensor offline for Tanker 42',
      timestamp: new Date(Date.now() - 10 * 60000),
      location: 'TANK-042',
      status: 'active',
    },
    {
      id: 'ALT-003',
      type: 'high_temp',
      severity: 'warning',
      message: 'High temperature detected in Tanker 67',
      timestamp: new Date(Date.now() - 15 * 60000),
      location: 'TANK-067',
      status: 'resolved',
    },
  ],

  addAlert: (alert) => {
    set((state) => ({
      alerts: [
        {
          ...alert,
          id: `ALT-${String(state.alerts.length + 1).padStart(3, '0')}`,
          timestamp: new Date(),
          status: 'active',
        },
        ...state.alerts,
      ],
    }))
  },

  resolveAlert: (alertId) => {
    set((state) => ({
      alerts: state.alerts.map((a) =>
        a.id === alertId ? { ...a, status: 'resolved' } : a
      ),
    }))
  },

  dismissAlert: (alertId) => {
    set((state) => ({
      alerts: state.alerts.filter((a) => a.id !== alertId),
    }))
  },

  getActiveAlerts: () => {
    const state = useAlertStore.getState()
    return state.alerts.filter((a) => a.status === 'active')
  },
}))

export default useAlertStore
