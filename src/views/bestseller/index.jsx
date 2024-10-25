import React from 'react';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';
import FourCarousel from '../../components/Carousal/ForthCarousel';
import ThirdCarousal from '../../components/Carousal/ThirdCarousel';

const BestSeller = () => {
  const books = [
    {
      id: '01',
      title: 'UK edition',
      imgSrc: '/comfort2.png',
    },
    {
      id: '02',
      title: 'American edition',
      imgSrc: '/comfort-book.png',
    },
    {
      id: '03',
      title: 'Canadian edition',
      imgSrc: '/comfort2.png',
    },
    {
      id: '01',
      title: 'UK edition',
      imgSrc: '/comfort2.png',
    },
    {
      id: '02',
      title: 'American edition',
      imgSrc: '/comfort-book.png',
    },
    {
      id: '03',
      title: 'Canadian edition',
      imgSrc: '/comfort2.png',
    },
  ];


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

  const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <section className="min-h-screen  text-gray-800 pb-12 sm:pb-16 md:pb-24  overflow-x-hidden">
      
          <ThirdCarousal  data={dummySlides} />
     

      {/* Main Book Section */}
      <div className="h-full mx-auto text-center p-6 sm:p-10 md:p-16 mt-10 sm:mt-14 md:mt-20 flex flex-col justify-center items-center">
        <h2 className="text-sm sm:text-base mb-2 sm:mb-4 font-inters font-medium">Number One Bestseller</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl w-full max-w-[500px] mt-2 sm:mt-4 font-ibarrarealnova font-semibold">
          <span className="font-thin italic">The</span> Comfort book is out now
        </h1>

        <div>
          <div className='w-full h-full'>
            <FourCarousel data={books} slides={SLIDES} options={OPTIONS}/>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
