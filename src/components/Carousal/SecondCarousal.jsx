import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Image from 'next/image';
import BookCover from '../Bookcover';
import ColorThief from 'colorthief';

const SecondCarousel = ({ data }) => {
  const swiperRef = useRef(null);

  const [colors, setColors] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isColorReady, setIsColorReady] = useState(false);

  const darkenColor = (rgb, factor) => rgb.map(c => Math.max(0, c * factor));
  const lightenColor = (rgb, factor) => rgb.map(c => Math.min(255, c + (255 - c) * factor));

  const preloadColors = async () => {
    const colorThief = new ColorThief();
    const colorPromises = data.map(book => new Promise(resolve => {
      const img = new window.Image();
      img.crossOrigin = 'Anonymous';
      img.src = book.imgSrc;
      img.onload = () => {
        const dominantColor = colorThief.getColor(img);
        const darkenedColor = darkenColor(dominantColor, 0.8);
        const lightenedColor = lightenColor(dominantColor, 0.6);
        const palette = colorThief.getPalette(img, 5);
        resolve({
          darkColor: `rgb(${darkenedColor.join(',')})`,
          lightColor: `rgb(${lightenedColor.join(',')})`,
          secondaryColor: `rgb(${palette[1].join(',')})`
        });
      };
    }));
    const extractedColors = await Promise.all(colorPromises);
    setColors(extractedColors);
    setIsColorReady(true); // colors preloaded, can now show content
  };

  useEffect(() => {
    preloadColors();
  }, [data]);

  useEffect(() => {
    if (colors.length && colors[currentSlideIndex]) {
      // Apply colors immediately after slide index changes
      const { darkColor } = colors[currentSlideIndex];
      document.documentElement.style.setProperty('--bg-color', darkColor); // optional for further optimization
    }
  }, [currentSlideIndex, colors]);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center mx-auto py-12 px-4"
      style={{ backgroundColor: colors[currentSlideIndex]?.darkColor || 'rgb(255, 255, 255)', 
      transition: 'background-color 0.3s ease-in-out',minHeight:600 }}>
      {isColorReady && (
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
                  <h2 
                    style={{ color: colors[currentSlideIndex]?.secondaryColor }}
                    className="text-4xl sm:text-6xl lg:text-7xl mt-6 font-sriracha italic uppercase font-black transition-all duration-300">
                    {book.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: book.description }}
                    className="text-sm sm:text-base lg:text-lg mb-6 text-white font-poppins font-normal leading-relaxed flex flex-col gap-4">
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <button
                      style={{ backgroundColor: colors[currentSlideIndex]?.lightColor }}
                      className="max-sm:text-base text-gray-800 font-poppins font-normal py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB] transition duration-300 ease-in-out">
                      READ NOW
                    </button>
                    <button
                      style={{ backgroundColor: colors[currentSlideIndex]?.lightColor }}
                      className="max-sm:text-base text-gray-800 font-normal font-poppins py-2 px-4 sm:px-6 rounded-md shadow hover:bg-[#B5BEAB] transition duration-300 ease-in-out">
                      ADD TO GOODREADS
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-end items-center relative p-2">
                  <h1 
                    style={{ color: colors[currentSlideIndex]?.lightColor }}
                    className="font-puppies absolute left-[-0.5rem] sm:left-0 top-1/4 translate-y-1/4 text-3xl sm:text-2xl md:text-2xl lg:text-4xl font-black transition-all duration-500">
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
                      onClick={() => swiperRef.current.swiper.slideNext()}
                        className=" absolute right-0 aspect-square flex justify-center items-center transition-all duration-500 ease-in-out hover:scale-110"
                      >
                        <HiOutlineArrowNarrowRight className="text-white font-bold text-xl sm:text-3xl aspect-square rounded-full z-[1]" />
                      </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SecondCarousel;
