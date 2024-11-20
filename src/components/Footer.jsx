import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

export const Footer = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility

  // Toggle the dropdown visibility for mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Column 1: Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="relative group">
                  {" "}
                  {/* Add group class to enable hover for child elements */}
                  <Link onClick={toggleDropdown}
                    className="hover:text-yellow-500 transition-colors py-3"
                  >
                    About Us
                  </Link>
                  {/* Dropdown Menu for desktop */}
                  <div onClick={toggleDropdown}
                    className={`absolute left-16 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ${
                      isDropdownOpen ? "visible opacity-100" : ""
                    }`}
                  >
                    <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-green-500"
                  >
                    About Us
                  </Link>
                    <Link
                      to="/whatwedo"
                      className="block px-4 py-2 hover:bg-green-500"
                    >
                      What We Do
                    </Link>
                    <Link
                      to="/ourmission"
                      className="block px-4 py-2 hover:bg-green-500"
                    >
                      Our Mission
                    </Link>
                    <Link
                      to="/newsletter"
                      className="block px-4 py-2 hover:bg-green-500"
                    >
                      Newsletter
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li className='mt-32'>
                <Link
                  to="/donate"
                  className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg "
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Column 2: Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link
                to="https://facebook.com"
                className="hover:text-yellow-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdFacebook className="text-3xl" /> {/* Facebook Icon */}
              </Link>
              <Link
                to="https://twitter.com"
                className="hover:text-yellow-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle className="text-3xl" />{" "}
                {/* Twitter Icon */}
              </Link>
              <Link
                to="https://instagram.com"
                className="hover:text-yellow-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="text-3xl" /> {/* Instagram Icon */}
              </Link>
              <Link
                to="https://linkedin.com"
                className="hover:text-yellow-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxFill className="text-3xl" /> {/* LinkedIn Icon */}
              </Link>
            </div>
          </div>





          {/* Footer Column 3: Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4">
              Subscribe to our newsletter to receive the latest updates and
              news.
            </p>
            <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-2/3"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-r-md hover:bg-yellow-400 transition-colors w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>


          
        </div>

        {/* Footer Bottom Section (Copyright) */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
