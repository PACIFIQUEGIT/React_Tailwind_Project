import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export const Donate = () => {
  const navigate = useNavigate();
  
  // State to track form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [amount, setAmount] = useState(50);  // Default amount

  // Update donation amount when buttons are clicked
  const handleAmountClick = (amount) => {
    setAmount(amount);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    navigate('/payment');
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

      <div className="flex justify-center pt-2 p-5">
        <div className="flex flex-wrap justify-center  space-x-3">
          {/* Donation amount buttons */}
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => handleAmountClick(50)}
          >
            $50
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => handleAmountClick(100)}
          >
            $100
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => handleAmountClick(500)}
          >
            $500
          </button>
    </div>
      </div>

      <div className="flex flex-col md:flex-row pt-0 p-5 space-y-5 md:space-y-0 md:space-x-10">
        {/* Left Side (Form) */}
        <div className="w-full md:w-[60%] p-5 bg-white rounded-lg shadow-lg">
          <h1 className="font-bold text-[20px] mb-4">
            Your contributions help us sustain our mission and reach more people in need.
          </h1>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-3">
          <input 
                className="text-black border border-black w-full h-12 px-3 rounded"
                placeholder="First Name"
            type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </div>
            <div className="mb-3">
          <input 
                className="text-black border border-black w-full h-12 px-3 rounded"
                placeholder="Last Name"
            type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />
        </div>
            <div className="mb-3">
          <input 
                className="text-black border border-black w-full h-12 px-3 rounded"
                placeholder="Email"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
            <div className="mb-3">
          <input 
                className="text-black border border-black w-full h-12 px-3 rounded"
                placeholder="Country"
            type="text" 
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required 
          />
        </div>
            <div className="mb-3">
          <select 
                className="text-black border border-black h-12 px-3 w-full rounded"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="" disabled>Select City</option>
            <option value="Kigali">Kigali</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Dar Es Salaam">Dar Es Salaam</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Accra">Accra</option>
          </select>
        </div>

            <div className="mb-3">
          <input 
                className="text-black border border-black w-full h-12 px-3 rounded"
                type="number"
            value={amount}
                onChange={(e) => setAmount(e.target.value)}
            required 
          />
        </div>
        
        <div>
              <button type="submit" className="bg-green-500 text-white px-5 py-3 rounded w-full">
            <b>DONATE NOW</b>
          </button>
        </div>
      </form>
    </div>

        {/* Right Side (Why Donate?) */}
        <div className="w-full md:w-[40%] text-white p-5 bg-green-500 rounded-lg shadow-lg">
          <h1 className="text-[35px] font-bold mb-5">Why Donate?</h1>
          <p className="mb-3">
            Your donations support our ongoing efforts to provide clean water, education, and healthcare to communities in need.
          </p>
          <p className="mb-3">
            With your help, we can continue to make a significant impact and improve lives around the world.
          </p>
          <p className="mb-3">
            Every contribution, no matter the size, makes a difference. Thank you for your generosity and support.
          </p>
        </div>
      </div>
    </>
  );
};
