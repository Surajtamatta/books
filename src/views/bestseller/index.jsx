import React from 'react';
import FourCarousel from '../../components/Carousal/ForthCarousel';
import ThirdCarousal from '../../components/Carousal/ThirdCarousel';
import Image from 'next/image';
import {instagramPhotos} from '../../json/instaphotos'
import { GrInstagram } from "react-icons/gr";
const BestSeller = () => {
 

  const dummySlides = [
    { text: '“A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.”', author: 'THE SUNDAY TIMES' },
    { text: '“A masterpiece that captivates the soul and the heart.”', author: 'THE GUARDIAN' },
    { text: '“An extraordinary journey through time and emotion.”', author: 'NEW YORK TIMES' },
    { text: '“A compelling and heartwarming tale.”', author: 'THE INDEPENDENT' },
    { text: '“A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.”', author: 'THE SUNDAY TIMES' },
    { text: '“A masterpiece that captivates the soul and the heart.”', author: 'THE GUARDIAN' },
    { text: '“An extraordinary journey through time and emotion.”', author: 'NEW YORK TIMES' },
    { text: '“A compelling and heartwarming tale.”', author: 'THE INDEPENDENT' },
  ];

  return (
    <section className=" text-gray-800  overflow-x-hidden">
      
          <ThirdCarousal  data={dummySlides} />
    
            <div className="flex flex-col items-center px-6 py-8 mt-10">
              {/* <!-- Heading Section --> */}
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-stix font-normal text-[#d178b0]">Join my newsletter.</h1>
                <p className="text-gray-800 text-lg mt-2">STAY UP TO DATE WITH BONUS CONTENT, FREEBIES AND MORE!</p>
              </div>

              {/* <!-- Newsletter Form Section --> */}
              <div className="w-full max-w-lg mx-auto ">
                <form className="space-y-8">
                  {/* <!-- Email Input --> */}
                  <input 
                    type="email" 
                    placeholder="email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d178b0] placeholder-gray-500"
                    required
                  />

                  {/* <!-- Subscribe Button --> */}
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white font-medium py-3 rounded-md  shadow-md hover:bg-gray-800"
                  >
                    subscribe!
                  </button>
                </form>
                <p className="text-center text-xs text-gray-600 mt-4">
                  By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>. You can unsubscribe at any time.
                </p>
                <div className='relative mt-10 flex justify-end items-start'>
                <div className=" w-1/3 lg:w-2/5 aspect-square absolute top-[-3rem] md:top-[-8rem] md:right-[-12rem] ">
                <Image src='/newspaper.png' alt="send image" layout='fill' objectFit='cover'/>
                </div>
                </div>
              </div>

              {/* <!-- Follow Me Section --> */}
             

              {/* <!-- Decorative Newspaper Image --> */}


  {/* <!-- Image Grid Section --> */}
            
            <div className='w-full mt-16  h-full '>
              <div className="w-full relative top-[-2rem] lg:top-0 gap-1 flex items-center justify-start  p-2">
                <p className=" font-thin text-base mr-2 font-winslowtitle ">Follow me! </p>
                <div className='bg-[#d178b0] p-1 rounded-full'>
                <GrInstagram className=" text-white text-lg font-semibold"/>
                </div>
                <a href="https://instagram.com/authorbalkhabra" className="text-[#d178b0] text-lg font-metal font-semibold">@authorbalkhabra</a>
              </div>
              <FourCarousel data={instagramPhotos} />
                  
            </div>
          </div>

    </section>
  );
};

export default BestSeller;
