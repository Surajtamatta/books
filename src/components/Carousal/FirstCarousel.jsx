import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import Image from 'next/image';

const FirstCarousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
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
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden py-10" ref={viewportRef}>
        <div className="embla__container flex">
          {data?.map((book, index) => (
            <div
              key={book.title}
              className={`embla__slide flex-shrink-0 w-[25%] p-4 max-w-[25%] relative ${
                index % 2 === 0 ? 'top-6 sm:top-12' : ''
              }`}
            >
              <h1 className="mb-2 text-black font-inters font-semibold text-xs">News</h1>
              <div className="bg-white p-10 sm:p-14 w-full max-w-[350px] aspect-[17/23] relative flex justify-center">
                <Image src={book.imgSrc} alt={book.title} width={226} height={340} className='shadow-default'/>
              </div>
              <h3 className="text-lg sm:text-xl mt-4 sm:mt-5 text-white font-semibold font-markazitext mb-2">
                {book.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white font-markazitext font-medium">
                {book.readTime}
              </p>
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
