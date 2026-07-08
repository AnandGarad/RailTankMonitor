import { create } from 'zustand'

const useUIStore = create((set) => ({
  sidebarOpen: true,
  darkMode: true,
  notifications: [],

  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }))
  },

  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode }))
  },

  addNotification: (notification) => {
    set((state) => ({
      notifications: [
        {
          ...notification,
          id: Date.now(),
        },
        ...state.notifications,
      ],
    }))
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }))
  },
}))

export default useUIStore
