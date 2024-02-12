import React from 'react'
import img1 from '../assets/Images/image.png'
import img2 from '../assets/Images/images1.png'
import img3 from '../assets/Images/image3.png'
import img4 from '../assets/Images/image2.png'
import Brands from './Brands'

function Hero() {
  return (
  <>
  <div className=' mt-16 m-2 flex justify-center gap-x-8 '>
    <div className='md:flex hidden'>
        <img src={img1} alt="" />
    </div>
    <div className=''>
        <img src={img2} alt="" />
        <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-8xl text-6xl mt-4 text-[#484848]'>ULTIMATE</h1>
     <h1 className=" md:text[125px] text-[120px]">SALE</h1>
        <p className='text-center m-2 text-xl'>NEW COLLECTION</p>
        <button className='bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 '>SHOP NOW</button>
        </div>
  <div className='mt-4'>   
       <img src={img3} alt="" />
  </div>
    </div>
    <div className='md:flex hidden'>
        <img src={img4} alt="" />
    </div>
  </div>
  <Brands></Brands>
  </>
  )
}

export default Hero
