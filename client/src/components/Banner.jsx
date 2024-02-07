import React from 'react'
import b1 from '../assets/Images/banner1.png'
import b2 from '../assets/Images/banner2.png'
import b3 from '../assets/Images/banner3.png'
import b4 from '../assets/Images/banner4.png'
import b5 from '../assets/Images/banner5.png'
import b6 from '../assets/Images/banner6.png'
import b7 from '../assets/Images/banner7.png'
import instagramLogo from '../assets/Images/instagram_logo.png'
import Footer from './Footer'



function Banner() {
  return (

<>
<div className='mt-24'>
  <div className='m-4'>
    <h1 className='text-[#484848] text-center text-4xl font-semibold mb-4'>Follow Us On Instagram</h1>
    <p className='text-[#484848] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
  </div>
  <div className='mt-24 '>
  <div className='md:flex md:flex-row flex flex-col ml-8'>
      <div className='w-[320px] h-[308px] mt-6 relative'>
        <img src={b1} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
      <div className='w-[320px] h-[308px] relative'>
        <img src={b2} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
      <div className='w-[320px] h-[308px] mt-6 relative'>
        <img src={b3} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
      <div className='w-[320px] h-[308px] relative'>
        <img src={b4} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
      <div className='w-[320px] h-[308px] mt-6 relative'>
        <img src={b5} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
      <div className='w-[320px] h-[308px] relative'>
        <img src={b6} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
      <div className='w-[320px] h-[308px] mt-6 relative'>
        <img src={b7} alt="" className="w-full h-full" />
        <a href="#" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <img src={instagramLogo} alt="Instagram Logo" className="w-12 h-12" />
        </a>
      </div>
    </div>

  </div>
</div>
<Footer></Footer>
</>
  )
}

export default Banner
