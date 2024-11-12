import React, { useState } from 'react';

export const Card = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [pin, setPin] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log({cardNumber});
  };

  return (
    <>
    
    <div className='p-5'>
        <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input 
            className='text-black border border-black w-full h-12 px-3'
            placeholder='Card Number' 
            type="text" 
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required 
          />
        </div>
        <div className='mb-3'>
          <input 
            className='text-black border border-black w-full h-12 px-3'
            placeholder='Pin' 
            type="text" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required 
          />
        </div>
        <div className='mb-3'>
          <input 
            className='text-black border border-black w-full h-12 px-3'
            placeholder='Expiration date' 
            type="text" 
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required 
          />
        </div>

        <div>
          <button type="submit" className='bg-green-500 text-white px-5 py-3'>
            <b>PAY</b>
          </button>
        </div>
        </form>
    </div>
    </>
  )
}
