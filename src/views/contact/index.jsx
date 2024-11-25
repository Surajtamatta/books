
const Subscribe = () => {

  return (
    <section id='contact' className="w-full sm:min-h-[90vh]   bg-[#1f1e2c] p-6">
      {/* Newsletter Subscription Section */}
    <div className="flex flex-col justify-between items-center">
    <h2 className="mb-8 py-6 sm:py-20 text-4xl sm:text-7xl font-thin italic font-metal  text-gray-200">Get <span className="not-italic font-stix ">In Touch.</span></h2>
      <div className=" w-full max-w-screen-xl text-white flex flex-col sm:flex-row items-center lg:items-end justify-start  gap-6">

  {/* <!-- Left Section --> */}
      <div className="w-full md:w-2/5 h-full relative sm:bottom-8 flex flex-col text-center  mb-8 lg:mb-0 space-y-6 sm:space-y-10">
        
        <p className="text-6xl top-10 font-light italic text-[#d6d5db] font-allinpiska sm:text-9xl">Questions?</p>
        <p className="text-lg text-gray-300">SEND ME A MESSAGE OR CONTACT <br/> MY TEAM FOR BUSINESS INQUIRIES
         </p>

          <div className="space-y-2 sm:space-y-4" >
            <p className="font-semibold text-gray-400">LITERARY AGENT:</p>
            <p>Jessica Watterson</p>
            <a href="mailto:jessica@dijkstraagency.com" className="text-[#d6d5db] underline">jessica@dijkstraagency.com</a>
          </div>
          <div className="space-y-2 sm:space-y-4" >
            <p className="font-semibold  text-gray-400">SUBRIGHTS & LICENSING:</p>
            <p className=''>Andrea Cavallaro</p>
            <a href="mailto:andrea@dijkstraagency.com" className="text-[#d6d5db] underline">andrea@dijkstraagency.com</a>
          </div>
       
      </div>

  {/* <!-- Right Section (Form) --> */}
  <div className="w-full md:w-1/2">
    <form className="space-y-6">
      <input 
        type="text" 
        placeholder="full name" 
        className="w-full px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6d5db] rounded-sm"
        required
      />
      <input 
        type="email" 
        placeholder="email address" 
        className="w-full px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6d5db] rounded-sm"
        required
      />
      <textarea 
        placeholder="message..." 
        rows="7" 
        className="w-full px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6d5db] rounded-sm"
        required
      ></textarea>
      <button 
        type="submit" 
        className="px-6 py-2 bg-transparent border border-gray-500 text-white font-semibold hover:bg-gray-600 rounded-sm"
      >
        SEND
      </button>
    </form>
  </div>
</div>
    </div>

    </section>
  );
}

export default Subscribe;
