import React from 'react'

const Loader = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="loader"></div>
    </div>
  )
}

export default Loader
