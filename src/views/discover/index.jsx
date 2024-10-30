import SecondCarousel from '../../components/Carousal/SecondCarousal';
import Image from 'next/image';
import { booksdata } from '@/json/bookdata';
const Discover = () => {


  return (
    <section className="flex flex-col justify-center items-center  ">
    <div className='flex flex-col justify-center items-center overflow-hidden'>
    <div className="w-full h-full flex flex-col-reverse sm:flex-row items-center mt-12 sm:mt-14 md:mt-16">
      
      {/* <!-- Text Content --> */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 py-8  sm:p-4 md:p-6 lg:p-16">
        <h2 className="text-3xl sm:text-4xl relative md:text-5xl lg:text-7xl mb-8 font-metal font-thin text-[#d178b0]">
         <div className='w-24 top-[-1.8rem] left-[-1rem] sm:w-28  md:w-36 sm:top-[-2rem] sm:left-[-1rem] lg:w-52 aspect-square absolute md:top-[-3rem] md:left-[-1rem] lg:top-[-4.3rem] lg:left-[-1.8rem]'>
          <Image src='/circle.png' alt="send image" 
          layout="fill"
            objectFit="cover" />
         </div>
          About the author
          <Image src='/send.png' alt="send image" width={160} height={160} className='absolute top-[-3rem] right-[-10rem]'/>
        </h2>
        
        <p className="w-full text-base  md:text-xl text-justify sm:text-left lg:text-2xl font-poppins font-normal leading-relaxed mb-4">
          Hi there! I'm Bal, your resident book lover and professional daydreamer.
        </p>
  
        <p className="w-full text-base  md:text-xl text-justify sm:text-left lg:text-2xl font-poppins font-normal leading-relaxed mb-4">
          When I'm not glued to my keyboard, juggling thirty different novel ideas, or using banter to convince my characters that they're perfect for each other, you can catch me dragging unsuspecting souls into the Great Canadian Outdoors for some fresh air (and a little inspiration).
        </p>
  
        <p className="w-full text-base  md:text-xl text-justify sm:text-left lg:text-2xl font-poppins font-normal leading-relaxed mb-4">
          When I do write, I love to blend all my favourite things: sports, banter, diversity, and fluff! So, if that sounds like your cup of chai, stick around, and we'll embark on this literary journey together!
        </p>
      </div>
  
      {/* <!-- Image Content --> */}
      <div className="w-full md:w-1/2 p-10 md:p-6 lg:p-16 aspect-square ">
        <div className="relative w-full h-full rounded-full bg-[#f6c3c8] border-2">
          <Image
            src="/girl.png"
            alt="girl"
            layout="fill"
            objectFit="cover"
            className="shadow-default rounded-full border-2 border-black w-11/12"
          />
        </div>
      </div>
  
    </div>
  
    {/* <!-- Divider Line --> */}
    <div  className="w-full hidden relative  sm:flex bg-gray-300 h-[1px] justify-center items-center my-12 sm:my-16 md:my-20 ">
      <hr className="w-full max-w-[25%] h-1 absolute bg-black  left-[63%]" />
    </div>
    </div>

        <SecondCarousel data={booksdata}  />    
  
  </section>
  
  );
};

export default Discover;



// jsMath-cmmi10:author
//Metal


//gantari