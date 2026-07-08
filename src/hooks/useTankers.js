import { useEffect, useState } from 'react'
import useTankerStore from '../stores/tankerStore'
import { UPDATE_INTERVALS } from '../utils/constants'

const useTankers = () => {
  const { tankers, initializeTankers, updateAllTankers, getTankerById, searchTankers } = useTankerStore()
  const [filteredTankers, setFilteredTankers] = useState([])

  useEffect(() => {
    if (tankers.length === 0) {
      initializeTankers()
    }
  }, [])

  useEffect(() => {
    setFilteredTankers(tankers)
  }, [tankers])

  useEffect(() => {
    const interval = setInterval(() => {
      updateAllTankers()
    }, UPDATE_INTERVALS.WATER_LEVEL)

    return () => clearInterval(interval)
  }, [updateAllTankers])

  const filterTankers = (criteria) => {
    let filtered = tankers
    if (criteria.health) {
      filtered = filtered.filter((t) => t.health === criteria.health)
    }
    if (criteria.status) {
      filtered = filtered.filter((t) => t.sensorStatus === criteria.status)
    }
    setFilteredTankers(filtered)
  }

  const searchTanker = (query) => {
    const results = searchTankers(query)
    setFilteredTankers(results)
  }

  return {
    tankers,
    filteredTankers,
    filterTankers,
    searchTanker,
    getTankerById,
  }
}

export default useTankers
