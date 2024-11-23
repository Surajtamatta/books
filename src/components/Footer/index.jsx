import { FaInstagram, FaTiktok, FaGoodreadsG } from 'react-icons/fa';






const Footer = () => {
  return (
    <footer className="min-h-[10vh] bg-[#1f1e2c] flex justify-center  text-white py-4">
      <div className="flex flex-col items-center  justify-center space-y-2 sm:space-y-4 ">
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl sm:text-3xl">
          <a href="https://www.instagram.com/authorbalkhabra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-gray-400 transition-colors duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaTiktok className="hover:text-gray-400 p-[2px] transition-colors duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaGoodreadsG className="hover:text-gray-400 p-[2px]  transition-colors duration-200" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-center text-gray-300 px-6">
          COPYRIGHT © 2024 BAL KHABRA | ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
