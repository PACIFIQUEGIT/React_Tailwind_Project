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
          <h1 className="font-bold mt-5 pb-2 text-[20px]">Current Newsletter</h1>
          <div className='w-full flex justify-center px-7'>
            <div className='flex w-full sm:flex-row'>
              <div>
              <Link to='/pdf'>
              <div className='h-32 w-96 bg-yellow-500 flex justify-center border mr-3 hover:shadow-lg transition-all'>
                <p className='self-center'>Current Newsletter</p>
              </div>
              </Link>
              <p><u>People who have been suffering with hunger <br /> 10 September, 2023</u></p>
              </div>
              <div>
              <Link to='/pdf'>
              <div className='h-32 w-96 bg-yellow-500 flex justify-center border mr-3 hover:shadow-lg transition-all'>
                <p className='self-center'>Current Newsletter</p>
              </div>
              </Link>
              <p><u>People who have gotten help <br /> 2nd November, 2023</u></p>
              </div>
            </div>
          </div>

          <hr className='bg-yellow-500 h-1 mt-8' />

          <h1 className="font-bold mt-8 pb-2 text-[20px]">Old Newsletter</h1>
          <div className='w-full flex justify-center px-7'>
            <div className='flex w-full sm:flex-row'>
              <div>
              <Link to='/pdf'>
              <div className='h-32 w-96 bg-gray-200 flex justify-center border mr-3 hover:shadow-lg transition-all'>
                <p className='self-center'>Old Newsletter</p>
              </div>
              </Link>
              <p><u>People who have been suffering with hunger <br /> 10 September, 2023</u></p>
              </div>
              <div>
              <Link to='/pdf'>
              <div className='h-32 w-96 bg-gray-200 flex justify-center border mr-3 hover:shadow-lg transition-all'>
                <p className='self-center'>Old Newsletter</p>
              </div>
              </Link>
              <p><u>People who have gotten help <br /> 2nd November, 2023</u></p>
              </div>
            </div>
          </div>

      </div>


    </>
  )
}
