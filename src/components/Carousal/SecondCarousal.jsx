import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Image from 'next/image';

// Utility function to lighten a color by a given percentage
const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const r = (num >> 16) + Math.round((255 - (num >> 16)) * percent);
  const g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * percent);
  const b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * percent);
  return `#${(r < 255 ? r : 255).toString(16).padStart(2, "0")}${(g < 255 ? g : 255).toString(16).padStart(2, "0")}${(b < 255 ? b : 255).toString(16).padStart(2, "0")}`;
};

const SecondCarousel = ({ data }) => {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Function to determine background color based on title condition
  const getBackgroundColor = (title) => {
    return title.toLowerCase().includes("collide") ? "#6e9277" : "#c87faa";
  };

  // Compute primary background color and light color
  const backgroundColor = getBackgroundColor(data[currentSlideIndex]?.title || "");
  const lightColor = lightenColor(backgroundColor, 0.5); // Adjust 0.5 for 50% lighter

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center mx-auto py-8 sm:py-12 px-6"
      style={{ 
        backgroundColor: backgroundColor,
        transition: 'background-color 0.3s ease-in-out', 
        minHeight: 600 
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        loop={true}
        fadeEffect={{ crossFade: true }} 
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
        modules={[Autoplay, Navigation, EffectFade]}
        className="w-full flex justify-center items-center"
      >
        {data?.map((book, index) => (
          <SwiperSlide key={index} className="w-full flex flex-col items-center text-center sm:text-left sm:flex-row">
            <div className="flex flex-col-reverse sm:flex-row items-center">
              <div className="w-full lg:w-1/2 h-full flex flex-col text-left space-y-4 md:space-y-10 lg:p-8 py-6">
                <p className="text-sm text-white font-semibold font-poppins leading-relaxed tracking-wide">
                  {book.subtitle}
                </p>
                <div className="h-16 aspect-[1/0.5] relative w-auto left-0">
                  <Image src={book.titleimg} alt={book.title} width={300} height={150} className="flex justify-start" />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: book.description }}
                  className="text-sm sm:text-base lg:text-lg text-balance mb-6 text-white font-montserrat font-normal leading-relaxed flex flex-col gap-4"
                />
                <div className="flex space-x-4 mt-4">
                  <button
                    style={{ backgroundColor: lightColor }}
                    className="max-sm:text-base text-gray-800 font-poppins font-normal py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB] transition duration-300 ease-in-out"
                  >
                    READ NOW
                  </button>
                  <button
                    style={{ backgroundColor: lightColor }}
                    className="max-sm:text-base text-gray-800 font-normal font-poppins py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB] transition duration-300 ease-in-out"
                  >
                    ADD TO GOODREADS
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-end items-center relative  p-2">
                <h1
                  className="font-puppies absolute left-[-0.5rem] sm:left-0 top-1/4 translate-y-1/4 text-3xl sm:text-2xl md:text-2xl lg:text-4xl font-black transition-all duration-500"
                  style={{ color: lightColor }}
                >
                  {book.character}
                </h1>
                <div className="w-[70%] md:w-[70%] aspect-[1/1.3] flex justify-end items-center relative">
                  <Image src={book.cover} alt={book.title} layout="fill" objectFit="cover" />
                      <div className="w-2/3 absolute bottom-2 left-[-5rem] sm:left-[-4rem] md:left-[-8rem] aspect-[1/1.2] flex justify-end items-center">
                        <Image src={book.imgSrc} alt={book.title} layout="fill" objectFit="contain" className="rounded-lg p-1" />
                        <Image src={'/tablet.png'} alt={'tablet'} layout="fill" objectFit="contain" className="rounded-lg" />
                      </div>
                  <button
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className=" relative left-2 p-1 aspect-square flex justify-center items-center transition-all duration-500 ease-in-out hover:scale-110"
                  >
                    <HiOutlineArrowNarrowRight className="text-white font-bold text-xl sm:text-3xl aspect-square rounded-full z-[4]" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondCarousel;
