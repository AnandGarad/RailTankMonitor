import React from 'react'
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'
import useNotifications from '../hooks/useNotifications'

const Toast = ({ notification }) => {
  const icons = {
    success: <CheckCircle size={20} className="text-success" />,
    error: <AlertCircle size={20} className="text-danger" />,
    warning: <AlertTriangle size={20} className="text-warning" />,
    info: <Info size={20} className="text-info" />,
  }

  const bgColors = {
    success: 'bg-success/10 border-success/50',
    error: 'bg-danger/10 border-danger/50',
    warning: 'bg-warning/10 border-warning/50',
    info: 'bg-info/10 border-info/50',
  }

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border ${bgColors[notification.type] || bgColors.info}`}>
      {icons[notification.type]}
      <p className="text-sm">{notification.message}</p>
    </div>
  )
}

const ToastContainer = () => {
  const { notifications, removeNotification } = useNotifications()

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {notifications.map((notification) => (
        <div key={notification.id} className="animate-slide-in-right">
          <Toast notification={notification} />
        </div>
      ))}
    </div>
  )
}

export default ToastContainer
