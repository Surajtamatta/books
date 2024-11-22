import React,{useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ForthCarousel = ({ data }) => {
  const swiperRef = useRef(null);
  const stopTimeoutRef = useRef(null); 

  const swiperOptions = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 'auto',
    speed: 4000,
    // grabCursor: true,
    mousewheel: true, // Corrected this prop
    modules: [Autoplay],
    allowTouchMove: false,
    className: "continuous-scroll",
  };

  // const handleMouseEnter = () => {
  //   if (swiperRef.current) {

  //     swiperRef.current.autoplay.stop(); 
  // };
  // }

  // const handleMouseLeave = () => {
  //   if (swiperRef.current) {
  //     // setTimeout(() => {
  //       swiperRef.current.autoplay.start(); 
  //     // }, 2000); 
  //   }
  // };

  return (
    <div
      className="w-full mx-auto"

    >
      <Swiper 
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        {...swiperOptions}
      >
        {data?.map((book, index) => (
          <SwiperSlide 
            key={index} 
            className="transition ease-in-out flex max-w-[240px] w-full justify-center items-center"
          >
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
