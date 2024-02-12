import React from 'react'
import c1 from '../assets/Images/card1.png'
import c2 from '../assets/Images/card2.png'
import c3 from '../assets/Images/card3.png'
import c4 from '../assets/Images/card4.png'
import c5 from '../assets/Images/card5.png'
import c6 from '../assets/Images/card6.png'
import Banner from './Banner'


function Cards() {
  return (
 <>
  <div className='m-2'>
      <div className='flex flex-col md:flex md:flex-row md:ml-24  justify-evenly'>
        {/* card 1 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg  mt-4">
          <img src={c1} alt="Shiny Dress" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Shiny Dress</div>
            <p className="text-gray-700 text-base mb-2">Al Karam</p>
            <p className="text-gray-700 text-base mb-2">(4.1k) Customer Reviews</p>
            <span className="font-bold text-xl">$95.50</span>
            <p className="text-sm text-red-600 mt-2 float-right">Almost Sold Out</p>
          </div>
        </div>
        {/* card2 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg  mt-4">
          <img src={c2} alt="Shiny Dress" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Long Dress</div>
            <p className="text-gray-700 text-base mb-2">Al Karam</p>
            <p className="text-gray-700 text-base mb-2">(4.1k) Customer Reviews</p>
            <span className="font-bold text-xl">$95.50</span>
            <p className="text-sm text-red-600 mt-2 float-right">Almost Sold Out</p>
          </div>
        </div>
        {/* card3 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg  mt-4">
          <img src={c3} alt="Shiny Dress" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Full Sweater</div>
            <p className="text-gray-700 text-base mb-2">Al Karam</p>
            <p className="text-gray-700 text-base mb-2">(4.1k) Customer Reviews</p>
            <span className="font-bold text-xl">$95.50</span>
            <p className="text-sm text-red-600 mt-2 float-right">Almost Sold Out</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex md:flex-row md:ml-24 m-2 md:justify-evenly'>
        {/* card4 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg  mt-4">
          <img src={c4} alt="Shiny Dress" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Full Sweater</div>
            <p className="text-gray-700 text-base mb-2">Al Karam</p>
            <p className="text-gray-700 text-base mb-2">(4.1k) Customer Reviews</p>
            <span className="font-bold text-xl">$95.50</span>
            <p className="text-sm text-red-600 mt-2 float-right">Almost Sold Out</p>
          </div>
        </div>
        {/* card5 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg  mt-4">
          <img src={c5} alt="Shiny Dress" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Full Sweater</div>
            <p className="text-gray-700 text-base mb-2">Al Karam</p>
            <p className="text-gray-700 text-base mb-2">(4.1k) Customer Reviews</p>
            <span className="font-bold text-xl">$95.50</span>
            <p className="text-sm text-red-600 mt-2 float-right">Almost Sold Out</p>
          </div>
        </div>
        {/* card6 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg  mt-4">
          <img src={c6} alt="Shiny Dress" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Full Sweater</div>
            <p className="text-gray-700 text-base mb-2">Al Karam</p>
            <p className="text-gray-700 text-base mb-2">(4.1k) Customer Reviews</p>
            <span className="font-bold text-xl">$95.50</span>
            <p className="text-sm text-red-600 mt-2 float-right">Almost Sold Out</p>
          </div>
        </div>
      </div>
     <div className='flex justify-center my-8'>
     <button className="bg-black flex items-center  text-white px-12 py-2 rounded-md shadow-md  md:ml-0 ">
             View More
            </button>
     </div>
    </div>

<Banner></Banner>
 </>
  )
}

export default Cards
