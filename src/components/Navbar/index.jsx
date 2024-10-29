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
      <header className="w-full max-sm:p-4 max-sm:fixed pt-4 px-6 flex justify-between items-center flex-col bg-white shadow z-40">
        {/* Small screen top links */}

        {/* Main navbar */}
        <div className="w-full h-12 flex font-poppins justify-between items-center">
          {/* Left links */}
          <div className="w-1/2  flex justify-start sm:justify-end gap-5 font-poppins font-medium">
          <h1 className="text-xl z-50 relative max-sm:px-2  sm:left-16 font-poppins text-pink font-bold">MATT HAIG</h1>
          </div>

          {/* Logo */}
         

          {/* Right links */}
          <div className="w-1/2 flex justify-end max-sm:hidden font-poppins  gap-5 font-medium">
            <a href="#" className="text-xs hover:underline">Subscribe</a>
          </div>

          {/* Hamburger Icon */}
          <div className="hidden max-sm:flex justify-end z-50">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? <GiCrossMark /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Collapsible Menu */}
        <nav
          className={`max-sm:${
            menuOpen ? 'block' : 'hidden'
          } max-sm:fixed w-full inset-0 bg-white bg-opacity-70 backdrop-blur-md z-40  flex justify-center max-sm:justify-start
          transition-transform duration-500 ease-in-out transform max-sm:${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
      

          <div className="w-full max-w-[500px] max-sm:pt-20 h-12 max-sm:h-screen  flex  max-sm:flex-col items-center max-sm:items-start justify-between max-sm:justify-start  font-poppins font-semibold text-xs text-gray-700">
            <a href="#" className="max-sm:w-full max-sm:px-6 max-sm:py-4 hover:text-gray-500 hover:underline hover:bg-gray-200 transition-colors duration-300">HOME</a>
            <a href="#" className="max-sm:w-full max-sm:px-6 max-sm:py-4 hover:text-gray-500 hover:underline hover:bg-gray-200 transition-colors duration-300">BOOKS</a>
            <a href="#" className="max-sm:w-full max-sm:px-6 max-sm:py-4 hover:text-gray-500 hover:underline hover:bg-gray-200 transition-colors duration-300">BONUS</a>
            <a href="#" className="max-sm:w-full max-sm:px-6 max-sm:py-4 hover:text-gray-500 hover:underline hover:bg-gray-200 transition-colors duration-300">TRANSLATION</a>
            <a href="#" className="max-sm:w-full max-sm:px-6 max-sm:py-4 hover:text-gray-500 hover:underline hover:bg-gray-200 transition-colors duration-300">CONTACT</a>
            <a href="#" className="sm:hidden max-sm:w-full max-sm:px-6 max-sm:py-4 font-normal hover:text-gray-500 hover:underline hover:bg-gray-200 transition-colors duration-300">Subscribe !</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
