

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
  return (
    <div className="w-full mx-auto ">
      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
 
      >
        {data?.map((book, index) => (
          <SwiperSlide key={index} className="flex max-w-[240px] w-full justify-center items-center">
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






