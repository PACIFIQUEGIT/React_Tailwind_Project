// Payment.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

export const Payment = () => {
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

      <div className="flex justify-center p-6">
        <div className="w-full max-w-3xl text-center">
          <h1 className="font-bold text-lg mb-4">Select Payment Method:</h1>

          {/* Payment Links */}
          <div className="space-y-3 mb-6">
            <Link to="card" className="text-blue-500 hover:underline">Pay with Card</Link>
            <Link to="#" className="text-blue-500 hover:underline">Pay with PayPal</Link>
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
