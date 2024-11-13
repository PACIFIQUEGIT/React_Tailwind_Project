import React from 'react'
import { Link } from 'react-router-dom';

export const Newsletter = () => {
  return (
    <>
    
    <div className="bg-gray-900 text-white p-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">Charity</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-500 transition-colors py-3">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors py-3">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors py-3">Contact</Link>
            <Link to="/donate" className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
          </div>
        </div>
      </div>

      <div className="right p-5">
          <h1 className="font-bold text-[20px]">Newsletter</h1>
          <h1 className="bg-green-500 w-7 h-1"></h1>
          <h1 className="font-bold mt-5 pb-2 text-[20px]">Old Newsletter</h1>
          <div className='w-full flex justify-center px-7'>
            <div className='flex w-full justify-between sm:flex-row'>
              <Link to='/pdf' className='h-32 w-1/2 border mr-3 hover:shadow-lg transition-all'>
                People who have been suffering with hunger <br /> <br /> 10 September, 2023
              </Link>
              <Link to='/pdf' className='h-32 w-1/2 border mr-3 hover:shadow-lg transition-all'>
                People who have gotten help <br /> <br /> 2nd November, 2023
              </Link>
              <Link to='/pdf' className='h-32 w-1/2 border mr-3 hover:shadow-lg transition-all'>
                #
              </Link>
            </div>
          </div>

          <h1 className="font-bold mt-12 pb-2 text-[20px]">Recent Newsletter</h1>
          <div className='w-full flex justify-center mb-5 px-7'>
            <div className='flex w-full justify-between'>
              <Link to='pdf' className='h-32 w-1/3 border mr-3 hover:shadow-lg transition-all'>
                People who have been suffering with hunger <br /> <br /> 10 September, 2023
              </Link>
              <Link to='pdf' className='h-32 w-1/3 border mr-3 hover:shadow-lg transition-all'>
                People who have gotten help <br /> <br /> 2nd November, 2023
              </Link>
              <Link to='pdf' className='h-32 w-1/3 border mr-3 hover:shadow-lg transition-all'>
                #
              </Link>
            </div>
          </div>

      </div>


    </>
  )
}
