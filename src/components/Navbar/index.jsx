import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      <header className="w-full  max-sm:p-4 max-sm:fixed pt-4 px-6 flex justify-between items-center flex-col bg-white shadow z-40">
            <div className="hidden max-sm:flex justify-end w-full  gap-2 font-inters font-medium">
              <a href="#" className=" text-gray-600 text-xs hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300">Videos</a>
              <a href="#" className=" text-gray-600 text-xs hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300">About</a>
              <a href="#" className=" text-gray-600 text-xs hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300">Search</a>
              <a href="#" className=" text-gray-600 text-xs hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300">Contact</a>
              <a href="#" className=" text-gray-600 text-xs hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300">Subscribe</a>
            </div>

        <div className="w-full h-12 flex justify-between items-center ">
          {/* Conditionally render the left-side links */}
          <div className='max-sm:hidden flex gap-5 font-inters font-medium'>
            <a href="#" className="text-gray-600 text-xs hover:underline">Home</a>
            <a href="#" className="text-gray-600 text-xs hover:underline">Videos</a>
            <a href="#" className="text-gray-600 text-xs hover:underline">About</a>
          </div>

          {/* Logo or title */}
          <h1 className="text-xl z-50 font-poppins font-bold">MATT HAIG</h1>

          {/* Right-side links */}
          <div className='max-sm:hidden flex gap-5 font-inters font-medium'>
            <a href="#" className="text-gray-600 text-xs hover:underline">Search</a>
            <a href="#" className="text-gray-600 text-xs hover:underline">Contact</a>
            <a href="#" className="text-gray-600 text-xs hover:underline">Subscribe</a>
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="hidden max-sm:flex justify-end z-50">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {menuOpen ? <GiCrossMark /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Collapsible Menu */}
        <nav
          className={`max-sm:${
            menuOpen ? 'block' : 'hidden'
          } flex h-12  max-w-[650px] items-center mt-4 md:mt-0
          max-sm:fixed
        max-sm:bg-white
          max-sm:z-40
          max-sm:top-20
          max-sm:left-0
          max-sm:h-full
          max-sm:w-2/3
          max-sm:transition-all
          max-sm:ease-in-out
          max-sm:duration-500
          max-sm:transform 
          `}
        >
          <div className='w-full flex h-12  max-w-[650px] gap-5 justify-between text-xs items-center mt-0 font-poppins font-semibold 
          max-sm:flex-col
          max-sm:h-full
          max-sm:items-start
          max-sm:justify-start
          max-sm:gap-0
          '>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">HOME</a>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">BOOKS</a>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">KIDS</a>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">BUY</a>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">NEWS</a>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">INTERNATIONAL</a>
              <a href="#" className="w-full max-sm:p-4 text-gray-600 hover:text-gray-900 hover:underline max-sm:hover:bg-gray-200 transition-colors duration-300">EVENTS</a>
          </div>
          {/* Extra links shown only when menuOpen is true */}
          
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
