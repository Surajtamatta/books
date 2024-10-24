import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-24 py-10 pt-24 flex flex-col">
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Say Hello Section */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-2">Say Hello</h3>
          <p className="text-2xl md:text-4xl font-bold">Hello@mattheigh.com</p>
        </div>

        {/* Contact Info Section */}
        <div className="w-full max-w-[400px] flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Samaritans */}
          <div className="flex flex-col justify-start items-start gap-4">
            <h4 className="text-sm font-semibold uppercase text-left">Samaritans</h4>
            <p className="text-base text-left">jo@samaritans.org</p>
            <p className="text-base text-left">0300 123 3393</p>
          </div>
          {/* Mind Infoline */}
          <div className="flex flex-col justify-start items-start gap-4">
            <h4 className="text-sm font-semibold uppercase text-left">Mind Infoline</h4>
            <p className="text-base text-left">info@mind.org.uk</p>
            <p className="text-base text-left">0808 802 5544</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#4e4d4d] flex justify-center items-center mt-12 mb-6"></div>

      {/* Social Links and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <p className="text-sm text-gray-400">
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
