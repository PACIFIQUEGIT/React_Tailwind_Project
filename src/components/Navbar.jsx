import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility

  // Toggle the dropdown visibility for mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white py-4 px-1 shadow-md fixed z-50 w-full">
      <div className="flex items-center justify-between mx-0">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-yellow-500">Charity</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition-colors py-3">
            Home
          </Link>
          <div className="relative group py-3">
            {" "}
            {/* Add group class to enable hover for child elements */}
            <Link
              to="/about"
              className="hover:text-yellow-500 transition-colors py-3 "
            >
              About Us
            </Link>
            {/* Dropdown Menu for desktop */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ${
                isDropdownOpen ? "visible opacity-100" : ""
              }`}
            >
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
          <Link
            to="/contact"
            className="hover:text-yellow-500 transition-colors py-3"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="hover:text-yellow-500 transition-colors py-3"
          >
           Login
          </Link>
          <Link
            to="/donate"
            className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex items-center p-1">
          <button onClick={toggleMobileMenu} className="text-white p-2">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-800 text-white flex flex-col items-start w-full py-2">
          <Link
            onClick={toggleMobileMenu}
            to="/"
            className="hover:text-yellow-500 transition-colors py-3"
          >
            Home
          </Link>
          <div className="relative group">
            {" "}
            {/* Add group class to enable hover for child elements */}
            <Link
              onClick={toggleMobileMenu}
              to="/about"
              className="hover:text-yellow-500 transition-colors py-3"
            >
              About Us
            </Link>
            {/* Dropdown Menu for desktop */}
            <div
              className={`absolute left-16 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ${
                isDropdownOpen ? "visible opacity-100" : ""
              }`}
            >
              <Link
                onClick={toggleMobileMenu}
                to="/whatwedo"
                className="block px-4 py-2 hover:bg-green-500"
              >
                What We Do
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/ourmission"
                className="block px-4 py-2 hover:bg-green-500"
              >
                Our Mission
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/newsletter"
                className="block px-4 py-2 hover:bg-green-500"
              >
                Newsletter
              </Link>
            </div>
          </div>
          <Link
            onClick={toggleMobileMenu}
            to="/contact"
            className="hover:text-yellow-500 transition-colors py-3"
          >
            Contact Us
          </Link>
          <Link
            onClick={toggleMobileMenu}
            to="/donate"
            className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg"
          >
            Donate
          </Link>
        </div>
      )}
      {isDropdownOpen && (
        <div className="sm:hidden bg-gray-800 text-white flex flex-col items-center w-full py-2">
          <Link
            onClick={toggleMobileMenu}
            to="/whatwedo"
            className="block px-4 py-2 hover:bg-green-500"
          >
            What We Do
          </Link>
          <Link
            onClick={toggleMobileMenu}
            to="/ourmission"
            className="block px-4 py-2 hover:bg-green-500"
          >
            Our Mission
          </Link>
          <Link
            onClick={toggleMobileMenu}
            to="/newsletter"
            className="block px-4 py-2 hover:bg-green-500"
          >
            Newsletter
          </Link>
        </div>
      )}
    </div>
  );
};
