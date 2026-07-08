import React from 'react'
import { Download, Filter, Calendar } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import useExport from '../hooks/useExport'

const Reports = () => {
  const { exportToJSON, exportToCSV } = useExport()
  const [reports] = React.useState([
    {
      id: 1,
      name: 'Monthly Water Consumption Report',
      date: '2024-07-01',
      type: 'pdf',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'System Performance Analysis',
      date: '2024-06-30',
      type: 'excel',
      size: '1.8 MB',
    },
    {
      id: 3,
      name: 'Quarterly Audit Report',
      date: '2024-06-28',
      type: 'pdf',
      size: '3.1 MB',
    },
  ])

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Reports</h1>
        <p className="text-gray-400">Generate and download system reports</p>
      </div>

      {/* Generate Report */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Generate New Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Report Type</label>
            <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>Monthly Consumption</option>
              <option>Quarterly Analysis</option>
              <option>Annual Summary</option>
              <option>System Performance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Date Range</label>
            <input
              type="date"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex items-end gap-2">
            <Button variant="primary" className="flex-1">
              <Download size={18} />
              Generate Report
            </Button>
          </div>
        </div>
      </Card>

      {/* Reports List */}
      <Card>
        <h2 className="text-xl font-bold mb-6">Previous Reports</h2>
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all">
              <div className="flex-1">
                <p className="font-semibold">{report.name}</p>
                <p className="text-sm text-gray-400">{report.date} • {report.size}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  report.type === 'pdf' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'
                }`}>
                  {report.type.toUpperCase()}
                </span>
                <Button variant="ghost" size="sm">
                  <Download size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Reports
