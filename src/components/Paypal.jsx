import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Paypal = () => {
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
      

      <div className="p-12 max-w-xl mx-auto">

          <div className=''>
            <button type="submit" className="bg-green-500 text-white px-6 py-3 w-full md:w-auto rounded-lg font-bold">
              <b>PayPal</b>
            </button>
          </div>
        
      </div>
    </>
  );
};
