import { useEffect, useCallback } from 'react'
import useAuthStore from '../stores/authStore'

/**
 * Custom hook for authentication
 * Provides login, logout, and user state
 */
const useAuth = () => {
  const { isAuthenticated, user, loading, error, login, logout, updateProfile } = useAuthStore()

  const handleLogin = useCallback(async (email, password) => {
    return await login(email, password)
  }, [login])

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  return {
    isAuthenticated,
    user,
    loading,
    error,
    login: handleLogin,
    logout: handleLogout,
    updateProfile,
  }
}

export default useAuth
