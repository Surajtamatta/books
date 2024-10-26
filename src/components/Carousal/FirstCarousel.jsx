import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import Image from 'next/image';

const FirstCarousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000 })] // Add autoplay with a 4-second delay
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla relative flex pl-8 sm:pl-14 justify-center items-center ">
      <div className="embla__viewport  w-[65%] sm:w-3/4 overflow-hidden py-10"  ref={viewportRef}>
        <div className="embla__container flex justify-start">
          {data?.map((book, index) => (
            <div
              key={index}
              className={`embla__slide flex-shrink-0  p-1 w-[50%] sm:w-[50%] sm:p-4 relative`}
            >
              <h1 className="mb-2 text-black font-inters font-semibold text-xs">{book.isavailable}</h1>
              <div className="w-full max-w-[190px] sm:max-w-[380px]  md:max-w-[446px] aspect-[1/1.4] relative flex justify-center">
                <Image src={book.imgSrc} alt={book.title} layout='fill'/>
              </div>
              <h3 className="text-lg sm:text-xl mt-4 sm:mt-5 text-white font-semibold font-markazitext mb-2">
                {book.title}
              </h3>
              <p className="text-sm sm:text-base font-alkatra font-medium text-white">
                {book.releaseDate}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Optional) */}
    </div>
  );
};

export default FirstCarousel;
