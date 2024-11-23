import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = ({variants}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-full max-h-28">
      <header className={`w-full
      max-sm:px-6 py-4 pt-4 px-6 flex justify-between items-center  bg-white shadow z-40
      ${variants === "other" ? 
        `flex-row ${menuOpen ? 'absolute top-0' : ''}`
        : 
        'flex-col max-sm:fixed'
      } 
      `}
      > 
        <div className="w-full h-12 flex font-poppins justify-between items-center ">
   
          <div className={`
          w-1/2 relative z-50 flex justify-start  gap-5 font-poppins font-medium
          ${variants === "other" ? 'justify-start sm:justify-start' : 'sm:justify-end'} 
          `}>
          <Image  src='/logo.png' width={180} height={120}  alt={'logo'} className={`
            relative
            ${variants === "other" ? ' right-10 sm:left-[-3rem]' : ' right-10  sm:left-24'} 
            `}/>
          </div>

         
          {variants === "other" ? "" :
          <div className="w-1/2 flex justify-end max-sm:hidden font-poppins  gap-5 font-medium">
            <Link href={'/#subscribe'}>
            <h1 className="text-xs hover:underline">Subscribe</h1>
            </Link>
            
          </div>}

          {/* Hamburger Icon */}
          <div className="hidden max-sm:flex justify-end z-50">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? <GiCrossMark /> : <FaBars />}
            </button>
          </div>
        </div>

   
        <nav
          className={`max-sm:${
            menuOpen ? 'block' : 'hidden'
          } max-sm:fixed w-full inset-0 bg-white bg-opacity-70 backdrop-blur-md z-40  flex justify-center max-sm:justify-start
          transition-transform duration-500 ease-in-out transform max-sm:${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
      

          <div className="w-full sm:max-w-[500px] max-sm:pt-20 h-12 max-sm:h-screen  flex  max-sm:flex-col items-center max-sm:items-start justify-between max-sm:justify-start  font-poppins font-medium text-xs text-gray-700">
            <a href="/" className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex justify-stretch hover:text-gray-500 hover:underline transition-colors duration-300">HOME</a>

            <Link href={'/#books'}>
            <h1  className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">BOOKS</h1>
            </Link>

            <Link href={'/bonus'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">BONUS</h1>
            </Link>
            {/* <Link href={'/translation'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">TRANSLATION</h1>
            </Link> */}
            <Link href={'/'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">TRANSLATION</h1>
            </Link>
            <Link href={'/#contact'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">CONTACT</h1>
            </Link>
            <Link href={'/#subscribe'}> 
            <h1 className="sm:hidden max-sm:w-full max-sm:px-6 flex max-sm:py-4 font-normal hover:text-gray-500 hover:underline transition-colors duration-300">Subscribe !</h1>
            </Link>

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
