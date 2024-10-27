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
              className="embla__slide flex-shrink-0  w-full sm:w-[100%]"
            >
              <div className="flex flex-col-reverse sm:flex-row items-center">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-left space-y-4 lg:pr-8 mb-6 lg:mb-0 py-8   ">
                  <p className="text-sm text-white font-semibold font-poppins leading-relaxed tracking-wide ">
                    {book.subtitle}
                  </p>
                  <h2 className="text-2xl sm:text-6xl lg:text-7xl mt-6 font-sriracha italic uppercase font-black text-[#024771]">
                    {book.title}
                  </h2>
                  <div  
                  dangerouslySetInnerHTML={{ __html: book.description }} 
                  className="text-sm sm:text-base lg:text-lg mb-6 text-white font-poppins font-normal leading-relaxed flex flex-col gap-4">
                  </div>
                  <div className="flex space-x-4 mt-6 ">
                    <button className="bg-[#bcd6af] text-gray-800 font-poppins font-normal py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB]">
                      READ NOW
                    </button>
                    <button className="bg-[#bcd6af] text-gray-800 font-normal font-poppins py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB]">
                      ADD TO GOODREADS
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-end items-center relative p-2">

                <h1 className='font-puppies absolute left-[-0.5rem] sm:left-0 top-1/4 translate-y-1/4 text-3xl sm:text-2xl  md:text-2xl lg:text-4xl font-black text-[#bcd6af]'>{book.character}</h1>
                  <div className="w-2/3 md:w-2/3 aspect-[1/1.4]  flex justify-end items-center relative ">
                  
                    <Image
                      src={book.imgSrc}
                      alt={book.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className=" w-2/3 absolute bottom-2  left-[-5rem] sm:left-[-4rem] md:left-[-8rem] aspect-[1/1.2] flex justify-end items-center">
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
