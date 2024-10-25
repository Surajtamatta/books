import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import Image from 'next/image';

const SecondCarousel = ({ data }) => {
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
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden " ref={viewportRef}>
        <div className="embla__container flex">
          {data?.map((book, index) => (
            <div
              key={book.title}
              className={`embla__slide flex-shrink-0 w-[40%] p-4 max-w-[40%] relative`}
            >
              <h1 className="mb-2 font-inters font-medium text-xs sm:text-sm">{book.id}</h1>
              <div className="bg-white p-8 sm:p-10 w-full max-w-[350px] aspect-[17/23] relative flex justify-center">
                <Image src={book.imgSrc} alt={book.title} width={226} height={340} className='shadow-default'/>
              </div>
              <h3 className="text-xl sm:text-2xl mt-4 sm:mt-5 font-semibold font-ibarrarealnova mb-2">{book.title}</h3>
            
            </div>
          ))}
        </div>
      </div>
        
      {/* Navigation Buttons (Optional) */}
    </div>
  );
};

export default SecondCarousel;
