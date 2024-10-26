
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import Image from 'next/image';

const ForthCarousel = ({ data }) => {
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
      <div className="embla__viewport overflow-hidden" ref={viewportRef}>
        <div className="embla__container flex">
          {data?.map((book, index) => (
            <div
              key={book.title}
              className={`embla__slide flex-shrink-0 w-[18%]relative p-4`}
            >
              <div className=" max-w-[240px] w-full aspect-square relative flex justify-center">
                <Image src={book.imgSrc} alt={book.title} width={226} height={340}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForthCarousel;









