import Image from 'next/image';

const Discover=()=> {
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
  ];

  return (
    <section className=" text-gray-800  flex flex-col justify-center items-center pt-24">
     <div className='flex w-full justify-center  items-center'>
         {/* Heading Section */}
        <div className=" flex flex-col justify-center items-center w-full max-w-[550px] text-left mb-16">
            <div className='w-full max-w-[340px] '>
                <h1 className="text-4xl w-full font-bold">Discover all <span>my books you were looking for</span></h1>
                <p className="mt-4 w-full max-w-[287px] text-lg">
                It&apos;s December, a month of love and lights, but also a busy month of Christmas shopping. We&apos;ve made it easy for you.
                </p>
                <a href="#" className="underline mt-4 inline-block">VIEW ALL 32</a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {books.map((book,index) => (
            <div key={index} className={'flex  flex-col  max-h-[500px] relative justify-start'}>
                <h1 className='mb-2'>{book.id}</h1>
             <div  className={" bg-white p-10 w-full max-w-[321px] aspect-[17/23]  relative  flex justify-center  "}>
                        <Image
                                src={book.imgSrc}
                                alt={book.title}
                                width={195}
                                height={300}
                            />
                </div>
              <h3 className="text-xl mt-5 font-semibold mb-2">{book.title}</h3>
            </div>
          ))}
        </div>
     </div>

        <div className='w-full h-[1px] bg-black flex justify-center items-center m-24'>
            <hr className='w-full max-w-[300px] h-1 rounded-full bg-black'/>
        </div>


      {/* Highlighted Book Section */}
      <div className="w-full bg-white   flex flex-col justify-start md:flex-row items-center  mt-16 ">
        <div className="relative  w-full max-w-[600px] md:w-1/2 aspect-square">
          <Image
            src="/the-midnight-library.png"
            alt="The Midnight Library"
            layout="fill"
            objectFit="cover"
            className="shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex justify-center items-start">
          <div className='w-full max-w-[450px] flex flex-col justify-center items-start'>
            <h2 className="text-6xl font-bold mb-4 ">The Midnight Library <span className='font-thin'>The No. 1 Sunday Times</span> Bestseller</h2>
            <p className="text-lg mb-4 max-w-[340px]">
                Nora&apos;s life has been going from bad to worse. Then, at the stroke of midnight on her last day on Earth, she finds herself transported to a library.
            </p>
            <a href="#" className="underline">VIEW MORE</a>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Discover