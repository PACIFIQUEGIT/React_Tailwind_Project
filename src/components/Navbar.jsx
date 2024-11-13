import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility

  // Toggle the dropdown visibility for mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-900 text-white p-4 shadow-md fixed w-full z-40">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-yellow-500">Charity</span>
        </div>

        {/* Links */}
        <div className="flex space-x-6 relative items-center">
          {/* Home link */}
          <Link to="/" className="hover:text-yellow-500 transition-colors py-3">Home</Link>

          {/* About link with dropdown */}
          <div className="relative group"> {/* Add group class to enable hover for child elements */}
            <Link 
              to="/about" 
              className="hover:text-yellow-500 transition-colors py-3"
            >
              About Us
            </Link>

            {/* Dropdown Menu for desktop */}
            <div 
              className={`absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ${isDropdownOpen ? 'visible opacity-100' : ''}`}
            >
              <Link 
                to="#" 
                className="block px-4 py-2 hover:bg-green-500"
              >
                What We Do
              </Link>
              <Link 
                to="#" 
                className="block px-4 py-2 hover:bg-green-500"
              >
                Our Mission
              </Link>
              <Link 
                to="newsletter" 
                className="block px-4 py-2 hover:bg-green-500"
              >
                Newsletter
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <Link to="/contact" className="hover:text-yellow-500 transition-colors py-3">Contact Us</Link>
          <Link to="/donate" className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button 
            onClick={toggleDropdown}
            className="text-white p-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="sm:hidden bg-gray-800 text-white flex flex-col items-center w-full py-2">
          <Link to="#" className="block px-4 py-2 hover:bg-green-500">
            What We Do
          </Link>
          <Link to="#" className="block px-4 py-2 hover:bg-green-500">
            Our Mission
          </Link>
          <Link to="newsletter" className="block px-4 py-2 hover:bg-green-500">
            Newsletter
          </Link>
        </div>
      )}
    </div>
  );
};
