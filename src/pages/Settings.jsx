import React from 'react'
import { Save } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import useAuthStore from '../stores/authStore'

const Settings = () => {
  const { user } = useAuthStore()
  const [settings, setSettings] = React.useState({
    theme: 'dark',
    emailNotifications: true,
    pushNotifications: true,
    dataRefresh: '5',
    language: 'en',
  })

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your preferences and system configuration</p>
      </div>

      {/* Profile Settings */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              defaultValue={user?.name || 'Admin User'}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              defaultValue={user?.email || 'admin@railtank.com'}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <input
              type="text"
              defaultValue={user?.role || 'Administrator'}
              disabled
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 opacity-50"
            />
          </div>
        </div>
      </Card>

      {/* Display Settings */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Display Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Data Refresh Interval (seconds)</label>
            <input
              type="number"
              value={settings.dataRefresh}
              onChange={(e) => handleChange('dataRefresh', e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-800 transition-all">
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleChange('emailNotifications', e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-400">Receive alerts via email</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-800 transition-all">
            <input
              type="checkbox"
              checked={settings.pushNotifications}
              onChange={(e) => handleChange('pushNotifications', e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-400">Receive push alerts on your device</p>
            </div>
          </label>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex gap-3">
        <Button variant="primary" size="lg" onClick={handleSave}>
          <Save size={20} />
          Save Settings
        </Button>
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default Settings
