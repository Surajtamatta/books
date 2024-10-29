import Image from 'next/image';
import { booksdata } from '@/json/bookdata';
import BookCarousel from '../../components/Carousal/FirstCarousel';
import { Amazon, Target, Barnenobles, Booksmellion, Walmart } from '../../svg/logo';


const Hero = () => {
 

  return (
    <section className="flex flex-col  justify-center relative items-center pt-32 sm:pt-20 md:pt-24 overflow-x-hidden">
      {/* Background Overlay */}
      <div className="bg-[#1f1e2c]  w-full h-1/2 absolute bottom-0 " />

      {/* Heading Section */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 ">
        <h2 className="text-[30px] sm:text-[40px] md:text-[63px] mt-4 font-stix font-normal ">
        Off The Ice
        </h2>
        <p className="text-[40px] sm:text-[60px] md:text-[80px] font-stix font-normal leading-8">
        Latest Releases
        </p>
      </div>

        <BookCarousel data={booksdata} className="w-full"/>

      {/* Available on Section */}
      <div className="my-12 sm:my-16 md:my-20 w-full h-auto text-center flex flex-col items-center justify-center text-white z-[1] px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-stix tracking-normal mb-4">
          <span className="font-stix italic font-light">Books</span> are available on
        </h2>

        {/* Book Retailer Logos */}
        <div className="flex w-full justify-between mt-6 sm:mt-8  items-center space-x-4 md:space-x-8 h-auto sm:w-3/4 ">
          <div className="w-20 sm:w-24 md:w-40 cursor-pointer">
           <Amazon />
          </div>
          <div className="w-20 sm:w-24 md:w-40 cursor-pointer">
          <Barnenobles/>
          </div>
          <div className="w-20 sm:w-14 md:w-32 cursor-pointer">
          <Target/>
          </div>
          <div className="w-20 sm:w-24 md:w-40 cursor-pointer">
           <Walmart/>
          </div>
          <div className="w-20 sm:w-24 md:w-60 cursor-pointer">
          <Booksmellion/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
