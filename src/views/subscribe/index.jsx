import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

const Subscribe = () => {
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
    <section className="w-full flex flex-col justify-center items-center">
      {/* Newsletter Subscription Section */}
      
      <div class="bg-[#1f1e28] w-full text-white flex flex-col md:flex-row items-center justify-center px-4 py-8">
  {/* <!-- Left Section --> */}
  <div class="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 space-y-6">
    <h2 class="text-4xl font-semibold italic text-gray-200">Get <span class="not-italic">In Touch.</span></h2>
    <p class="text-3xl font-light italic text-[#d6d5db]">Questions?</p>
    <p class="text-lg text-gray-300">SEND ME A MESSAGE OR CONTACT MY TEAM FOR BUSINESS INQUIRIES</p>

    <div class="space-y-4">
      <div>
        <p class="font-semibold text-gray-400">LITERARY AGENT:</p>
        <p>Jessica Watterson</p>
        <a href="mailto:jessica@dijkstraagency.com" class="text-[#d6d5db] underline">jessica@dijkstraagency.com</a>
      </div>
      <div>
        <p class="font-semibold text-gray-400">SUBRIGHTS & LICENSING:</p>
        <p>Andrea Cavallaro</p>
        <a href="mailto:andrea@dijkstraagency.com" class="text-[#d6d5db] underline">andrea@dijkstraagency.com</a>
      </div>
    </div>
  </div>

  {/* <!-- Right Section (Form) --> */}
  <div class="w-full lg:w-1/2 max-w-lg">
    <form class="space-y-4">
      <input 
        type="text" 
        placeholder="full name" 
        class="w-full px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6d5db] rounded-sm"
        required
      />
      <input 
        type="email" 
        placeholder="email address" 
        class="w-full px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6d5db] rounded-sm"
        required
      />
      <textarea 
        placeholder="message..." 
        rows="4" 
        class="w-full px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6d5db] rounded-sm"
        required
      ></textarea>
      <button 
        type="submit" 
        class="px-6 py-2 bg-transparent border border-gray-500 text-white font-semibold hover:bg-gray-600 rounded-sm"
      >
        SEND
      </button>
    </form>
  </div>
</div>

    </section>
  );
}

export default Subscribe;
