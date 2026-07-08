import useNotifications from './useNotifications'

const useExport = () => {
  const { showSuccess, showError } = useNotifications()

  const exportToJSON = (data, filename = 'export.json') => {
    try {
      const dataStr = JSON.stringify(data, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      link.click()
      showSuccess('Data exported successfully')
    } catch (error) {
      showError('Failed to export data')
    }
  }

  const exportToCSV = (data, filename = 'export.csv') => {
    try {
      let csv = ''
      if (Array.isArray(data) && data.length > 0) {
        const headers = Object.keys(data[0])
        csv = headers.join(',') + '\n'
        data.forEach((row) => {
          csv += headers.map((h) => row[h]).join(',') + '\n'
        })
      }
      const dataBlob = new Blob([csv], { type: 'text/csv' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      link.click()
      showSuccess('Data exported successfully')
    } catch (error) {
      showError('Failed to export data')
    }
  }

  return { exportToJSON, exportToCSV }
}

export default useExport
