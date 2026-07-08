/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Format time to readable string
 */
export const formatTime = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

/**
 * Format date and time
 */
export const formatDateTime = (date) => {
  if (!date) return 'N/A'
  return `${formatDate(date)} ${formatTime(date)}`
}

/**
 * Format temperature
 */
export const formatTemperature = (temp) => {
  return `${temp?.toFixed(1) || 'N/A'}°C`
}

/**
 * Format pressure
 */
export const formatPressure = (pressure) => {
  return `${pressure?.toFixed(2) || 'N/A'} bar`
}

/**
 * Format water volume
 */
export const formatWater = (liters) => {
  return `${liters?.toFixed(0) || 'N/A'} L`
}

/**
 * Format percentage
 */
export const formatPercentage = (value) => {
  return `${value?.toFixed(1) || 'N/A'}%`
}

/**
 * Format speed
 */
export const formatSpeed = (speed) => {
  return `${speed?.toFixed(0) || 'N/A'} km/h`
}

/**
 * Format distance
 */
export const formatDistance = (distance) => {
  if (distance < 1) return `${(distance * 1000).toFixed(0)} m`
  return `${distance?.toFixed(1) || 'N/A'} km`
}

/**
 * Format currency
 */
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

/**
 * Get status color
 */
export const getStatusColor = (status) => {
  const colors = {
    operational: '#22C55E',
    offline: '#EF4444',
    warning: '#F59E0B',
    critical: '#EF4444',
    normal: '#22C55E',
    maintenance: '#3B82F6',
  }
  return colors[status] || '#64748B'
}

/**
 * Get status badge class
 */
export const getStatusBadgeClass = (status) => {
  const classes = {
    operational: 'bg-success/10 text-success',
    offline: 'bg-danger/10 text-danger',
    warning: 'bg-warning/10 text-warning',
    critical: 'bg-danger/10 text-danger',
    normal: 'bg-success/10 text-success',
    maintenance: 'bg-info/10 text-info',
  }
  return classes[status] || 'bg-gray/10 text-gray'
}

/**
 * Calculate health percentage
 */
export const calculateHealth = (tanker) => {
  let health = 100

  if (tanker.waterPercentage < 20) health -= 20
  if (tanker.waterPercentage > 95) health -= 10
  if (tanker.temperature > 35) health -= 15
  if (tanker.sensorStatus === 'offline') health -= 30
  if (tanker.valveStatus === 'partial') health -= 5

  return Math.max(0, health)
}

/**
 * Get time ago string
 */
export const getTimeAgo = (date) => {
  const now = new Date()
  const diff = now - new Date(date)
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return formatDate(date)
}

/**
 * Validate email
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

/**
 * Validate phone number
 */
export const isValidPhone = (phone) => {
  const regex = /^[0-9]{10}$/
  return regex.test(phone.replace(/[\D]/g, ''))
}

/**
 * Debounce function
 */
export const debounce = (func, delay) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
