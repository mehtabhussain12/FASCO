import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Hero from './Hero';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex md:ml-12 ml-4 mt-6 justify-between">
        <div className="md:flex flex items-center">
          <h1 className="text-5xl font-semibold text-gray-800 text-center">FASCO</h1>
        </div>
        <div className="flex items-center mt-4 cursor-pointer ">
          <ul className={`flex flex-col lg:flex lg:flex-row gap-x-20  ${isOpen ? 'block' : 'hidden'}`}>
            <li>Home</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Packages</li>
          </ul>
          <div className='md:hidden mr-4 text-2xl'>
            <button onClick={toggleNavbar}>{isOpen ? <RxCross2 /> : <LuMenu />}</button>
          </div>
          <div className="ml-8 mr-6 md:flex gap-4 cursor-pointer hidden">
            <button className=" px-4 py-2 rounded-md shadow-md">Sign in</button>
            <button className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Sign Up</button>
          </div>
        </div>
      </nav>
      <Hero></Hero>
    </>
  );
}

export default Navbar;
