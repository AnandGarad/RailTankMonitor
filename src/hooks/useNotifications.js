import useUIStore from '../stores/uiStore'

const useNotifications = () => {
  const { notifications, addNotification, removeNotification } = useUIStore()

  const showNotification = (message, type = 'info', duration = 3000) => {
    const id = addNotification({ message, type })
    if (duration > 0) {
      setTimeout(() => removeNotification(id), duration)
    }
    return id
  }

  const showSuccess = (message) => showNotification(message, 'success')
  const showError = (message) => showNotification(message, 'error')
  const showWarning = (message) => showNotification(message, 'warning')
  const showInfo = (message) => showNotification(message, 'info')

  return {
    notifications,
    addNotification,
    removeNotification,
    showNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
}

export default useNotifications
