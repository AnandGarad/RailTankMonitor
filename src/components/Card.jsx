import React from 'react'

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-card-dark rounded-lg p-6 border border-gray-700/50 shadow-lg ${
        hover ? 'hover:border-gray-600/50 hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
