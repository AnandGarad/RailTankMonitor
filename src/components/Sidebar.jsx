import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Train,
  Droplet,
  BarChart3,
  FileText,
  AlertCircle,
  Zap,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react'
import useAuthStore from '../stores/authStore'
import { ROUTES } from '../utils/constants'

const Sidebar = ({ isOpen }) => {
  const location = useLocation()
  const { logout } = useAuthStore()

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { icon: Train, label: 'Live Train', path: ROUTES.LIVE_TRAIN },
    { icon: Droplet, label: 'Tankers', path: ROUTES.TANKERS },
    { icon: BarChart3, label: 'Analytics', path: ROUTES.ANALYTICS },
    { icon: FileText, label: 'Reports', path: ROUTES.REPORTS },
    { icon: AlertCircle, label: 'Alerts', path: ROUTES.ALERTS },
    { icon: Zap, label: 'Sensors', path: ROUTES.SENSORS },
    { icon: Settings, label: 'Settings', path: ROUTES.SETTINGS },
  ]

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-card-dark border-r border-gray-700/50 transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
        <div className={`flex items-center gap-3 ${!isOpen && 'justify-center w-full'}`}>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold">
            RT
          </div>
          {isOpen && <span className="font-bold text-lg">Rail Tank</span>}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary/20 text-primary border-l-4 border-primary'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <Icon size={20} />
              {isOpen && <span>{item.label}</span>}
              {isOpen && isActive && <ChevronRight className="ml-auto" size={18} />}
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-all"
          title={!isOpen ? 'Logout' : ''}
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
