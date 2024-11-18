import React from 'react'
import { Link } from 'react-router-dom';
import { BsTransparency } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdAllInclusive } from "react-icons/md";
import { PiHandFistFill } from "react-icons/pi";
import { GiRoyalLove } from "react-icons/gi";
import { GoDot } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";

export const Ourmission = () => {
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
          <h4 className="flex"><GoDot className="mt-2" /><GoDot className="mt-2" />Our Mission | Our Vision | Our Values</h4>
          <h1 className="lg:text-[23px] text-[30px] font-bold my-5 pr-11">Our Mission</h1>
          <p>We strive to make a profound and lasting impact in the lives of individuals and communities across Rwanda. 
             Our mission is to tackle critical challenges in education, healthcare, economic development, and 
             environmental conservation. By creating opportunities, promoting equality, and fostering sustainability, we 
             aim to empower individuals to rise above their circumstances and build a better future for themselves and 
             their families.

          </p>
        </div>
        <div>
        <h1 className="lg:text-[23px] text-[30px] font-bold mt-11 my pr-11">Our Vision</h1>
        <p>We envision a Rwanda where every person, regardless of their background or circumstances, can thrive. Our 
           vision is of a nation where access to education, healthcare, and economic opportunities is universal, where 
           communities work hand-in-hand to preserve and protect their environment, and where every individual is 
           empowered to live a life of dignity, independence, and fulfillment. Together, we are building a brighter and 
           more inclusive future for all.

        </p>
        </div>
        <div>
        <h1 className="lg:text-[23px] text-[30px] font-bold mt-11 my pr-11">Our Values</h1>
        <div className="right grid md:grid-cols-3 gap-4 mt-5">
          {/* Top Row Icons */}
          <div className="flex mb-4">
            <div className="ic mr-2"><GiRoyalLove className="text-[50px] text-yellow-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Compassion:</h4>
              <p className="text-[17px]">We are deeply committed to supporting the most vulnerable members of our 
                society. Our work is driven by kindness, understanding, and a genuine desire to uplift those in need.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><BsTransparency className="text-[50px] text-red-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Transparency:</h4>
              <p className="text-[17px]">Honesty and accountability are the cornerstones of our organization. We ensure 
                that our actions, decisions, and use of resources are clear and open to all stakeholders.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><PiHandFistFill className="text-[50px]" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Empowerment:</h4>
              <p className="text-[17px]">We believe in empowering individuals and communities with the knowledge, 
                skills, and resources they need to achieve sustainable growth and independence.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><AiOutlineFileProtect className="text-[50px] text-blue-400" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Sustainability:</h4>
              <p className="text-[17px]">Our programs are designed to deliver long-term benefits, ensuring that the 
                solutions we provide today continue to create impact for generations to come.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><MdAllInclusive className="text-[50px] text-green-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Inclusivity:</h4>
              <p className="text-[17px]">We celebrate diversity and strive to create opportunities for all, regardless 
                of gender, age, ethnicity, or background. Our commitment is to ensure that no one is left behind.
              </p>
            </div>
          </div>
          {/* Bottom Row Icons */}
          <div className="flex mb-4">
            <div className="ic mr-2"><FaHandsHelping className="text-[50px] text-orange-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Collaboration:</h4>
              <p className="text-[17px]">We recognize the power of working together. By partnering with communities, 
                organizations, and individuals who share our vision, we amplify our efforts and achieve greater impact.
              </p>
            </div>
          </div>
          
        </div>
        </div>
        
    </div>


    </>
  )
}
