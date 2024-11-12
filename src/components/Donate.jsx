import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="flex justify-center p-5">
        <div className="flex justify-end mb-3">
          {/* Donation amount buttons */}
          <button
            className="mr-5 bg-gray-300 px-4 py-2 rounded"
            onClick={() => handleAmountClick(50)}
          >
            $50
          </button>
          <button
            className="mr-5 bg-gray-300 px-4 py-2 rounded"
            onClick={() => handleAmountClick(100)}
          >
            $100
          </button>
          <button
            className="mr-5 bg-gray-300 px-4 py-2 rounded"
            onClick={() => handleAmountClick(500)}
          >
            $500
          </button>
        </div>
      </div>

      <div className="flex justify-between p-5">
        <div className="px-5 w-[60%]">
          <h1 className="font-bold text-[20px] mb-2">
            Your contributions help us sustain our mission and reach more people in need.
          </h1>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="text-black border border-black w-full h-12 px-3"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="text-black border border-black w-full h-12 px-3"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="text-black border border-black w-full h-12 px-3"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="text-black border border-black w-full h-12 px-3"
                placeholder="Country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="text-black border border-black h-12 px-3"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="Kigali">Kigali</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Dar Es Salaam">Dar Es Salaam</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Accra">Accra</option>
              </select>
            </div>

            <div className="mb-3">
              {/* The amount input should allow updates manually */}
              <input
                className="text-black border border-black w-full h-12 px-3"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <div>
              <button type="submit" className="bg-green-500 text-white px-5 py-3">
                <b>DONATE NOW</b>
              </button>
            </div>
          </form>
        </div>

        <div>
          <h1 className="text-[35px] mb-5">Why Donate?</h1>
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
