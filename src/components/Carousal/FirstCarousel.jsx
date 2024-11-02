

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const FirstCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 2) % data.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="carousel-container p-2  sm:p-6 w-full max-w-[80%] sm:max-w-[80%] md:max-w-[900px] left-4 sm:left-7 relative mx-auto overflow-hidden">
      {data.map((book, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentSlide || index === (currentSlide + 1) % data.length
              ? 'active'
              : ''
          }`}
        >
          <div className=" flex flex-col text-left items-start max-w-[230px] sm:max-w-[320px] md:max-w-[400px] mx-auto">
            <h1 className="mb-2 text-black text-xm  font-inters font-medium text-[8px] sm:text-sm">
              {book.isavailable}
            </h1>
            <div className="w-full relative aspect-[1/1.2]">
              <Image
                src={book.cover}
                alt={`${book.title}`}
                layout="fill"
                objectFit="fit"
              />
            </div>
            <h3 className="text-base sm:text-xl mt-4  sm:mt-5 text-white font-semibold font-markazitext mb-2">
              {book.title}
            </h3>
            <p className="text-xs sm:text-base  font-alkatra font-medium text-white">
              {book.releaseDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstCarousel;
