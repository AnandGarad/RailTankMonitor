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
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email === 'admin@railtank.com' && password === 'Admin@123') {
        set({
          isAuthenticated: true,
          user: {
            id: 1,
            name: 'Admin User',
            email,
            role: 'Administrator',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
          },
          loading: false,
        })
        return { success: true }
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (error) {
      set({ error: error.message, loading: false })
      return { success: false, error: error.message }
    }
  },

  logout: () => {
    set({ isAuthenticated: false, user: null })
  },

  updateProfile: async (data) => {
    set((state) => ({
      user: { ...state.user, ...data },
    }))
  },
}))

export default useAuthStore
