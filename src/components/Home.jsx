import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { SiDatabricks } from "react-icons/si";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiTreeEvergreen } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { GoDot } from "react-icons/go";

export const Home = () => {
  return (
    <>

    <div
      className="h-full w-full flex justify-center p-11"
      style={{
        background: `url(https://demo.artureanec.com/themes/philantrop/wp-content/uploads/2024/03/slide_4.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='m-11 p-11 py-[130px] text-white font-bold text-[100px]'>Charity for <span className='text-yellow-300'>people</span></div>
    </div>
    <div className="flex justify-between px-7 py-[90px]">
      <div className="left">
        <h4 className='flex'><GoDot className='mt-2' /><GoDot className='mt-2' />What we do</h4>
        <h1 className='text-[50px] pr-11'>Various things we help in whole world</h1>
      </div>
      <div className="right">
        <div className="top flex mb-4">
          <div className="l flex mr-3">
            <div className="ic mr-2"><MdOutlineWaterDrop className='text-[50px] text-blue-400' /></div>
            <div className="co">
              <h4 className='font-bold text-[28px]'>Water delivery</h4>
              <p className='text-[20px]'>Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
          <div className="flex mr-3">
            <div className="ic mr-2"><PiTreeEvergreen className='text-[50px] text-green-500' /></div>
            <div className="co">
              <h4 className='font-bold text-[28px]'>Environment</h4>
              <p className='text-[20px]'>Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
        </div>
        <div className="bottom flex">
          <div className="l flex mr-3">
            <div className="ic mr-2"><BsHouse className='text-[50px] text-orange-500' /></div>
            <div className="co">
              <h4 className='font-bold text-[28px]'>Build and repair</h4>
              <p className='text-[20px]'>Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
          <div className="flex mr-3">
            <div className="ic mr-2"><GoLightBulb className='text-[50px] text-yellow-500' /></div>
            <div className="co">
              <h4 className='font-bold text-[28px]'>Education</h4>
              <p className='text-[20px]'>Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
    {/* Left Section */}
    <div className="left bg-green-400 p-20 flex-grow">
      <h1 className='bg-white w-7 h-1'></h1>
      <h1 className='text-white font-bold text-[30px]'>Our Core Value.</h1>
      <h1 className='text-white font-bold text-[30px]'>Our Foundation.</h1>
      <p className='text-white'>
        Charity law within Africa varies among <br />
        <u>Countries</u> but the fundamental principles are the same. <br />
        <b>Most organizations</b> that are charities.
      </p>
      <button className='bg-white text-black px-4 py-2 mt-4 flex items-center'>
        <b>LEARN MORE</b>
        <FaLongArrowAltRight className="ml-2" />
      </button>
    </div>

    {/* Right Section */}
    <div className="right p-14 h-[385px] w-[50%] bg-cover bg-center bg-[url('/DJP_7600.avif')]">
    </div>

    </div>
    <div className="flex p-12 justify-between">
      <div className="left relative h-[385px] flex-grow w-[50%]" >
      <div className="absolute right-11 p-14 h-[385px] w-[60%] bg-cover bg-center bg-[url('/dcs.jpg')]">
      </div>
      <div className="absolute left-12 top-28 p-14 h-[320px] w-[41%] bg-cover bg-center bg-[url('/DSC.avif')]">
      </div>
      </div>
      <div className="right">
        <h1 className='font-bold text-[40px]'>How we work</h1>
        <h1 className='bg-green-500 w-7 h-1'></h1>
        <div className='flex my-5'>
          <div className="icon text-white bg-green-500 rounded-full p-3"><FaHouse /></div>
          <div className="h1 font-bold text-lg pl-2 pt-2">Community centers</div>
            </div>
        <p>Charity law within Africa varies among <u>Countries</u> but the fundamental principles are the same.</p>
        <div className='flex my-5'>
          <div className="icon text-white bg-green-500 rounded-full p-3"><SiDatabricks /></div>
          <div className="h1 font-bold text-lg pl-2 pt-2">Data-driven approach</div>
          </div>
        <p>Charity law within Africa varies among <u>Countries</u> but the fundamental principles are the same.</p>
        <div className='flex my-5'>
          <div className="icon text-white bg-green-500 rounded-full p-3"><FaRegSmile /></div>
          <div className="h1 font-bold text-lg pl-2 pt-2">Focused support</div>
        </div>
        <p>Charity law within Africa varies among <u>Countries</u> but the fundamental principles are the same.</p>
            </div>
          </div>
    <div className="flex justify-around my-7">
      <div className="p-5 relative">
        <div className=" bg-green-100 rounded-full p-10"></div>
        <h1 className='absolute font-bold left-6 top-0 text-[40px]'>1M</h1>
        <div className="absolute left-1 top-14">Monthly Visitors</div>
            </div>
      <div className="p-5 px-11 relative">
        <div className=" bg-green-100 rounded-full p-10"></div>
        <h1 className='absolute font-bold left-10 top-0 text-[40px]'>20M</h1>
        <div className="absolute left-2 top-14">Volunteers Connected</div>
          </div>
      <div className=" p-5 px-11 relative">
        <div className=" bg-green-100 rounded-full p-10"></div>
        <h1 className='absolute font-bold left-14 top-0 text-[40px]'>80</h1>
        <div className="absolute left-2 top-14">Countries Worldwide</div>
        </div>
      <div className=" p-5 px-11 relative">
        <div className=" bg-green-100 rounded-full p-10"></div>
        <h1 className='absolute font-bold left-10 top-0 text-[40px]'>2M</h1>
        <div className="absolute left-2 top-14">Volunteers Needed</div>
      </div>
    </div>

    </>
  );
};
