import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default behavior
    navigate('/volunteer'); // Navigate to the volunteer page
  };

  return (
    <>
      <div className="bg-gray-900 text-white p-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">Charity</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-500 transition-colors py-3">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors py-3">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors py-3">Contact</Link>
            <Link to="/donate" className="hover:text-yellow-500 transition-colors bg-green-500 text-white px-5 py-3 rounded-lg">Donate</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="h-full w-full flex justify-center p-11 bg-cover bg-center"
        style={{
          background: `url(https://market-resized.envatousercontent.com/downloads/files/367745797/EOSR7187+crop.jpg?w=500&cf_fit=scale-down&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&format=jpeg&q=85&s=17650104b816e4100a985d33ae8e4a4560f9b1b1aaf9d67f68eae72dcdd30897)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='m-11 p-11 py-[10px] text-white font-bold text-[40px] md:text-[60px] lg:text-[100px]'>
          About
        </div>
      </div>

      {/* About Content */}
      <div className="flex flex-col sm:flex-row justify-between px-12 py-10">
        {/* Left Section */}
        <div className="left m-12 flex-auto sm:m-5">
          <h1 className='font-bold text-[30px] sm:text-[40px] md:text-[50px]'>Our Members</h1>
          <h1 className='bg-green-500 w-7 h-1 my-2'></h1>
        </div>

        {/* Right Section */}
        <div className="right m-12 sm:m-5">
          <p className='text-lg text-[18px] sm:text-[20px] md:text-[24px]'>
            Charity law within Africa varies among countries, but the fundamental principles are the same.
            <b>Most organizations</b> that are charities are required to register with the appropriate regulators.
          </p>
        </div>
      </div>

      {/* More Impact Section */}
      <div className="flex flex-col sm:flex-row">
        <div className="left flex-grow bg-cover bg-center w-full h-30 sm:h-30 md:h-30"
          style={{
            backgroundImage: 'url(https://elements-resized.envatousercontent.com/envato-shoebox/62c2/c29e-cb97-4bdc-8618-569e6a2ba3f9/VictorTorres_BlackLivesMatterPart3_23.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=aa392def37e9a49c93b572a6d6f9d6beafb68e04a5e694c297a83b017e53a5a5)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
          }}
        ></div>

        <div className="right p-8 sm:p-14 bg-gray-200">
          <h1 className='bg-green-500 w-7 h-1 mb-2'></h1>
          <h1 className='text-green-500 font-bold text-[20px] sm:text-[30px] md:text-[40px]'>More People</h1>
          <h1 className='text-green-500 font-bold text-[20px] sm:text-[30px] md:text-[40px]'>More Impact</h1>
          <p className='text-lg mt-2 sm:text-xl'>
            Charity law within Africa varies among countries, but the fundamental principles are the same.
            Most organizations are required to register with the appropriate regulatory authorities.
          </p>
        </div>
      </div>

      {/* Volunteer Call to Action */}
      <div className="text-center p-12 m-4">
        <h1 className='font-bold text-[30px] sm:text-[40px] md:text-[50px]'>Want to get involved?</h1>
        <p className='text-lg text-gray-500 m-4'>
          The legal definition of a charitable organization varies between countries, and in some instances, regions of the country.
        </p>
        {/* Button */}
        <button 
          onClick={handleSubmit} 
          className='bg-green-500 text-[14px] text-white font-bold py-4 px-10 m-4 rounded-lg hover:bg-green-600 transition-colors'>
          BECOME A VOLUNTEER
        </button>
      </div>
    </>
  );
};
