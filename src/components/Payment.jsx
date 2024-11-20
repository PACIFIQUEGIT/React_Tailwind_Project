import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const Payment = () => {
  // State to handle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      

      <div className="flex justify-center  p-6">
        <div className="w-full max-w-3xl text-center mt-32">
          {/* Custom Dropdown for Payment Method */}
          <h1 className='font-bold text-[30px] mb-4'>Payment Details</h1>
          <div className='shadow-lg bg-white p-5 mb-5'>
         

          {/* Payment Card Section */}
          <div className="h-[300px] w-full max-w-md mx-auto p-4 mb-4">
            <Outlet />
          </div>
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
