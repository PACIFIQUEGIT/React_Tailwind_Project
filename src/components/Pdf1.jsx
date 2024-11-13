import React from 'react'
import { Link } from 'react-router-dom';

export const Pdf1 = () => {
  return (
    <>
    <div className="bg-gray-900 text-white p-4 shadow-md">
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      <div className="text-2xl font-bold">
        <span className="text-yellow-500">Charity</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-yellow-500 transition-colors py-3">Home</Link>
        <Link to="/about" className="hover:text-yellow-500 transition-colors py-3">About</Link>
        <Link to="/contact" className="hover:text-yellow-500 transition-colors py-3">Contact</Link>
        <Link to="/donate" className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
      </div>
    </div>
  </div>
    
  <div className="pdf-viewer-container">
        <embed 
          src="/help.pdf" 
          width="100%" 
          height="800px" 
          type="application/pdf" 
        />
      </div>
    
    </>
  )
}
