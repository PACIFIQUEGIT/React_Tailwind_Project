import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

export const Volunteer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-300 p-11 px-12">
      {/* Left Side */}
      <div className="left p-7 px-12 bg-green-500 w-full md:w-1/2 text-white">
        <h1 className='bg-white w-7 h-1'></h1>
        <h1 className="font-bold text-[25px] mb-5">Interested to get involved?</h1>

        <p className="text-gray-300">Box 3233</p>
        <p className="text-gray-300">1810 Kings Way</p>
        <p className="text-gray-300">King Street, 5th Avenue, New York</p>
        <div className="flex items-center mt-3">
          <div className="icon text-white mr-2">
            <FaPhoneAlt size={20} />
          </div>
          <div className="text-lg pl-2 pt-2">
            New York: 1800-2355-2356
          </div>
        </div>
        <div className="flex items-center">
          <div className="icon text-white mr-2">
            <IoMdTime size={20} />
          </div>
          <div className="text-lg pl-2 pt-2">
            Mon - Fri: 8:00 am - 6:00 pm
          </div>
        </div>

        <div className="flex items-center">
          <div className="icon text-white mr-2">
            <HiOutlineMailOpen size={20} />
          </div>
          <div className="text-lg pl-2 pt-2">contact@Chariti.theme</div>
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
