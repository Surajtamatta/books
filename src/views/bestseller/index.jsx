import React from 'react'
import Image from 'next/image';
import { MoveLeft ,MoveRight} from 'lucide-react';



const BestSeller = () => {
    const books = [
        {
          id: 1,
          title: 'UK edition',
          imgSrc: '/comfort2.png',
        },
        {
          id: 2,
          title: 'American edition',
          imgSrc: '/comfort-book.png',
        },
        {
          id: 3,
          title: 'Canadian edition',
          imgSrc: '/comfort2.png',
        },
      ];
  return (
    <section className="min-h-screen bg-[#f8f6f3] text-gray-800 pb-24">
      {/* Quote Section */}
      <div className="bg-[#121212] h-full max-h-[375px] text-white py-16 px-24 text-center flex justify-between ">
       
        <button className="h-16  aspect-square rounded-full bg-gray-800 p-1 flex justify-center items-center ">
                <MoveLeft className='text-white bg-black h-full w-full p-3 rounded-full z-[1]'/>        
        </button>
        {/* Carousel controls (static in this case) */}
        <div className="mt-8 flex flex-col w-full max-w-[600px]  justify-center gap-4">

          <p className="text-lg italic max-w-2xl mx-auto mb-8">
          "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives."
         </p>
        <p className="uppercase text-sm">The Sunday Times</p>
         
        </div>
        <button className="rounded-full h-16 aspect-square relative bg-gray-800 p-1 flex justify-center items-center quarter-circle  ">
            
                <MoveRight className='text-white  bg-black h-full w-full p-3 rounded-full z-[1]'/>
 
          </button>
      </div>



      {/* Main Book Section */}
      <div className="h-full mx-auto text-center p-16 mt-20 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">Number One Bestseller</h2>
        <h1 className="text-5xl w-full max-w-[582px]  font-thin mt-4 ">The <span className=' font-bold'>Comfort Book is Out Now</span></h1>

        {/* Book Editions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-14">
          {books.map((book,index) => (
            <div key={book.title} className={`flexflex-col  max-h-[600px] relative justify-start- ${index % 2 === 0 ? 'relative top-[60px]' : ''} `}>
           <div className='flex flex-col justify-start w-full max-w-[450px]'>
           <h1 className='text-start mb-2'>News</h1>
             <div  className={" bg-white p-14 w-full max-w-[340px] aspect-[17/23]  relative  flex justify-center  "}>
                        <Image
                                src={book.imgSrc}
                                alt={book.title}
                                width={226}
                                height={340}
                
                            />
                </div>
              <h3 className="text-start  text-xl mt-5 font-semibold mb-2">{book.title}</h3>
           </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSeller