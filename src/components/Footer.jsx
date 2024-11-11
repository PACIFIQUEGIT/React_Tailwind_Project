import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Footer Column 1: Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
              <li><a href="/donate" className="hover:text-yellow-500 transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Footer Column 2: Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square text-2xl"></i> {/* Facebook Icon */}
              </a>
              <a href="https://twitter.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl"></i> {/* Twitter Icon */}
              </a>
              <a href="https://instagram.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl"></i> {/* Instagram Icon */}
              </a>
              <a href="https://linkedin.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl"></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>

          {/* Footer Column 3: Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4">Subscribe to our newsletter to receive the latest updates and news.</p>
            <form className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded-l-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button type="submit" className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-r-md hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section (Copyright) */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
