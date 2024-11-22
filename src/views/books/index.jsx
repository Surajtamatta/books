import SecondCarousel from '../../components/Carousal/SecondCarousal';
import Image from 'next/image';
import { booksdata } from '@/json/bookdata';
const Books = () => {


  return (
    <section id='books' className="flex flex-col justify-center items-center  ">
     
        <SecondCarousel data={booksdata}  />    
    </section>
  
  );
};

export default Books;

