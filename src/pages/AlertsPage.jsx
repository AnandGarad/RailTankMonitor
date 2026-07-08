import React from 'react'
import { AlertCircle, AlertTriangle } from 'lucide-react'
import Card from '../components/Card'
import useAlerts from '../hooks/useAlerts'
import { formatDateTime } from '../utils/helpers'

const AlertsPage = () => {
  const { alerts, criticalAlerts, warningAlerts, infoAlerts, resolveAlert, dismissAlert } = useAlerts()

  const AlertItem = ({ alert, onResolve, onDismiss }) => (
    <div className={`p-4 rounded-lg border-l-4 ${
      alert.severity === 'critical'
        ? 'bg-danger/10 border-danger'
        : alert.severity === 'warning'
          ? 'bg-warning/10 border-warning'
          : 'bg-info/10 border-info'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {alert.severity === 'critical' && <AlertCircle size={18} className="text-danger" />}
            {alert.severity === 'warning' && <AlertTriangle size={18} className="text-warning" />}
            <p className="font-semibold">{alert.message}</p>
          </div>
          <p className="text-sm text-gray-400">{alert.location} • {formatDateTime(alert.createdAt)}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onResolve(alert.id)}
            className="px-3 py-1 bg-success/20 text-success rounded text-sm hover:bg-success/30 transition-all"
          >
            Resolve
          </button>
          <button
            onClick={() => onDismiss(alert.id)}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600 transition-all"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Alerts</h1>
        <p className="text-gray-400">System alerts and notifications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-gray-400 text-sm mb-2">Critical</p>
          <p className="text-3xl font-bold text-danger">{criticalAlerts.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Warnings</p>
          <p className="text-3xl font-bold text-warning">{warningAlerts.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Info</p>
          <p className="text-3xl font-bold text-info">{infoAlerts.length}</p>
        </Card>
      </div>

      {/* Critical Alerts */}
      {criticalAlerts.length > 0 && (
        <Card>
          <h2 className="text-xl font-bold mb-4">Critical Alerts</h2>
          <div className="space-y-3">
            {criticalAlerts.map((alert) => (
              <AlertItem
                key={alert.id}
                alert={alert}
                onResolve={resolveAlert}
                onDismiss={dismissAlert}
              />
            ))}
          </div>
        </Card>
      )}

      {/* Warning Alerts */}
      {warningAlerts.length > 0 && (
        <Card>
          <h2 className="text-xl font-bold mb-4">Warnings</h2>
          <div className="space-y-3">
            {warningAlerts.map((alert) => (
              <AlertItem
                key={alert.id}
                alert={alert}
                onResolve={resolveAlert}
                onDismiss={dismissAlert}
              />
            ))}
          </div>
        </Card>
      )}

      {/* Info Alerts */}
      {infoAlerts.length > 0 && (
        <Card>
          <h2 className="text-xl font-bold mb-4">Information</h2>
          <div className="space-y-3">
            {infoAlerts.map((alert) => (
              <AlertItem
                key={alert.id}
                alert={alert}
                onResolve={resolveAlert}
                onDismiss={dismissAlert}
              />
            ))}
          </div>
        </Card>
      )}

      {alerts.length === 0 && (
        <Card>
          <p className="text-center text-gray-400 py-12">No alerts at this time</p>
        </Card>
      )}
    </div>
  )
}

export default AlertsPage
