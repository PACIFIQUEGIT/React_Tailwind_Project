import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export const Payment = () => {
  // State to handle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-gray-900 text-white p-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">Charity</span>
          </div>
          <div className="flex space-x-6">
            <Link className="hover:text-yellow-500 transition-colors py-3">Home</Link>
            <Link className="hover:text-yellow-500 transition-colors py-3">About</Link>
            <Link className="hover:text-yellow-500 transition-colors py-3">Contact</Link>
            <Link className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-6">
        <div className="w-full max-w-3xl text-center">
          {/* Custom Dropdown for Payment Method */}
          <div className="space-y-3 mb-5">
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-left focus:outline-none">
                Choose Payment Method
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute top-0 left-[64%] bg-white shadow-lg rounded-lg">
                  <div className="py-2">
                    <Link onClick={toggleDropdown}  to="card" className="block py-2 text-blue-500 hover:bg-gray-200">Pay with Card</Link>
                    <Link onClick={toggleDropdown}  to="#" className="block py-2 text-blue-500 hover:bg-gray-200">Pay with PayPal</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Payment Card Section */}
          <div className="h-[300px] w-full max-w-md mx-auto border bg-gray-800 p-4 mb-4">
            <Outlet />
          </div>

          {/* Payment Icons */}
          <div className="flex justify-center space-x-5 mb-4">
            <FaCcVisa className="text-[50px] text-blue-600" />
            <FaCcMastercard className="text-[50px] text-blue-700" />
            <FaCcPaypal className="text-[50px] text-blue-500" />
          </div>

          {/* Payment Assurance Text */}
          <div className="flex justify-center mb-4">
            <p>Your payment is safe, secure, and fast with us.</p>
          </div>
        </div>
      </div>
    </>
  );
};
