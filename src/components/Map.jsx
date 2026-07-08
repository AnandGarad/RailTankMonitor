import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { DEFAULT_MAP_CENTER } from '../utils/constants'

const Map = ({ markers = [], center = DEFAULT_MAP_CENTER, zoom = 13, height = '400px' }) => {
  return (
    <div style={{ height, borderRadius: '8px', overflow: 'hidden' }} className="border border-gray-700/50">
      <MapContainer center={[center.lat, center.lng]} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={[marker.lat, marker.lng]}>
            <Popup>{marker.name || `Marker ${idx + 1}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
