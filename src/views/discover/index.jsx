import SecondCarousel from '../../components/Carousal/SecondCarousal';
import Image from 'next/image';

const Discover = () => {
  const books = [
    {
      id: '01',
      title: 'The Humans',
      imgSrc: '/humansmatt.png',
    },
    {
      id: '02',
      title: 'The Radleys',
      imgSrc: '/the-radleys.png',
    },
    {
      id: '03',
      title: 'The Possessed',
      imgSrc: '/the-radleys.png',
    },
    {
      id: '01',
      title: 'The Humans',
      imgSrc: '/humansmatt.png',
    },
    {
      id: '02',
      title: 'The Radleys',
      imgSrc: '/the-radleys.png',
    },
    {
      id: '03',
      title: 'The Possessed',
      imgSrc: '/the-radleys.png',
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center pt-12 sm:pt-16 md:pt-24">
      <div className="flex w-full flex-col lg:flex-row  justify-between lg:justify-between md:items-start items-center  ">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center w-full p-8 max-w-[550px] md:px-16 text-left mb-10 sm:mb-12 md:mb-16 ">
          <div className="w-full max-w-[340px] lg:max-w-[340px] md:max-w-[650px] ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-ibarrarealnova leading-tight sm:leading-[1.2] md:leading-[1.15]">
              <span className="italic font-extralight tracking-tight">Discover all</span> my books you were looking for
            </h1>
            <p className="mt-4 w-full max-w-[340px] lg:max-w-[340px] md:max-w-[650px] font-inters font-medium text-sm sm:text-base">
              It&apos;s December, a month of love and lights, but also a busy month of Christmas shopping. We&apos;ve made it easy for you.
            </p>
            <a href="#" className="underline mt-8 sm:mt-10 md:mt-14 inline-block font-inters font-semibold text-sm tracking-wide">
              VIEW ALL 32
            </a>
          </div>
        </div>

        {/* Books Grid Section */}
        
        
      <div className='w-full lg:max-w-[800px] '>
      <SecondCarousel data={books} />
      </div>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-black flex justify-center items-center m-24'>
            <hr className='w-full max-w-[300px] h-1 rounded-full bg-black'/>
        </div>

      {/* Highlighted Book Section */}
      <div className="w-full bg-white flex flex-col justify-start md:flex-row items-center mt-12 sm:mt-16 md:mt-20  ">
        <div className="relative w-full  md:w-1/2 aspect-square mb-6 md:mb-0">
          <Image
            src="/the-midnight-library.png"
            alt="The Midnight Library"
            layout="fill"
            objectFit="cover"
            className="shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex justify-center items-start p-8">
          <div className="w-full max-w-[450px] flex flex-col justify-center items-start">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:6xl mb-2 font-alegreya font-semibold">
              The Midnight Library{' '}
              <span className="font-extralight italic tracking-tighter">The No. 1 Sunday Times</span>{' '}
              <span className="font-ibarrarealnova font-semibold leading-normal">Bestseller</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 max-w-[340px] font-inters font-medium tracking-tight leading-relaxed">
              Nora&apos;s life has been going from bad to worse. Then, at the stroke of midnight on her last day on Earth, she finds herself
              transported to a library.
            </p>
            <a href="#" className="underline mt-6 sm:mt-8 md:mt-10 inline-block font-inters font-semibold text-sm tracking-wider">
              VIEW MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
