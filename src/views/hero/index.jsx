import Image from 'next/image';
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BookCarousel from '@/components/Carousal';

const Hero = () => {
  const books = [
    {
      title: "How to Stop Time",
      imgSrc: "/how-to-stop-time.png",
      readTime: "2 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "The Comfort Book",
      imgSrc: "/comfort-book.png",
      readTime: "3 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "The Humans",
      imgSrc: "/the-humans.png",
      readTime: "4 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "Reasons to Stay Alive",
      imgSrc: "/reasons-to-stay-alive.png",
      readTime: "1 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "How to Stop Time",
      imgSrc: "/how-to-stop-time.png",
      readTime: "2 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "The Comfort Book",
      imgSrc: "/comfort-book.png",
      readTime: "3 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "The Humans",
      imgSrc: "/the-humans.png",
      readTime: "4 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
    {
      title: "Reasons to Stay Alive",
      imgSrc: "/reasons-to-stay-alive.png",
      readTime: "1 min read",
      isnew:'New',
      releaseDate: "November 2000",
    },
  ];

  return (
    <section className="flex flex-col  justify-center relative items-center pt-32 sm:pt-20 md:pt-24 overflow-x-hidden">
      {/* Background Overlay */}
      <div className="bg-[#1F1E2C]  w-full h-1/2 absolute bottom-0 " />

      {/* Heading Section */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 ">
        <h2 className="text-[40px] sm:text-[60px] md:text-[83px] mt-4 font-librecaslondisplay font-light italic tracking-tighter">
          The Sunday Times
        </h2>
        <p className="text-[40px] sm:text-[60px] md:text-[80px] font-belleza font-semibold leading-8">
          Number One Bestseller
        </p>
      </div>

        <BookCarousel data={books} className="w-full"/>

      {/* Available on Section */}
      <div className="my-12 sm:my-16 md:my-20 w-full h-auto text-center flex flex-col items-center justify-center text-white z-[1] px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-ibarrarealnova tracking-tight mb-4">
          <span className="font-adventpro italic font-light">Books</span> are available on
        </h2>

        {/* Book Retailer Logos */}
        <div className="flex justify-between mt-6 sm:mt-8 p-4 items-center space-x-4 md:space-x-8 h-auto w-full max-w-[700px] mx-auto">
          <div className="w-20 sm:w-24 md:w-32">
            <Image src="/amazon.png" alt="Amazon" width={155} height={30} className="w-full h-auto" />
          </div>
          <div className="w-18 sm:w-20 md:w-28">
            <Image src="/barnes.png" alt="Barnes & Noble" width={120} height={20} className="w-full h-auto" />
          </div>
          <div className="w-16 sm:w-18 md:w-24">
            <Image src="/target.png" alt="Target" width={110} height={30} className="w-full h-auto" />
          </div>
          <div className="w-20 sm:w-24 md:w-32">
            <Image src="/walmart.png" alt="Walmart" width={135} height={50} className="w-full h-auto" />
          </div>
          <div className="w-24 sm:w-28 md:w-36">
            <Image src="/booksamillion.png" alt="Books A Million" width={150} height={33} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
