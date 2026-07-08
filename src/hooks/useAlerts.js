import { useEffect } from 'react'
import useAlertStore from '../stores/alertStore'

/**
 * Custom hook for alert management
 * Handles alert operations and monitoring
 */
const useAlerts = () => {
  const { alerts, addAlert, resolveAlert, dismissAlert, getActiveAlerts } = useAlertStore()

  // Simulate random alerts
  useEffect(() => {
    const interval = setInterval(() => {
      const alertTypes = ['low_water', 'sensor_offline', 'high_temp', 'pressure_warning', 'gps_offline']
      const severities = ['info', 'warning', 'critical']
      const tankNumber = Math.floor(Math.random() * 100) + 1

      // 5% chance of generating an alert
      if (Math.random() > 0.95) {
        const type = alertTypes[Math.floor(Math.random() * alertTypes.length)]
        const severity = severities[Math.floor(Math.random() * severities.length)]

        addAlert({
          type,
          severity,
          message: `Alert in Tanker ${tankNumber}: ${type.replace(/_/g, ' ')}`,
          location: `TANK-${String(tankNumber).padStart(3, '0')}`,
        })
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [addAlert])

  const getCriticalAlerts = () => alerts.filter((a) => a.severity === 'critical')
  const getWarningAlerts = () => alerts.filter((a) => a.severity === 'warning')
  const getInfoAlerts = () => alerts.filter((a) => a.severity === 'info')

  return {
    alerts,
    activeAlerts: getActiveAlerts(),
    criticalAlerts: getCriticalAlerts(),
    warningAlerts: getWarningAlerts(),
    infoAlerts: getInfoAlerts(),
    addAlert,
    resolveAlert,
    dismissAlert,
  }
}

export default useAlerts
