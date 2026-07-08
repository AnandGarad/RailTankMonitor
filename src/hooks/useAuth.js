import { useEffect } from 'react'
import useAuthStore from '../stores/authStore'
import { authenticateUser } from '../services/apiService'

const useAuth = () => {
  const { isAuthenticated, user, loading, error, login, logout } = useAuthStore()

  const handleLogin = async (email, password) => {
    const result = await login(email, password)
    return result
  }

  return {
    isAuthenticated,
    user,
    loading,
    error,
    login: handleLogin,
    logout,
  }
}

export default useAuth
