

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import Fade from 'embla-carousel-fade';


const ThirdCarousal = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000 }),Fade({duration:2000})] // Add autoplay with a 4-second delay
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);


  return (
    <div className="bg-[#1F1E2C] h-full gap-2 sm:gap-4  max-h-[375px] md:p-6 p-8 sm:py-14 text-white  text-center flex flex-col justify-between items-center">
       <div className='flex w-full justify-between items-center gap-2 sm:gap-4  '>
       <button  
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`rounded-full h-8 sm:h-14 md:h-16 aspect-square relative bg-gray-800 p-1 flex justify-center items-center ${
            nextBtnEnabled ? '' : 'opacity-25'
            }`}
             >   
            <FaChevronLeft className="text-white bg-[#1F1E2C] h-full w-full p-2 sm:p-3 rounded-full z-[1]" />
        </button>
   
            <div className='w-full lg:max-w-[550px] md:max-w-[380px] sm:max-w-[330px] max-w-[230px] '>
            <div className="embla relative ">
                <div className="embla__viewport overflow-hidden " ref={viewportRef}>
                    <div className="embla__container flex">
                    {/* Map through the books */}
                    {data?.map((data, index) => (
                        <div
                        key=  {index}
                        className="embla__slide flex-shrink-0 w-[100%]   relative"
                        >
                        <p className="text-base max-sm:text-base sm:text-xl md:text-[28px] max-w-2xl mx-auto sm:mt-12 font-piazzollaa italic font-semibold tracking-wide">
                            {data?.text}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg uppercase mt-4 font-alegreya font-semibold">
                            {data?.author}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                </div>
            </div>



            <button  
            onClick={scrollNext}
            disabled={!nextBtnEnabled} 
            className={`rounded-full h-8 sm:h-14 md:h-16 aspect-square relative bg-gray-800 p-1 flex justify-center items-center ${
            nextBtnEnabled ? '' : 'opacity-25'}`}
            >
            <FaChevronRight className="text-white bg-[#1F1E2C] h-full w-full p-2 sm:p-3 rounded-full z-[1]" />
            </button>
       </div>

       <div className="embla__dots flex justify-center mt-4">
        {data?.map((_, index) => (
          <button
            key={index}
            className={`embla__dot w-3 h-3 mx-1 rounded-full border-2 border-[#4C4D56] ${index === selectedIndex ? 'bg-white border-white' : 'bg-transparent'}`}
            onClick={() => embla.scrollTo(index)} // Use embla to scroll to the index
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdCarousal;
