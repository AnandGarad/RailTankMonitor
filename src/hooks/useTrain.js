import { useEffect, useState } from 'react'
import useTrainStore from '../stores/trainStore'
import { UPDATE_INTERVALS } from '../utils/constants'

const useTrain = () => {
  const { train, updateTrainPosition, updateMetrics } = useTrainStore()

  useEffect(() => {
    const interval = setInterval(() => {
      const newLat = train.latitude + (Math.random() - 0.5) * 0.01
      const newLon = train.longitude + (Math.random() - 0.5) * 0.01
      const newSpeed = Math.max(0, Math.min(120, train.speed + (Math.random() - 0.5) * 5))
      const newHeading = (train.heading + Math.random() * 10) % 360

      updateTrainPosition(newLat, newLon, newSpeed, newHeading)
    }, UPDATE_INTERVALS.GPS)

    return () => clearInterval(interval)
  }, [train, updateTrainPosition])

  return { train }
}

export default useTrain
