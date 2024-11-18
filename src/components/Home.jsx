import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiTreeEvergreen } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { MdOutlineEmergencyShare } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

export const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/donate');
  }

  const newsletter = (e) => {
    e.preventDefault();
    navigate('/newsletter');
  }

  return (
    <>
      {/* Navbar */}
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

      {/* Hero Section */}
      <div className="h-full w-full flex justify-center p-11" style={{
        background: `url(https://demo.artureanec.com/themes/philantrop/wp-content/uploads/2024/03/slide_4.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="m-11 p-11 py-[130px] text-white font-bold text-[100px]">Charity for <span className="text-yellow-300">people</span></div>
      </div>

      {/* What We Do Section */}
      <div className="flex flex-col md:flex-row justify-between px-7 py-[90px]">
        <div className="left">
          <h4 className="flex"><GoDot className="mt-2" /><GoDot className="mt-2" />What we do</h4>
          <h1 className="lg:text-[50px] text-[30px] font-bold my-4 pr-11">Various things we help in whole world</h1>
        </div>
        <div className="right grid md:grid-cols-2 gap-4">
          {/* Top Row Icons */}
          <div className="flex mb-4">
            <div className="ic mr-2"><MdOutlineWaterDrop className="text-[50px] text-blue-400" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Water delivery</h4>
              <p className="text-[20px]">Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><PiTreeEvergreen className="text-[50px] text-green-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Environment</h4>
              <p className="text-[20px]">Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
          {/* Bottom Row Icons */}
          <div className="flex mb-4">
            <div className="ic mr-2"><BsHouse className="text-[50px] text-orange-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Build and repair</h4>
              <p className="text-[20px]">Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="ic mr-2"><GoLightBulb className="text-[50px] text-yellow-500" /></div>
            <div className="co">
              <h4 className="font-bold text-[28px]">Education</h4>
              <p className="text-[20px]">Starry flounder sablefish yellowtail barracuda long-finned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values and Foundation Section */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="left bg-green-400 p-8 flex-grow md:w-1/2">
          <h1 className="bg-white w-7 h-1"></h1>
          <h1 className="text-white font-bold text-[30px]">Our Core Value.</h1>
          <h1 className="text-white font-bold text-[30px]">Our Foundation.</h1>
          <p className="text-white">
        Charity law within Africa varies among <br />
        <u>Countries</u> but the fundamental principles are the same. <br />
        <b>Most organizations</b> that are charities.
      </p>
          <button className="bg-white text-black px-4 py-2 mt-4 flex items-center">
            <b onClick={newsletter} >LEARN MORE</b>
        <FaLongArrowAltRight className="ml-2" />
      </button>
    </div>

        <div className="right bg-cover bg-center md:w-1/2" style={{ backgroundImage: 'url(/DJP_7600.avif)' }}></div>
      </div>

      {/* How to Help Section */}
      <div className="flex flex-col md:flex-row lg:p-12 pt-10 px-5 justify-between">
        <div className="relative h-[355px] flex-grow w-full md:w-1/2">
          <div className="absolute lg:right-11 lg:p-14 lg:h-[385px] w-[70%] h-[270px] right-0  bg-cover bg-center bg-[url('/dcs.jpg')]"></div>
          <div className="absolute lg:left-12 top-28 lg:p-14 lg:h-[320px] lg:w-[41%] h-[210px] w-[60%]  bg-cover bg-center bg-[url('/DSC.avif')]"></div>
      </div>
        <div className="right md:w-1/2">
          <h1 className="font-bold text-[40px]">How To Help Us</h1>
          <h1 className="bg-green-500 w-7 h-1"></h1>
          <div className="flex my-5">
          <div className="icon text-white bg-green-500 rounded-full p-3"><BsSendCheck /></div>
          <div className="h1 font-bold text-lg pl-2 pt-2">Send donations</div>
            </div>
        <p>Charity law within Africa varies among <u>Countries</u> but the fundamental principles are the same.</p>
          <div className="flex my-5">
          <div className="icon text-white bg-green-500 rounded-full p-3"><MdOutlineEmergencyShare /></div>
          <div className="h1 font-bold text-lg pl-2 pt-2">Share Media</div>
          </div>
        <p>Charity law within Africa varies among <u>Countries</u> but the fundamental principles are the same.</p>
          <div className="flex my-5">
          <div className="icon text-white bg-green-500 rounded-full p-3"><MdOutlineVolunteerActivism /></div>
          <div className="h1 font-bold text-lg pl-2 pt-2">Become volunteer</div>
        </div>
        <p>Charity law within Africa varies among <u>Countries</u> but the fundamental principles are the same.</p>
          <button onClick={handleSubmit} className="bg-green-500 text-[12px] text-white font-bold py-4 px-10 m-4">DONATE</button>
            </div>
          </div>
    <div>

      <div className='relative'>
        <div className='absolute border border-yellow-500 flex lg:left-12 lg:right-12 justify-center lg:top-12 lg:bottom-12'>
          <div className='flex flex-col z-10 self-center border border-white p-5'><p className="text-white self-center">
            Charity law within Africa varies among <br />
            <u>Countries</u> but the fundamental principles are the same. <br />
            <b>Most organizations</b> that are charities.
          </p>
          <Link to="/newsletter"  className='self-center mt-3 text-white bg-green-500 p-2 cursor-pointer'>LEARN MORE</Link>
          </div>
        </div>
         <video autoPlay muted loop>
           <source src="https://videos.ctfassets.net/wvozpes63uc8/3LyhCLp2YLQ02HnzHp5IPw/b98b99451d4472709662737809306735/home-cycle-video.mp4" type="video/mp4" />
           Your browser does not support the video tag.
         </video>
      </div>

      <div className="flex flex-col md:flex-row bg-gray-300 p-5 md:p-12">
        {/* Left Side */}
        <div className="left p-7 px-12 bg-green-500 w-full md:w-1/2 text-white">
          <h1 className="bg-white w-7 h-1 mb-4"></h1>
          <h1 className="font-bold text-[25px] mb-5">Would you like to become a volunteer?</h1>
          <p className='mb-7'>Share with us your toughts and your ideas which could help us to improve with your help.</p> 

          <p className="text-gray-300 mb-3">Box 3233</p>
          <p className="text-gray-300 mb-3">1810 Kings Way</p>
          <p className="text-gray-300 mb-3">King Street, 5th Avenue, New York</p>

          <div className="flex items-center mt-3 mb-3">
            <FaPhoneAlt className="text-white mr-3" size={20} />
            <div className="text-lg">New York: 1800-2355-2356</div>
          </div>
          
          <div className="flex items-center mb-3">
            <IoMdTime className="text-white mr-3" size={20} />
            <div className="text-lg">Mon - Fri: 8:00 am - 6:00 pm</div>
          </div>

          <div className="flex items-center mb-3">
            <HiOutlineMailOpen className="text-white mr-3" size={20} />
            <div className="text-lg">contact@Chariti.theme</div>
          </div>
        </div>

        {/* Right Side (Form Section) */}
        <div className="right w-full md:w-1/2 lg:mt-0 mt-4 md:px-12">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between pb-5 space-y-4 md:space-y-0">
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="text"
                placeholder="Name*"
                required
              />
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="text"
                placeholder="Last Name*"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between pb-5 space-y-4 md:space-y-0">
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                className="h-12 w-full md:w-[49%] px-3 rounded-lg"
                type="tel"
                placeholder="Phone*"
                required
              />
            </div>

            <div className="flex flex-col pb-5">
              <input
                className="h-12 w-full px-3 rounded-lg"
                type="text"
                placeholder="Subject*"
                required
              />
            </div>

            <div className="pb-5">
              <textarea
                className="w-full h-28 p-3 rounded-lg"
                placeholder="Message*"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-3 rounded-lg"
              >
                <b>SUBMIT NOW</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      {/* Stats Section */}
      <div className="flex justify-around my-7 flex-wrap">
        <div className="p-5 relative text-center">
          <div className="bg-green-100 rounded-full p-10 mx-auto"></div>
          <h1 className="absolute font-bold left-6 top-0 text-[40px]">1M</h1>
        <div className="absolute left-1 top-14">Monthly Visitors</div>
            </div>
        <div className="p-5 px-11 relative text-center">
          <div className="bg-green-100 rounded-full p-10 mx-auto"></div>
          <h1 className="absolute font-bold left-10 top-0 text-[40px]">20M</h1>
        <div className="absolute left-2 top-14">Volunteers Connected</div>
          </div>
        <div className="p-5 px-11 relative text-center">
          <div className="bg-green-100 rounded-full p-10 mx-auto"></div>
          <h1 className="absolute font-bold left-14 top-0 text-[40px]">80</h1>
        <div className="absolute left-2 top-14">Countries Worldwide</div>
        </div>
        <div className="p-5 px-11 relative text-center">
          <div className="bg-green-100 rounded-full p-10 mx-auto"></div>
          <h1 className="absolute font-bold left-10 top-0 text-[40px]">2M</h1>
        <div className="absolute left-2 top-14">Volunteers Needed</div>
      </div>
    </div>
    </>
  );
};
