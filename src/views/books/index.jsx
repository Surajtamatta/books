import SecondCarousel from '../../components/Carousal/SecondCarousal';
import Image from 'next/image';
import { booksdata } from '@/json/bookdata';
const Books = () => {


  return (
    <section id='books' className="flex flex-col justify-center items-center  ">
      <div  className="w-full hidden relative  sm:flex bg-gray-300 h-[1px] justify-center items-center  mt-12 md:mt-6 mb-12 sm:mb-16 md:mb-20 ">
      <hr className="w-full max-w-[25%] h-1 absolute bg-black  left-[63%]" />
      </div>
        <SecondCarousel data={booksdata}  />    
    </section>
  
  );
};

export default Books;

