import React from 'react';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';

const BestSeller = () => {
  const books = [
    {
      id: '01',
      title: 'UK edition',
      imgSrc: '/comfort2.png',
    },
    {
      id: '02',
      title: 'American edition',
      imgSrc: '/comfort-book.png',
    },
    {
      id: '03',
      title: 'Canadian edition',
      imgSrc: '/comfort2.png',
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f6f3] text-gray-800 pb-12 sm:pb-16 md:pb-24">
      {/* Quote Section */}
      <div className="bg-[#1F1E2C] h-full gap-4 max-h-[375px] text-white py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-24 text-center flex justify-between items-center">
        {/* Carousel controls */}
        <button className="h-12 sm:h-14 md:h-16 aspect-square rounded-full bg-gray-800 p-1 flex justify-center items-center">
          <MoveLeft className="text-white bg-[#1F1E2C] h-full w-full p-2 sm:p-3 rounded-full z-[1]" />
        </button>

        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col w-full max-w-[600px] justify-center gap-2 sm:gap-3 md:gap-4">
          <p className="text-lg sm:text-xl md:text-[28px] max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 font-piazzollaa italic font-semibold tracking-wide">
            "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives."
          </p>
          <p className="text-sm sm:text-base md:text-lg uppercase font-alegreya font-semibold">The Sunday Times</p>
        </div>

        <button className="rounded-full h-12 sm:h-14 md:h-16 aspect-square relative bg-gray-800 p-1 flex justify-center items-center">
          <MoveRight className="text-white bg-[#1F1E2C] h-full w-full p-2 sm:p-3 rounded-full z-[1]" />
        </button>
      </div>

      {/* Main Book Section */}
      <div className="h-full mx-auto text-center p-6 sm:p-10 md:p-16 mt-10 sm:mt-14 md:mt-20 flex flex-col justify-center items-center">
        <h2 className="text-sm sm:text-base mb-2 sm:mb-4 font-inters font-medium">Number One Bestseller</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl w-full max-w-[500px] mt-2 sm:mt-4 font-ibarrarealnova font-semibold">
          <span className="font-thin italic">The</span> Comfort book is out now
        </h1>

        {/* Book Editions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 mt-10 sm:mt-12 md:mt-14">
          {books.map((book, index) => (
            <div
              key={book.title}
              className={`flex flex-col justify-start w-full max-w-[450px] ${index % 2 === 0 ? 'relative top-[30px] md:top-[60px]' : ''}`}
            >
              <h1 className="text-xs sm:text-sm text-start mb-2 font-inters font-medium">{book.id}</h1>
              <div className="bg-white p-10 sm:p-12 md:p-14 w-full max-w-[340px] aspect-[17/23] relative flex justify-center">
                <Image src={book.imgSrc} alt={book.title} width={226} height={340} />
              </div>
              <h3 className="text-start text-xl sm:text-2xl mt-4 sm:mt-5 font-semibold mb-1 sm:mb-2 font-ibarrarealnova tracking-tight">
                {book.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
