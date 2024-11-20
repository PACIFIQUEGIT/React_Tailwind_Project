// Volunteer.jsx
import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Volunteer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
      <div className="bg-gray-900 text-white p-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">Charity</span>
          </div>
          <div className="flex space-x-6">
            <Link  className="hover:text-yellow-500 transition-colors py-3">Home</Link>
            <Link  className="hover:text-yellow-500 transition-colors py-3">About</Link>
            <Link  className="hover:text-yellow-500 transition-colors py-3">Contact</Link>
            <Link  className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-gray-300 p-6 md:p-12">
        {/* Left Side */}
        <div className="left p-7 px-12 bg-green-500 w-full md:w-1/2 text-white">
            <h1 className="bg-white w-7 h-1 mb-4"></h1>
            <h1 className="font-bold text-[25px] mb-5">Give your hand</h1>
            <h1 className="font-bold text-[25px] mb-5">
              Become a Volunteer Today!
            </h1>
            <p className="mb-7">
              Your time, skills, and ideas can create a lasting impact.
              Together, we can build stronger communities, bring hope, and make
              the world a better place. Take the first step toward making a
              difference because every hand matters.
              <br />
              <br />
              Whether it’s a few hours a week or a single act of kindness, your
              contribution can spark change, inspire others, and leave a legacy
              of compassion. Join us and be a part of something extraordinary
              because together, we can achieve the unimaginable.
            </p>
          </div>

        {/* Right Side (Form Section) */}
        <div className="right w-full md:w-1/2 lg:mt-0 mt-4 md:px-12">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between pb-5 space-y-4 md:space-y-0">
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

            <div className="flex flex-col md:flex-row justify-between pb-5 space-y-4 md:space-y-0">
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
    </>
  );
};
