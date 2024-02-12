import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
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
          <div className={`md:hidden mr-4 text-2xl ${isOpen ? 'hidden' : 'block'}`}>
            <button className="p-2 rounded-md text-black" onClick={toggleNavbar}><FaBars /></button>
          </div>
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <button className=" ml-4 text-3xl text-black mr-4" onClick={toggleNavbar}><FaTimes className="text-black" /></button>
            <div className={`md:hidden fixed top-20 left-0 h-full w-full rounded-md bg-black opacity-80  z-50 ${isOpen ? 'block' : 'hidden'}`}>
 
    <ul className="flex flex-col items-center mt-16">
      <li className="my-4"><a href="#" className="text-white">Home</a></li>
      <li className="my-4"><a href="#" className="text-white">Deals</a></li>
      <li className="my-4"><a href="#" className="text-white">New Arrivals</a></li>
      <li className="my-4"><a href="#" className="text-white">Packages</a></li>
    </ul>
  </div>
          </div>
          <ul className="hidden  flex-col md:flex md:flex-row gap-x-20">
            <li>Home</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Packages</li>
          </ul>
          <div className="ml-8 mr-6 md:flex gap-4 cursor-pointer hidden">
            <button className=" px-4 py-2 rounded-md shadow-md">Sign in</button>
            <button className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Sign Up</button>
          </div>
        </div>
      </nav>
      <Hero />
    </>
  );
}

export default Navbar;
