import React from 'react'
import { AlertCircle, AlertTriangle, Info } from 'lucide-react'

const Alert = ({ type = 'info', message, onClose }) => {
  const config = {
    info: { bg: 'bg-info/10', text: 'text-info', icon: Info },
    warning: { bg: 'bg-warning/10', text: 'text-warning', icon: AlertTriangle },
    danger: { bg: 'bg-danger/10', text: 'text-danger', icon: AlertCircle },
    success: { bg: 'bg-success/10', text: 'text-success', icon: Info },
  }

  const { bg, text, icon: Icon } = config[type] || config.info

  return (
    <div className={`${bg} ${text} p-4 rounded-lg flex items-center gap-3 border border-current/20`}>
      <Icon size={20} />
      <span className="text-sm">{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-auto font-bold">
          ×
        </button>
      )}
    </div>
  )
}

export default Alert
