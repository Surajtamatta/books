import React from 'react';
import FourCarousel from '../../components/Carousal/ForthCarousel';
import ThirdCarousal from '../../components/Carousal/ThirdCarousel';
import Image from 'next/image';
import {instagramPhotos} from '../../json/instaphotos'
import { GrInstagram } from "react-icons/gr";
import { dummySlides } from '@/json/thoughtsdata';
import Form from '@/components/Form';
const BestSeller = () => {
 



  return (
    <section>
      
          <ThirdCarousal  data={dummySlides} />
    
            <section id="subscribe" className="relative flex sm:min-h-screen  py-6   flex-col justify-evenly  sm:justify-evenly  items-center ">
              {/* <!-- Heading Section --> */}
              <div className='flex flex-col gap-6 sm:mb-10  sm:top-6'>


              {/* <!-- Newsletter Form Section --> */}
              <div className="w-full max-w-[600px] mt-8  mx-auto flex flex-col justify-center items-center ">
                <Form/>
                <div className='w-full max-w-lg px-6'>
                <p className="w-full  text-center text-xs text-gray-600 md:mt-[-55px]">
                  By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>. You can unsubscribe at any time.
                </p>
                </div>
               
              </div>



                <div className='relative mt-10 flex justify-end items-start'>
                <div className=" w-1/3 lg:w-2/5 aspect-square absolute top-[-5rem] md:top-[-6rem] md:right-[-6rem]  lg:right-[-12rem] ">
                <Image src='/newspaper.png' alt="send image" layout='fill' objectFit='cover'/>
                </div>
                </div>

              </div>


            
            <div className='w-full relative mt-14  sm:top-6 px-6'>
              <div className="w-full group  relative sm:top-[-1rem] gap-1 flex items-center justify-start  py-2">
                <p className=" font-thin text-base mr-2 font-winslowtitle ">Follow me! </p>
                <div className='bg-[#d178b0]  group-hover:bg-[#ff92d7] p-1 rounded-full'>
                <GrInstagram className=" text-white text-lg font-semibold"/>
                </div>
                <a href="https://www.instagram.com/authorbalkhabra/" className="text-[#d178b0] group-hover:text-[#ff95d8]  text-lg font-metal font-semibold">@authorbalkhabra</a>
              </div>
              <FourCarousel data={instagramPhotos} />
                  
            </div>
          </section>

    </section>
  );
};

export default BestSeller;
