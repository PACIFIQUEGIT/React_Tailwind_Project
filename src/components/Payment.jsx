

import React from "react";
import { Outlet } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Card Container */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-white shadow-lg rounded-3xl overflow-hidden mt-32 sm:mt-32 mb-10">
        {/* Header Section */}
        <div className="bg-green-500 text-white p-6 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Secure Payment
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            Complete your transaction safely and securely.
          </p>
        </div>

        {/* Payment Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Payment Options */}
          <div className="text-center">
            <div className="flex justify-center space-x-4 sm:space-x-8">
              <div className="group flex flex-col items-center cursor-pointer">
                <FaCcVisa className="text-5xl sm:text-6xl text-blue-600 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-600 mt-2">Visa</p>
              </div>
              <div className="group flex flex-col items-center cursor-pointer">
                <FaCcMastercard className="text-5xl sm:text-6xl text-red-600 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-600 mt-2">MasterCard</p>
              </div>
              <div className="group flex flex-col items-center cursor-pointer">
                <FaCcPaypal className="text-5xl sm:text-6xl text-blue-500 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-600 mt-2">PayPal</p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-100 rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              Enter Payment Information
            </h3>
            <form>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-4 sm:p-6 text-center border-t">
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
