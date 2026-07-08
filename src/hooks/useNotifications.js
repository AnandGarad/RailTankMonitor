import { useEffect } from 'react'
import useUIStore from '../stores/uiStore'

/**
 * Custom hook for UI notifications
 * Manages toast/notification display
 */
const useNotifications = () => {
  const { notifications, addNotification, removeNotification } = useUIStore()

  const showNotification = (message, type = 'info', duration = 3000) => {
    const id = addNotification({ message, type })

    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }

  const showSuccess = (message, duration = 3000) => showNotification(message, 'success', duration)
  const showError = (message, duration = 5000) => showNotification(message, 'error', duration)
  const showWarning = (message, duration = 4000) => showNotification(message, 'warning', duration)
  const showInfo = (message, duration = 3000) => showNotification(message, 'info', duration)

  return {
    notifications,
    showNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    removeNotification,
  }
}

export default useNotifications
