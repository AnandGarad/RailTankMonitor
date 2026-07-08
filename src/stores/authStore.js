import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null })
    try {
      // Simulate API call
      if (email === 'admin@railtank.com' && password === 'Admin@123') {
        const userData = {
          id: 1,
          name: 'Admin User',
          email: email,
          role: 'admin',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
          company: 'Rail Tank Logistics',
        }
        set({ isAuthenticated: true, user: userData, loading: false })
        return true
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      set({ error: error.message, loading: false })
      return false
    }
  },

  logout: () => {
    set({ isAuthenticated: false, user: null })
  },

  updateProfile: (updates) => {
    set((state) => ({
      user: { ...state.user, ...updates },
    }))
  },
}))

export default useAuthStore
