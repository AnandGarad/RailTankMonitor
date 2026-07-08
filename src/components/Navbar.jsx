import React from 'react'
import { Menu, Bell, User, Search } from 'lucide-react'
import useAuthStore from '../stores/authStore'
import useAlerts from '../hooks/useAlerts'

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuthStore()
  const { activeAlerts } = useAlerts()

  return (
    <nav className="bg-card-dark border-b border-gray-700/50 px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-gray-800 rounded-lg transition-all">
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold hidden md:block">Rail Tank Monitor</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-800/50 rounded-lg px-4 py-2 border border-gray-700/50">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent ml-2 outline-none w-40 text-sm"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-all relative">
            <Bell size={20} />
            {activeAlerts.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
            )}
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-700/50">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-400">{user?.role || 'Admin'}</p>
          </div>
          <img
            src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-primary/50"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
