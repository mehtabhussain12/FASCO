import React from 'react'
import Cards from './Cards'

function Arrival() {
  return (
   <>
   
   <div>
    <div>
        <h1 className='md:text-5xl text-3xl text-center font-semibold text-[#484848]'>New Arrivals</h1>
        <p className='text-center mt-4 text-[#8A8A8A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br /> ultrices sollicitudin aliquam sem. Scelerisque duis  ultrices sollicitudin </p>
    </div>
    <div class="md:flex md:flex-row md:justify-center space-x-4 my-12 flex flex-col gap-y-4">
                    <a href="#" class="bg-gray-200 text-[15px] text-black hover:bg-black hover:text-white md:px-6 py-2 rounded shadow-2xl text-center">Smart Watches</a>
                    <a href="#" class="bg-black text-[15px] text-white hover:bg-black hover:text-white md:px-6 py-2 rounded shadow-2xl text-center">Women’s Fashion</a>
                    <a href="#" class="bg-gray-200 text-[15px] text-black hover:bg-black hover:text-white md:px-6 py-2 rounded shadow-2xl text-center">Women Accessories</a>
                    <a href="#" class="bg-gray-200 text-[15px] text-black hover:bg-black hover:text-white md:px-6 py-2 rounded shadow-2xl text-center">Men Accessories</a>
                    <a href="#" class="bg-gray-200 text-[15px] text-black hover:bg-black hover:text-white md:px-6 py-2 rounded shadow-2xl text-center">Smart Watches</a>
                    <a href="#" class="bg-gray-200 text-[15px] text-black hover:bg-black hover:text-white md:px-6 py-2 rounded shadow-2xl text-center">Discount Deals</a>
                </div>
    </div>
    <Cards></Cards>
    </>
  )
}

export default Arrival
