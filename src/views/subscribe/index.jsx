import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";


const Subscribe=()=> {

  const instagramPhotos = [
    { id: 1, imgSrc: '/photos1.png', alt: 'Beach dog' },
    { id: 2, imgSrc: '/photos2.png', alt: 'Man with dog' },
    { id: 3, imgSrc: '/photos3.png', alt: 'Man holding book' },
    { id: 4, imgSrc: '/photos4.png', alt: 'Man hugging dog' },
    { id: 5, imgSrc: '/photos5.png', alt: 'Book: Reasons to Stay Alive' },
    { id: 6, imgSrc: '/photos6.png', alt: 'Man selfie' },
    { id: 7, imgSrc: '/photos7.png', alt: 'Bowl of food' },
    { id: 8, imgSrc: '/photos8.png', alt: 'Book: The Girl Who Saved Christmas' },
  ];

  return (
    <section className="min-h-screen bg-[#f8f6f3] text-gray-800 py-24 flex flex-col justify-center items-center ">
      {/* Newsletter Subscription Section */}
    

<div className="w-full bg-white   flex flex-col justify-start md:flex-row items-center  ">
        
        <div className="md:w-full flex justify-star items-start p-16 md:pl-24 md:px-24">
            <div className='w-full max-w-[386px] '>
                <h2 className="text-4xl font-bold mb-4">Subscribe to my newsletter</h2>
                <p className="text-lg mb-6">Be signing up you agree with our Terms & Conditions and Privacy Policy.</p>
                
                <div className="flex border-2 ">
                    <input
                    type="email"
                    placeholder="Your email"
                    className="outline-none focus:bord p-4 rounded-l-md w-full relative"
                    />
                    <button className="rounded-r-md bg-transparent px-6">
                    <FaArrowRightLong/>
                    </button>
                </div>
        
                <p className="mt-4 text-sm text-gray-600">
                    By signing up, you agree with our Terms & Conditions and Privacy Policy. To opt out, click unsubscribe in my emails.
                </p>
            </div>
        </div>
        <div className="relative w-full max-h-[671px] aspect-square">
          <Image
            src="/photos2.png"
            alt="Man with dog"
            layout="fill"
            objectFit="cover"
            className="shadow-lg"
          />
        </div>
      </div>





      {/* Instagram Section */}
      <div className="container w-100% mt-16 text-center py-16 md:max-w-[1100px] flex flex-col justify-center items-center">
        <h2 className="text-4xl w-full max-w-[300px] font-bold mb-10">Follow <span>me on Instagram</span></h2>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {instagramPhotos.map((photo) => (
            <div key={photo.id} className="relative w-full  aspect-[1/1.18]">
              <Image
                src={photo.imgSrc}
                alt={photo.alt}
                width={256}
                height={298}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Subscribe