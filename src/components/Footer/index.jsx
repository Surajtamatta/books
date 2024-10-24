import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F1E2C] text-white  md:px-24 p-10 flex flex-col space-y-6">
      <div className="container flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        {/* Say Hello Section */}
        <div className='flex flex-col items-start md:items-start text-center md:text-left'>
          <h3 className="text-xs sm:text-sm font-semibold uppercase mb-2 font-inters tracking-wide">
            Say Hello
          </h3>
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold font-alegreya">
            Hello@mattheigh.com
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="w-full  flex  md:flex-row gap-6 justify-between">
          {/* Samaritans */}
          <div className="flex flex-col items-start md:items-start gap-2">
            <h4 className="text-xs sm:text-sm font-semibold uppercase font-inters tracking-wider">
              Samaritans
            </h4>
            <p className="text-sm sm:text-base font-kreon">
              jo@samaritans.org
            </p>
            <p className="text-sm sm:text-base font-kreon">
              0300 123 3393
            </p>
          </div>
          {/* Mind Infoline */}
          <div className="flex flex-col items-start md:items-start gap-2">
            <h4 className="text-xs sm:text-sm font-semibold uppercase font-inters tracking-wider">
              Mind Infoline
            </h4>
            <p className="text-sm sm:text-base font-kreon">
              info@mind.org.uk
            </p>
            <p className="text-sm sm:text-base font-kreon">
              0808 802 5544
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#4e4d4d] my-6"></div>

      {/* Social Links and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        <p className="text-xs sm:text-sm font-inters">
          Copyright © 2023 — Matt Haig. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
