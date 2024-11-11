import React from 'react'

export const About = () => {
  return (
    <>

    <div
      className="h-full w-full flex justify-center p-11"
      style={{
        background: `url(https://market-resized.envatousercontent.com/downloads/files/367745797/EOSR7187+crop.jpg?w=500&cf_fit=scale-down&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&format=jpeg&q=85&s=17650104b816e4100a985d33ae8e4a4560f9b1b1aaf9d67f68eae72dcdd30897)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='m-11 p-11 py-[10px] text-white font-bold text-[100px]'>About</div>
    </div>
    <div className="flex">
      <div className="left m-12 flex-auto">
        <h1 className='font-bold text-[40px]'>Our Member</h1>
        <h1 className='bg-green-500 w-7 h-1 my-2'></h1>
      </div>
      <div className="right m-12">
        <p className='text-lg text-[100px]'>Charity law within Africa varies among countries, 
          but the fundamental principles are the same. <b>Most organizations</b> that are charities are 
          required to registered with the appropriate regulato</p>
      </div>
    </div>
    <div className='flex'>
      <div className="left flex-grow bg-[url('https://elements-resized.envatousercontent.com/envato-shoebox/62c2/c29e-cb97-4bdc-8618-569e6a2ba3f9/VictorTorres_BlackLivesMatterPart3_23.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=aa392def37e9a49c93b572a6d6f9d6beafb68e04a5e694c297a83b017e53a5a5')]"></div>
      <div className="right p-16 bg-gray-200">
         <h1 className='bg-green-500 w-7 h-1 mb-2'></h1>
         <h1 className='text-green-500 font-bold text-[30px]'>More People</h1>
         <h1 className='text-green-500 font-bold text-[30px]'>More impact</h1>
         <p className='text-lg mt-2'>Charity law within Africa varies among countries, <br />
          but the fundamental principles are the same. Most organizations.</p>
      </div>
    </div>
    <div className="text-center p-12 m-4">
      <h1 className='font-bold text-[50px]'>Want to get involved?</h1>
      <p className='text-lg text-gray-500 m-4'>The legal definition of a charitable organization varies
         between countries and in <br /> some instances regions of the country.</p>
      <button className='bg-green-500 text-[12px] text-white font-bold py-4 px-10 m-4'>BECOME A VOLUNTEER</button>
    </div>

    </>
  )
}
