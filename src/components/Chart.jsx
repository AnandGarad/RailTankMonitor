import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Chart = ({ type = 'bar', data, dataKey, stroke = '#06B6D4', fill = '#06B6D4' }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {type === 'bar' ? (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px' }} />
          <Legend />
          <Bar dataKey={dataKey} fill={fill} radius={[8, 8, 0, 0]} />
        </BarChart>
      ) : (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px' }} />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={stroke} strokeWidth={2} dot={{ fill: stroke }} />
        </LineChart>
      )}
    </ResponsiveContainer>
  )
}

export default Chart
