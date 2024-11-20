import React from 'react'
import { Link } from 'react-router-dom';
import { GiHealthCapsule } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiTreeEvergreen } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";

export const Whatwedo = () => {
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
    
    <div className="flex flex-col md:flex-col justify-between px-7 py-[50px]">
        <div className="left">
          <h4 className="flex"><GoDot className="mt-2" /><GoDot className="mt-2" />What we do</h4>
          <div className='flex flex-col items-center justify-center'>
          <h1 className="lg:text-[23px] text-[30px] self-center font-bold my-5">Various things we help in whole world</h1>
          <p className='self-center w-[77%]'>At  our oganization we are committed to making a lasting impact in Rwanda by addressing key social, 
             economic, and environmental challenges. Guided by our mission and vision, we aim to uplift communities, 
             create opportunities, and ensure a brighter future for everyone.
          </p>
          </div>
        </div>
        <div>
        <h1 className="lg:text-[23px] text-[30px] font-bold mt-11 my pr-11">Our Focus Areas</h1>
        <div className="right grid md:grid-cols-3 gap-4 mt-5">
          {/* Top Row Icons */}
          <div className="flex mb-4">
            <div className="ic mr-2"><GoLightBulb className="text-[30px] text-yellow-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Education for All</h4>
              <p className="text-[17px]">We believe in the power of education to transform lives. Our programs focus 
                on increasing access to quality education by constructing schools, providing scholarships, and 
                equipping students with the resources they need to succeed.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><GiHealthCapsule className="text-[30px] text-red-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Healthcare and Wellness</h4>
              <p className="text-[17px]">Ensuring access to healthcare is one of our top priorities. Through health 
                awareness campaigns, mobile clinics, and clean water initiatives, we strive to improve the overall 
                well-being of vulnerable communities.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><GiReceiveMoney className="text-[30px]" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Economic Empowerment</h4>
              <p className="text-[17px]">To fight poverty, we empower individuals and families with vocational 
                training, small business funding, and farming resources. These programs help create sustainable 
                livelihoods and promote financial independence.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><MdOutlineWaterDrop className="text-[30px] text-blue-400" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Water delivery</h4>
              <p className="text-[17px]">Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><PiTreeEvergreen className="text-[30px] text-green-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]"> Environmental Conservation</h4>
              <p className="text-[17px]">Protecting Rwanda’s natural resources is central to our work. We run 
                reforestation projects, advocate for sustainable farming practices, and engage in initiatives that 
                promote environmental awareness and preservation.
              </p>
            </div>
          </div>
          
          <div className="flex mb-4">
            <div className="ic mr-2"><BsHouse className="text-[30px] text-orange-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Emergency Relief</h4>
              <p className="text-[17px]">In times of natural disasters or emergencies, we step in to provide immediate 
                support, including food supplies, temporary shelter, and essential services for affected families and 
                communities.
              </p>
            </div>
          </div>
          
        </div>
        </div>
        {/* Bottom Row Icons 
        <div>
        <h1 className="lg:text-[23px] text-[30px] font-bold mt-11 my pr-11">Our Impact</h1>
        <p>Since our inception, we have made significant strides in changing lives across Rwanda. From providing 
           education opportunities to empowering individuals economically, our work has touched thousands of lives and 
           continues to grow every day.
        </p>
        </div>
        <div>
        <h1 className="lg:text-[23px] text-[30px] font-bold mt-11 my pr-11">How We Work</h1>
        <p>We collaborate with local communities, governments, and other organizations to identify pressing needs and 
           implement effective solutions. Transparency, sustainability, and accountability are at the core of 
           everything we do.
        </p>
        </div> */}
    </div>


    
    </>
  )
}
