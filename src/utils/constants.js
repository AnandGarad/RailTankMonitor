// Color constants
export const COLORS = {
  primary: '#06B6D4',
  secondary: '#1E293B',
  bgDark: '#0F172A',
  cardDark: '#1E293B',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
  gray: '#64748B',
  lightGray: '#E2E8F0',
}

// Status constants
export const STATUS = {
  OPERATIONAL: 'operational',
  OFFLINE: 'offline',
  WARNING: 'warning',
  CRITICAL: 'critical',
  MAINTENANCE: 'maintenance',
}

// Health constants
export const HEALTH = {
  NORMAL: 'normal',
  WARNING: 'warning',
  CRITICAL: 'critical',
}

// Alert types
export const ALERT_TYPES = {
  LOW_WATER: 'low_water',
  HIGH_WATER: 'high_water',
  SENSOR_OFFLINE: 'sensor_offline',
  GPS_OFFLINE: 'gps_offline',
  HIGH_TEMP: 'high_temp',
  LOW_TEMP: 'low_temp',
  PRESSURE_WARNING: 'pressure_warning',
  VALVE_ERROR: 'valve_error',
}

// Alert severity levels
export const ALERT_SEVERITY = {
  INFO: 'info',
  WARNING: 'warning',
  CRITICAL: 'critical',
}

// Train status
export const TRAIN_STATUS = {
  IN_TRANSIT: 'in_transit',
  AT_STATION: 'at_station',
  STOPPED: 'stopped',
  DELAYED: 'delayed',
  MAINTENANCE: 'maintenance',
}

// Valve positions
export const VALVE_POSITIONS = {
  OPEN: 'open',
  CLOSED: 'closed',
  PARTIAL: 'partial',
}

// Routes
export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  LIVE_TRAIN: '/live-train',
  TANKERS: '/tankers',
  TANKER_DETAILS: '/tanker/:id',
  ANALYTICS: '/analytics',
  REPORTS: '/reports',
  ALERTS: '/alerts',
  SENSORS: '/sensors',
  SETTINGS: '/settings',
}

// Default map center (Mumbai)
export const DEFAULT_MAP_CENTER = {
  lat: 19.0760,
  lng: 72.8777,
}

// Train route (Mumbai to Pune)
export const TRAIN_ROUTE = [
  { lat: 19.0760, lng: 72.8777, name: 'Mumbai Central' },
  { lat: 19.0822, lng: 72.8585, name: 'Dadar' },
  { lat: 19.1136, lng: 72.8697, name: 'Bandra' },
  { lat: 19.1458, lng: 72.8250, name: 'Borivali' },
  { lat: 19.2185, lng: 72.9781, name: 'Virar' },
  { lat: 19.5625, lng: 73.0097, name: 'Nashik Road' },
  { lat: 18.5204, lng: 73.8567, name: 'Pune Junction' },
]

// Update intervals (in milliseconds)
export const UPDATE_INTERVALS = {
  GPS: 5000,
  WATER_LEVEL: 10000,
  TEMPERATURE: 15000,
  PRESSURE: 15000,
  ALERTS: 10000,
}

// Tanker capacity (in liters)
export const TANKER_CAPACITY = 500

// Total tankers
export const TOTAL_TANKERS = 100
