
import React from 'react';
import Image from 'next/image';

const CssCarousel = ({ data }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrolling Container */}
      <div className="flex gap-6 animate-scroll items-center w-max" id="carousel">
        {data.map((book, index) => (
          <div
            key={index}
            className="w-full aspect-square relative flex justify-center"
          >
            <Image src={book.imgSrc} alt={book.title} width={226} height={340} />
          </div>
        ))}
        {data.map((book, index) => (
          <div
            key={`${index}-duplicate`}
            className="w-full aspect-square relative flex justify-center"
          >
            <Image src={book.imgSrc} alt={book.title} width={226} height={340} />
          </div>
        ))}
      </div>


      <style jsx>{`
        #carousel {
          animation: scroll 30s linear infinite;
        }

        #carousel:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>


    </div>
  );
};

export default CssCarousel;
