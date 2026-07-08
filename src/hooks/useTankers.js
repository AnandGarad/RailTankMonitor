import { useEffect, useState } from 'react'
import useTankerStore from '../stores/tankerStore'

/**
 * Custom hook for tanker data management
 * Handles tanker initialization and updates
 */
const useTankers = () => {
  const { tankers, selectedTanker, initializeTankers, updateAllTankers, setSelectedTanker, getTankerById, searchTankers } = useTankerStore()
  const [filteredTankers, setFilteredTankers] = useState([])

  // Initialize tankers on mount
  useEffect(() => {
    initializeTankers()
  }, [])

  // Simulate water level updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateAllTankers()
    }, 10000)

    return () => clearInterval(interval)
  }, [updateAllTankers])

  useEffect(() => {
    setFilteredTankers(tankers)
  }, [tankers])

  const filterTankers = (criteria) => {
    let filtered = tankers

    if (criteria.health) {
      filtered = filtered.filter((t) => t.health === criteria.health)
    }

    if (criteria.status) {
      filtered = filtered.filter((t) => t.sensorStatus === criteria.status)
    }

    if (criteria.waterRange) {
      const [min, max] = criteria.waterRange
      filtered = filtered.filter((t) => t.waterPercentage >= min && t.waterPercentage <= max)
    }

    setFilteredTankers(filtered)
    return filtered
  }

  const searchTanker = (query) => {
    const results = searchTankers(query)
    setFilteredTankers(results)
    return results
  }

  return {
    tankers,
    filteredTankers,
    selectedTanker,
    setSelectedTanker,
    getTankerById,
    filterTankers,
    searchTanker,
  }
}

export default useTankers
