import React from 'react'
import f1 from '../assets/Images/fotterimg.png'
import f2 from '../assets/Images/fotterimg1.png'

function Footer() {
  return (
   <>
   <div className='flex flex-col md:flex-row mt-24'>
  <div className='mx-auto md:ml-24 md:mr-auto'>
    <img src={f1} alt="" className="w-full" />
  </div>
  <div className='shadow-lg w-full md:w-[631px] h-[333px] flex flex-col justify-center items-center bg-white rounded-md mt-8 md:mt-0'>
    <h1 className='text-4xl text-[#484848] font-semibold p-4 text-center'>
      Subscribe To Our Newsletter
    </h1>
    <p className='text-center px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
    <input className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-transparent w-full max-w-md mt-4' type="email" placeholder='michael@ymail.com' />
    <div className='flex justify-center mt-4'>
      <button className="bg-black text-white px-8 py-2 rounded-md shadow-md">
        Subscribe Now
      </button>
    </div>
  </div>
  <div className='mx-auto md:mr-24 md:ml-auto mt-8 md:mt-0'>
    <img src={f2} alt="" className="w-full" />
  </div>
</div>

<hr />
<footer className='m-6 mt-8 flex flex-col md:flex-row justify-between items-center'>
  <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4 md:mb-0">FASCO</h1>
  <ul className='flex flex-wrap gap-x-4 gap-y-2 md:gap-y-0 cursor-pointer'>
    <li>Support Center</li>
    <li>Invoicing</li>
    <li>Contract</li>
    <li>Careers</li>
    <li>Blog</li>
    <li>FAQs</li>
  </ul>
</footer>
<div className='mt-8'>
  <p className='text-center text-sm'>Copyright © 2022 FASCO. All Rights Reserved.</p>
</div>

   </>
  )
}

export default Footer
