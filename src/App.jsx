import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useAuthStore from './stores/authStore'

// Pages
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import LiveTrain from './pages/LiveTrain'
import Tankers from './pages/Tankers'
import TankerDetails from './pages/TankerDetails'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'
import AlertsPage from './pages/AlertsPage'
import Sensors from './pages/Sensors'
import Settings from './pages/Settings'

// Layout
import DashboardLayout from './layouts/DashboardLayout'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? children : <Navigate to="/login" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/live-train" element={<LiveTrain />} />
          <Route path="/tankers" element={<Tankers />} />
          <Route path="/tanker/:id" element={<TankerDetails />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
