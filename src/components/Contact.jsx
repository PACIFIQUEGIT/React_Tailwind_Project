import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiSkypeLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
      <div className="bg-gray-900 text-white p-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">Charity</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-yellow-500 transition-colors py-3">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors py-3">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors py-3">Contact</Link>
            <Link to="/donate" className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-black p-11 m-10 md:px-24">
        {/* Left Side */}
        <div className="left w-full md:w-1/2 text-white mb-8 md:mb-0">
          <h1 className="font-bold text-[25px] mb-5">Want to get involved?</h1>

          <div className="flex items-center my-5">
            <div className="icon text-white bg-green-500 rounded-full p-3">
              <FaPhoneAlt size={20} />
            </div>
            <div className="text-lg pl-2 pt-2">
              <b>New York</b>: 1800-2355-2356
            </div>
          </div>

          <div className="flex items-center my-5">
            <div className="icon text-white bg-green-500 rounded-full p-3">
              <HiOutlineMailOpen size={20} />
            </div>
            <div className="text-lg pl-2 pt-2">contact@Chariti.theme</div>
          </div>

          <hr className="bg-green-500 h-1 my-5" />
          <p className="text-gray-300">Box 3233</p>
          <p className="text-gray-300">1810 Kings Way</p>
          <p className="text-gray-300">King Street, 5th Avenue, New York</p>

          <div className="flex pt-4 space-x-4">
            <span className="text-green-500">
              <FaFacebookF size={20} />
            </span>
            <span className="text-green-500">
              <FaLinkedinIn size={20} />
            </span>
            <span className="text-green-500">
              <PiSkypeLogoFill size={20} />
            </span>
            <span className="text-green-500">
              <FaTwitter size={20} />
            </span>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="right w-full md:w-1/2 px-12">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between gap-4 pb-5">
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="text"
                placeholder="Name*"
                required
              />
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="text"
                placeholder="Last Name*"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 pb-5">
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="tel"
                placeholder="Phone*"
                required
              />
            </div>

            <div className="flex flex-col pb-5">
              <input
                className="h-12 w-full px-3 rounded-lg"
                type="text"
                placeholder="Subject*"
                required
              />
            </div>

            <div className="flex flex-col pb-5">
              <textarea
                className="w-full h-28 p-3 rounded-lg"
                placeholder="Message*"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-3 rounded-lg w-full md:w-auto"
              >
                <b>SUBMIT NOW</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
