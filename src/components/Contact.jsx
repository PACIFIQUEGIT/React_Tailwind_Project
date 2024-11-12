import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiSkypeLogoFill } from "react-icons/pi";

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="flex flex-col md:flex-row bg-black p-11 px-24">
      {/* Left Side */}
      <div className="left w-full md:w-1/2 text-white">
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

        <div className="flex pt-4">
          <span className="text-green-500 mr-4">
            <FaFacebookF size={20} />
          </span>
          <span className="text-green-500 mr-4">
            <FaLinkedinIn size={20} />
          </span>
          <span className="text-green-500 mr-4">
            <PiSkypeLogoFill size={20} />
          </span>
          <span className="text-green-500 mr-4">
            <FaTwitter size={20} />
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="right w-full md:w-1/2 px-12">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between pb-5">
            <input
              className="h-12 w-[49%] px-3 rounded-lg"
              type="text"
              placeholder="Name*"
              required
            />
            <input
              className="h-12 w-[49%] px-3 rounded-lg"
              type="text"
              placeholder="Last Name*"
              required
            />
          </div>
          <div className="flex justify-between pb-5">
            <input
              className="h-12 w-[49%] px-3 rounded-lg"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              className="h-12 w-[49%] px-3 rounded-lg"
              type="tel"
              placeholder="Phone*"
              required
            />
          </div>
          <div className="flex justify-between pb-5">
            <input
              className="h-12 w-full px-3 rounded-lg"
              type="text"
              placeholder="Subject*"
              required
            />
          </div>
          <div className="pb-5">
            <textarea
              className="w-full h-28 p-3 rounded-lg"
              placeholder="Message*"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white px-5 py-3 rounded-lg"
            >
              <b>SUBMIT NOW</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
