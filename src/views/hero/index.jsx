import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
const  Hero=()=> {
  const books = [
    {
      title: "How to Stop Time",
      imgSrc: "/how-to-stop-time.png",
      readTime: "2 min read",
      releaseDate: "November 2000",
    },
    {
      title: "The Comfort Book",
      imgSrc: "/comfort-book.png",
      readTime: "3 min read",
      releaseDate: "November 2000",
    },
    {
      title: "The Humans",
      imgSrc: "/the-humans.png",
      readTime: "4 min read",
      releaseDate: "November 2000",
    },
    {
      title: "Reasons to Stay Alive",
      imgSrc: "/reasons-to-stay-alive.png",
      readTime: "1 min read",
      releaseDate: "November 2000",
    },
  ];

  return (

       <section className='flex flex-col justify-center relative items-center pt-24'>
            {/* <div className=' w-full h-1/2 absolute top-0 z-[-1]'/> */}
            <div className='bg-[#151515] w-full h-1/2 absolute bottom-0 '/>

        <div className="text-center mb-12">
          <h2 className="text-[83px] font-librecaslondisplay font-light italic tracking-tighter">The Sunday Times</h2>
          <p className="text-[80px]  font-belleza font-semibold leading-8 ">Number One Bestseller</p>
        </div>
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {books.map((book,index) => (
            <div key={book.title} className={`flex text-white flex-col  max-h-[600px] relative justify-start- ${index % 2 === 0 ? 'relative top-[60px]' : ''} `}>
                <h1 className='mb-2  text-black font-inters font-semibold text-xs '>News</h1>
             <div  className={" bg-white p-14 w-full max-w-[340px] aspect-[17/23]  relative  flex justify-center  "}>
                        <Image
                                src={book.imgSrc}
                                alt={book.title}
                                width={226}
                                height={340}
                
                            />
                </div>
              <h3 className="text-xl mt-5 font-semibold mb-2 font-markazitext ">{book.title}</h3>
              <p className="text-gray-600 mt-3 font-markazitext font-medium">{book.readTime}</p>
              <p className="text-gray-400">{book.releaseDate}</p>
            </div>
          ))}
        </div>


        <div className="mt-16 w-full h-[400px] text-center flex flex-col items-center justify-center text-white z-[1]">
          <h2 className="text-2xl font-semibold mb-4">Books are available on</h2>
          <div className="flex justify-between items-center space-x-4 md:space-x-8 h-auto w-full max-w-[700px] mx-auto">
            <div className="w-24 md:w-32">
                <Image
                src="/amazon.png"
                alt="Amazon"
                width={155}
                height={30}
                className="w-full h-auto"
                />
            </div>
            <div className="w-20 md:w-28">
                <Image
                src="/barnes.png"
                alt="Barnes & Noble"
                width={120}
                height={20}
                className="w-full h-auto"
                />
            </div>
            <div className="w-18 md:w-24">
                <Image
                src="/target.png"
                alt="Target"
                width={110}
                height={30}
                className="w-full h-auto"
                />
            </div>
            <div className="w-24 md:w-32">
                <Image
                src="/walmart.png"
                alt="Walmart"
                width={135}
                height={50}
                className="w-full h-auto"
                />
            </div>
            <div className="w-28 md:w-36">
                <Image
                src="/booksamillion.png"
                alt="Books A Million"
                width={150}
                height={33}
                className="w-full h-auto"
                />
            </div>
            </div>

        </div>
      {/* </div> */}
       </section>
    
      

  )
}


export default Hero