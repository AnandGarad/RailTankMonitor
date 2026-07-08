import { create } from 'zustand'

const useUIStore = create((set) => ({
  notifications: [],

  addNotification: (notification) => {
    const id = Date.now()
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id, ...notification },
      ],
    }))
    return id
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }))
  },
}))

export default useUIStore
