import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WiStars } from "react-icons/wi";
const ComingSoon = ({ content }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#cebbfa] text-center py-5 md:py-7 px-4">
        <p className="text-base md:text-lg font-medium text-[#ffffff] flex flex-col md:flex-row gap-4 justify-center items-center">
          Want to be the first to know? Subscribe to my newsletter:{" "}
          <Link href={'/#subscribe'} className="bg-[#c0a9f7] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#b897f5]">
            Click to Subscribe
          </Link>
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center shadow py-6 md:py-8 px-4 md:px-8 text-center space-y-4 md:space-y-0">
         <div className="relative flex justify-start gap-5 font-poppins font-medium">
          <Image  src='/logo.png' width={180} height={120}  alt={'logo'} />
          </div>
        <nav className="flex  text-base sm:text-lg  items-center space-x-4 md:space-x-6 lg:space-x-12  font-medium justify-center">
          <Link href={'/'}>
          <h1  className="text-gray-700 hover:text-purple-600">
            Home
          </h1>
          </Link>
          <Link href={'/#books'}>
          <h1  className="text-gray-700 hover:text-purple-600">
            Book
          </h1>
          </Link>
          {/* <Link href={'/translation'}>
          <h1  className="text-gray-700 hover:text-purple-600">
            Translations
          </h1>
          </Link> */}
           <Link href={'/'}>
            <h1  className="text-gray-700 hover:text-purple-600">
                translation
            </h1>
          </Link>
          <Link href={'/#contact'}>
          <h1  className="text-gray-700 hover:text-purple-600">
            Contact
          </h1>
          </Link>
        </nav>
      </div>

      {/* Bonus Content Section */}
      <div className="bg-white shadow-xl flex flex-col items-center justify-evenly rounded w-[90%] md:w-full max-w-5xl h-auto md:h-96 mt-8 md:mt-12 p-6 md:p-8 space-y-6">
        <h2 className="animate-charcter text-3xl md:text-5xl  font-bold text-gray-800 text-center">
          {content} Content
        </h2>
        <hr className="border-gray-300 w-[80%]" />
        <p className="text-lg md:text-2xl text-gray-500 text-center">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
