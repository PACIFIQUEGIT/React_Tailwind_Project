// Payment.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

export const Payment = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className='font-bold text-lg'>Select Payment Method:</h1>
        <div><Link to="card"><u>Pay with Card</u></Link></div>  
        <div><Link to="#"><u>Pay with PayPal</u></Link></div>  
        <div className='h-[300px] w-[500px] border mb-'>
          <Outlet /> 
        </div>
        <div className='flex justify-center mt-2'><FaCcVisa className='text-[50px] mr-5' /> <FaCcMastercard className='text-[50px] mr-5' /> <FaCcPaypal className='text-[50px] mr-5' /></div>
        <div className='flex justify-center mb-2'><p>Your payment is safe, secure, and fast with us.</p></div>
      </div>
    </div>
  );
};
