import { useCallback } from 'react'

/**
 * Custom hook for data export
 * Handles PDF and Excel export functionality
 */
const useExport = () => {
  const exportToJSON = useCallback((data, filename = 'data.json') => {
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }, [])

  const exportToCSV = useCallback((data, filename = 'data.csv') => {
    if (!Array.isArray(data) || data.length === 0) return

    const headers = Object.keys(data[0])
    const csv = [
      headers.join(','),
      ...data.map((row) =>
        headers.map((header) => {
          const value = row[header]
          return typeof value === 'string' && value.includes(',') ? `"${value}"` : value
        }).join(',')
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }, [])

  return {
    exportToJSON,
    exportToCSV,
  }
}

export default useExport
