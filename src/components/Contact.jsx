import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiSkypeLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
    
    <div className="left">
      <h1 className='font-bold text-[25px]'>Want to get involved?</h1>
      <div className='flex my-5'>
          <div className="icon text-white bg-green-500 rounded-full p-3"><FaPhoneAlt /></div>
          <div className="h1 text-lg pl-2 pt-2"><b>New York</b> : 1800-2355-2356</div>
      </div>
      <div className='flex my-5'>
          <div className="icon text-white bg-green-500 rounded-full p-3"><HiOutlineMailOpen /></div>
          <div className="h1 text-lg pl-2 pt-2">contact@Chariti.theme</div>
      </div>
      <hr className='bg-green-500 h-1' />
      <p className='text-gray-200'>Box 3233</p>
      <p className='text-gray-200'>1810 Kings Way</p>
      <p className='text-gray-200'>King Street, 5th Avenue, New York</p>
      <div className='flex p-4'><span className='text-green-500 mr-4'><FaFacebookF /></span> <span className='text-green-500 mr-4'><FaLinkedinIn /></span> <span className='text-green-500 mr-4'><PiSkypeLogoFill /></span> <span className='text-green-500 mr-4'><FaTwitter /></span> </div>
    </div>
    <div className="right"></div>

    </>
  )
}
