import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Card = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log({ cardNumber });
  };

  return (
    <>
      

      <div className="p-5 max-w-xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              className="text-black border border-black w-full h-12 px-3 rounded-lg"
              placeholder="Card Number"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required 
            />
          </div>

          <div className="mb-4 flex gap-2">
            <input 
              className="text-black border border-black w-full h-12 px-3 rounded-lg"
              placeholder="Expiry Date (MM/YY)"
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required 
            />
            <input 
              className="text-black border border-black w-full h-12 px-3 rounded-lg"
              placeholder="CVC"
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required 
            />
          </div>

          <div className="mb-4">
            <input 
              className="text-black border border-black w-full h-12 px-3 rounded-lg"
              placeholder="Name on Card"
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required 
            />
          </div>

          <div>
            <button type="submit" className="bg-green-500 text-white px-6 py-3 w-full md:w-auto rounded-lg font-bold">
              <b>Pay</b>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
