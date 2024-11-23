import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WiStars } from "react-icons/wi";
import Navbar from "../Navbar";
const ComingSoon = ({ content }) => {
  return (
    <div className="w-full h-screen relative bg-[#F8F3EC] flex flex-col items-center">
    <div className="bg-[#1f1e2c]  w-full h-2/5 absolute bottom-0 z-0" />
      <header className="w-full bg-[#d294e2a7] text-center py-5 md:py-7 px-4">
        <p className="text-xs sm:text-lg font-medium text-[#ffffff] flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center">
          Want to be the first to know? Subscribe to my newsletter:{" "}
          <Link href={'/#subscribe'} className="bg-[#d394e2] text-white p-2 sm:px-4 sm:py-2 rounded-md shadow-lg hover:bg-[#f2b1ff]">
            Click to Subscribe
          </Link>
        </p>
      </header>
    <Navbar variants="other" />
  
     <div className="w-full h-full flex items-center justify-center ">
     <div className="bg-white z-10 shadow-xl flex flex-col items-center justify-evenly rounded w-[80%]  max-w-2xl h-96 mt-8 p-6 md:p-8 space-y-6">
        <h2 className="animate-charcter text-3xl md:text-5xl  font-bold text-gray-800 text-center">
          {content} Content
        </h2>
        <hr className="border-gray-300 w-[80%]" />
        <p className="text-lg md:text-2xl text-gray-500 text-center">
          Coming Soon
        </p>
      </div>
     </div>
    </div>
  );
};

export default ComingSoon;
