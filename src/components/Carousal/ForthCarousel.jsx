import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ForthCarousel = ({ data }) => {
  // Reference to Swiper instance
  const swiperRef = React.useRef(null);

  return (
    <div
      className="w-full mx-auto"
      onMouseEnter={() => swiperRef.current && swiperRef.current.autoplay.stop()} // Pause on hover
      onMouseLeave={() => swiperRef.current && swiperRef.current.autoplay.start()} // Resume on hover out
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        spaceBetween={20}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 50, // Continuous slide
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={4000} // Slow, smooth transition speed
        className='transition ease-in-out'
      >
        {data?.map((book, index) => (
          <SwiperSlide key={index} className="transition ease-in-out flex max-w-[240px] w-full justify-center items-center">
            <div className="w-full aspect-square relative flex justify-center">
              <Image src={book.imgSrc} alt={book.title} width={226} height={340} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ForthCarousel;
