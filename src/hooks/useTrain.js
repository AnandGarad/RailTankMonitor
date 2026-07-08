import { useEffect } from 'react'
import useTrainStore from '../stores/trainStore'

/**
 * Custom hook for train data
 * Simulates real-time train position and status updates
 */
const useTrain = () => {
  const { train, updateTrainPosition, updateTrainStatus, updateMetrics } = useTrainStore()

  // Simulate GPS updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newLat = train.latitude + (Math.random() - 0.5) * 0.001
      const newLon = train.longitude + (Math.random() - 0.5) * 0.001
      const newSpeed = Math.max(0, Math.min(120, train.speed + (Math.random() - 0.5) * 5))
      const newHeading = (train.heading + Math.random() * 10) % 360

      updateTrainPosition(newLat, newLon, newSpeed, newHeading)
    }, 5000)

    return () => clearInterval(interval)
  }, [train, updateTrainPosition])

  return {
    train,
    updateTrainPosition,
    updateTrainStatus,
  }
}

export default useTrain
