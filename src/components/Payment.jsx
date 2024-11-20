


import React from "react";
import { Outlet } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4">
      {/* Card Container */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl overflow-hidden mt-32 mb-10">
        {/* Header Section */}
        <div className="bg-green-500 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Secure Payment</h1>
          <p className="text-sm opacity-90">
            Complete your transaction safely and securely.
          </p>
        </div>

        {/* Payment Content */}
        <div className="p-8 space-y-8">
          {/* Payment Options */}
          <div className="text-center">
          
            <div className="flex justify-center space-x-8">
              <div className="group flex flex-col items-center cursor-pointer">
                <FaCcVisa className="text-6xl text-blue-600 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-600 mt-2">Visa</p>
              </div>
              <div className="group flex flex-col items-center cursor-pointer">
                <FaCcMastercard className="text-6xl text-red-600 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-600 mt-2">MasterCard</p>
              </div>
              <div className="group flex flex-col items-center cursor-pointer">
                <FaCcPaypal className="text-6xl text-blue-500 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-600 mt-2">PayPal</p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-100 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enter Payment Information
            </h3>
            <Outlet />
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-6 text-center border-t">
          <p className="text-sm text-gray-500">
            Your payment is protected by industry-leading encryption. <br />
            <span className="font-semibold text-gray-700">
              Trusted by thousands of users worldwide.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
