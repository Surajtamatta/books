import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Image from 'next/image';
import BookCover from '../Bookcover';
import Fade from 'embla-carousel-fade';
import ColorThief from 'colorthief';

const SecondCarousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000 }), Fade({ duration: 2000 })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [darkColor, setDarkColor] = useState('rgb(255, 255, 255)'); // Default background color
  const [lightColor, setLightColor] = useState('rgb(255, 255, 255)');
  const [secondaryColor, setSecondaryColor] = useState('rgb(255, 255, 255)');
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  // Extract dominant color for the current image
  const darkenColored = (rgbColor, amount) => {
    return rgbColor.map((color) => Math.max(0, color * amount));
  };
  const lightenColored = (rgbColor, amount) => {
    return rgbColor.map((color) => Math.min(255, color + (255 - color) * (1 - amount)));
  };
  const extractDominantColor = (imgSrc) => {
    const img = new window.Image();  // Use the native Image constructor
    img.crossOrigin = 'Anonymous';
    img.src = imgSrc;
    img.onload = () => {
      const colorThief = new ColorThief();
      const dominantColor = colorThief.getColor(img);
      const darkenedColor = darkenColored(dominantColor,0.8);
      const lightenedColor = lightenColored(dominantColor,0.6);
      const palette = colorThief.getPalette(img,5); // Get the top 5 colors in the palette
      const secondaryColor = palette[1]
      setSecondaryColor(`rgb(${secondaryColor.join(',')})`);
      setLightColor(`rgb(${lightenedColor.join(',')})`)
      setDarkColor(`rgb(${darkenedColor.join(',')})`);
    };
  };

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
    // Update background color on slide change
    embla.on('select', () => {
      const currentIndex = embla.selectedScrollSnap();
      if (data[currentIndex]?.imgSrc) {
        extractDominantColor(data[currentIndex].imgSrc);
      }
    });
  }, [embla, onSelect, data]);
console.log(lightColor,darkColor)
  return (
    <div className="flex lg:flex-row lg:justify-between items-center w-full p-6 sm:p-12 lg:p-20 overflow-x-hidden"
         style={{ backgroundColor: darkColor }}>
      <div className="embla relative w-full">
        <div className="embla__viewport overflow-hidden" ref={viewportRef}>
          <div className="embla__container flex">
            {data?.map((book, index) => (
              <div
                key={index}
                className="embla__slide flex-shrink-0 w-full sm:w-[100%]"
              >
                <div className="flex flex-col-reverse sm:flex-row items-center">
                  <div className="w-full lg:w-1/2 text-left space-y-4 lg:pr-8 mb-6 lg:mb-0 py-8">
                    <p className="text-sm text-white font-semibold font-poppins leading-relaxed tracking-wide">
                      {book.subtitle}
                    </p>
                    <h2 
                    style={{ color: secondaryColor}}
                    className="text-2xl sm:text-6xl lg:text-7xl mt-6 font-sriracha italic uppercase font-black">
                      {book.title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: book.description }}
                      className="text-sm sm:text-base lg:text-lg mb-6 text-white font-poppins font-normal leading-relaxed flex flex-col gap-4">
                    </div>
                    <div className="flex space-x-4 mt-6">
                      <button
                      style={{ backgroundColor: lightColor}}
                       className={`max-sm:text-base  text-gray-800 font-poppins font-normal py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB]`}>
                        READ NOW
                      </button>
                      <button style={{ backgroundColor: lightColor}} className="max-sm:text-base  text-gray-800 font-normal font-poppins py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB]">
                        ADD TO GOODREADS
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-end items-center relative p-2">
                    <h1 
                    style={{ color: lightColor}}
                     className='font-puppies absolute left-[-0.5rem] sm:left-0 top-1/4 translate-y-1/4 text-3xl sm:text-2xl md:text-2xl lg:text-4xl font-black '>
                      {book.character}
                    </h1>
                    <div className="w-2/3 md:w-2/3 aspect-[1/1.4] flex justify-end items-center relative">
                      <BookCover key={index} src={book.imgSrc} alt={book.title} />
                      <div className="w-2/3 absolute bottom-2 left-[-5rem] sm:left-[-4rem] md:left-[-8rem] aspect-[1/1.2] flex justify-end items-center">
                        <Image
                          src={book.imgSrc}
                          alt={book.title}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg p-1"
                        />
                        <Image
                          src={'/tablet.png'}
                          alt={'tablet'}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg"
                        />
                      </div>
                      <button
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                        className={`aspect-square absolute right-[-5px] flex justify-center items-center ${
                          nextBtnEnabled ? '' : 'opacity-25'}`}
                      >
                        <HiOutlineArrowNarrowRight className="text-white font-bold text-xl sm:text-3xl aspect-square rounded-full z-[1]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCarousel;
