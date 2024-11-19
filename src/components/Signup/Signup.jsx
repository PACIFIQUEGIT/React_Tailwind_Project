import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-32">
      <div data-aos="zoom-in" className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2">
        <div className="checkout flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
          <div className="left-side flex-none md:w-1/2 relative">
            <img
              src="https://media.istockphoto.com/id/1671142169/vector/web-phishing-illustration-on-mobile-concept.jpg?s=612x612&w=0&k=20&c=XDfAqPBBiHFZCbEqUZognNbY4XTD-XTpacgjmH-Q-sA="
              alt="Cyclist"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h2 className="text-4xl font-bold">Join Us Today</h2>
            </div>
          </div>
          <div className="right-side w-full md:w-1/2 p-8 bg-white">
            <Link to="/#" className="flex items-center mb-6">
              <IoMdArrowBack className="text-primary text-2xl mr-2" />
              <span className="text-green-500 font-semibold">Home</span>
            </Link>

            <h1 className="text-3xl font-bold mb-6">Signup </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-1">
                  FirstName
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-1">
                  LastName
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
             
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <button
                type="button"
                className="bg-primary text-white w-full py-3 rounded-md hover:bg-primary-dark transition duration-300"
              >
                Sign in
              </button>

              <div className="mt-6 text-center">
                <span>Don't have an account?</span>
                <Link
                  to="/Login"
                  className="text-green-500 ml-2 font-semibold hover:text-primary-dark transition duration-300"
                >
                 Login Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
