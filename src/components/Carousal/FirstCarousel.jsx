

import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,EffectCoverflow } from 'swiper/modules';
import BookCover from '../Bookcover';

const FirstCarousel = ({ data }) => {
  // const [currentSlide, setCurrenslide] = useState();
  // console.log(thumbsSwiper)
  return (
    <div className="w-[100%] max-w-[70%] sm:max-w-[60%] md:max-w-[900px] relative left-5  mx-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch:10,
          depth: 50,
          modifier:1,
          scale:1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        ons
        // onSwiper={setThumbsSwiper}
        modules={[EffectCoverflow,Autoplay]}
        // className="mySwiper"
        className="w-full custom-swiper flex justify-start"
      >
          {data?.map((book, index) => (
            <SwiperSlide
              key={index}
              className="custom-slide flex  flex-col text-left items-center max-w-[200px] sm:max-w-[320px] md:max-w-[500px]"
            >
              <h1 className="mb-2 text-black font-inters font-medium text-[8px] sm:text-sm">{book.isavailable}</h1>
              <div className="w-full relative aspect-[1/1.4]">
                <BookCover src={book.imgSrc} />
              </div>
              <h3 className="text-base sm:text-xl mt-4 sm:mt-5 text-white font-semibold font-markazitext mb-2">
                {book.title}
              </h3>
              <p className="text-xs sm:text-base font-alkatra font-medium text-white">
                {book.releaseDate}
              </p>
            </SwiperSlide>
          ))}

        
      </Swiper>
    </div>
  );
};

export default FirstCarousel;
