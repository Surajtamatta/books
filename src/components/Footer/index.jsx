import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1e28] text-white py-8">
      <div className="flex flex-col items-center space-y-4">
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-gray-400 transition-colors duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="hover:text-gray-400 transition-colors duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-gray-400 transition-colors duration-200" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-center text-gray-300">
          COPYRIGHT © 2024 BAL KHABRA | ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
