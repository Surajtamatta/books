import React from 'react';
import FourCarousel from '../../components/Carousal/ForthCarousel';
import ThirdCarousal from '../../components/Carousal/ThirdCarousel';
import {instagramPhotos} from '../../json/instaphotos'
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
    
            <div class="bg-[#f6f0eb] flex flex-col items-center px-4 py-8">
              {/* <!-- Heading Section --> */}
              <div class="text-center mb-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#a97a94]">Join my newsletter.</h1>
                <p class="text-gray-800 text-lg mt-2">STAY UP TO DATE WITH BONUS CONTENT, FREEBIES AND MORE!</p>
              </div>

              {/* <!-- Newsletter Form Section --> */}
              <div class="w-full max-w-md mx-auto">
                <form class="space-y-4">
                  {/* <!-- Email Input --> */}
                  <input 
                    type="email" 
                    placeholder="email address" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a97a94] placeholder-gray-500"
                    required
                  />

                  {/* <!-- Subscribe Button --> */}
                  <button 
                    type="submit" 
                    class="w-full bg-black text-white font-medium py-3 rounded-md shadow-md hover:bg-gray-800"
                  >
                    subscribe!
                  </button>
                </form>
                <p class="text-center text-xs text-gray-600 mt-4">
                  By signing up, you agree to our <a href="#" class="underline">Terms of Service</a> and <a href="#" class="underline">Privacy Policy</a>. You can unsubscribe at any time.
                </p>
              </div>

              {/* <!-- Follow Me Section --> */}
              <div class="flex items-center justify-center mt-12">
                <p class="text-gray-800 font-medium text-base mr-2">Follow me!</p>
                <a href="https://instagram.com/authorbalkhabra" class="text-[#a97a94] text-lg font-semibold">@authorbalkhabra</a>
              </div>

              {/* <!-- Decorative Newspaper Image --> */}
              <div class="relative mt-8">
                {/* <img src="/path/to/newsletter-icon.png" alt="Newsletter" class="w-24 h-24 md:w-32 md:h-32 absolute bottom-0 right-0 shadow-lg"> */}
              </div>

  {/* <!-- Image Grid Section --> */}
            <div className='w-full h-full'>
                      <FourCarousel data={instagramPhotos} />
                  
                    </div>
          </div>

    </section>
  );
};

export default BestSeller;
