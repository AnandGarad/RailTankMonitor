import { useEffect, useState } from 'react'
import useAlertStore from '../stores/alertStore'
import { UPDATE_INTERVALS } from '../utils/constants'

const useAlerts = () => {
  const { alerts, addAlert, resolveAlert, dismissAlert, getActiveAlerts } = useAlertStore()
  const [activeAlerts, setActiveAlerts] = useState([])
  const [criticalAlerts, setCriticalAlerts] = useState([])
  const [warningAlerts, setWarningAlerts] = useState([])
  const [infoAlerts, setInfoAlerts] = useState([])

  useEffect(() => {
    // Initialize with some sample alerts
    if (alerts.length === 0) {
      addAlert({
        type: 'water_level',
        severity: 'warning',
        message: 'Low water level detected',
        location: 'TANK-001',
      })
      addAlert({
        type: 'sensor_offline',
        severity: 'critical',
        message: 'Sensor offline',
        location: 'TANK-045',
      })
    }
  }, [])

  useEffect(() => {
    const active = getActiveAlerts()
    setActiveAlerts(active)
    setCriticalAlerts(active.filter((a) => a.severity === 'critical'))
    setWarningAlerts(active.filter((a) => a.severity === 'warning'))
    setInfoAlerts(active.filter((a) => a.severity === 'info'))
  }, [alerts])

  return {
    alerts,
    activeAlerts,
    criticalAlerts,
    warningAlerts,
    infoAlerts,
    addAlert,
    resolveAlert,
    dismissAlert,
  }
}

export default useAlerts
