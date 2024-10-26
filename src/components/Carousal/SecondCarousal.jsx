import React, { useCallback, useEffect,useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Image from 'next/image';

const SecondCarousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000 })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla relative w-full ">
      <div className="embla__viewport overflow-hidden" ref={viewportRef}>
        <div className="embla__container flex">
          {data?.map((book, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 p-2 w-full sm:w-[100%]"
            >
              <div className="flex flex-col-reverse sm:flex-row items-center">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-left space-y-4 lg:pr-8 mb-4 lg:mb-0 py-8  ">
                  <p className="text-sm font-semibold tracking-wide text-gray-800">
                    {book.subtitle}
                  </p>
                  <h2 className="text-2xl sm:text-6xl lg:text-7xl font-sriracha italic uppercase font-black text-[#355D69]">
                    {book.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
                    {book.description}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <button className="bg-[#C1C9B6] text-gray-800 font-normal py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB]">
                      READ NOW
                    </button>
                    <button className="bg-[#C1C9B6] text-gray-800 font-normal py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB]">
                      ADD TO GOODREADS
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-end items-center relative p-2">
                  {/* <button  
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                    className={`rounded-full h-8 sm:h-14 md:h-16 aspect-square relative bg-gray-800 p-1 flex justify-center items-center ${
                    nextBtnEnabled ? '' : 'opacity-25'
                    }`}
                    >   
                    <HiOutlineArrowNarrowLeft className="text-white bg-[#1F1E2C] h-full w-full p-2 sm:p-3 rounded-full z-[1]" />
                </button> */}

                  <div className="w-2/3 md:w-2/3 aspect-[1/1.4]  flex justify-end items-center relative ">
                    <Image
                      src={book.imgSrc}
                      alt={book.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className=" w-2/3 absolute bottom-2  left-[-5rem] sm:left-[-4rem] md:left-[-8rem] aspect-[1/1.2] flex justify-end items-center z-4">
                    <Image
                        src={book.coverSrc}
                        alt={book.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg  "
                      />
                      <Image
                        src={'/tablet.png'}
                        alt={'tablet'}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg  "
                      />
                    </div>
                  <button  
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled} 
                    className={`aspect-square absolute right-[-5px] flex justify-center items-center ${
                    nextBtnEnabled ? '' : 'opacity-25'}`}
                    >
                    <HiOutlineArrowNarrowRight className="text-white font-bold  text-xl sm:text-3xl aspect-square rounded-full z-[1]" />
                  </button>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondCarousel;
