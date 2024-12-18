

"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1e3a8a] via-[#1f2937] to-[#1e3a8a] text-white py-6">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        {/* Footer Content Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Left Side: Name and Copyright */}
          <p className="text-xs sm:text-sm font-medium text-center sm:text-left tracking-wide">
            &copy; 2024 Muhammad Owais - Frontend Developer
          </p>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-6">
            <span
              onClick={() => window.open("https://github.com/muhammadowaisshah1", "_blank", "noopener,noreferrer")}
              className="text-2xl text-white hover:text-[#FFB81C] transition transform hover:scale-125 hover:shadow-md cursor-pointer"
            >
              <FaGithub />
            </span>
            <span
              onClick={() => window.open("https://www.linkedin.com/in/syed-owais-shah-1b39962b7/", "_blank", "noopener,noreferrer")}
              className="text-2xl text-white hover:text-[#FFB81C] transition transform hover:scale-125 hover:shadow-md cursor-pointer"
            >
              <FaLinkedin />
            </span>
            <span
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61559959665152&mibextid=ZbWKwL", "_blank", "noopener,noreferrer")}
              className="text-2xl text-white hover:text-[#FFB81C] transition transform hover:scale-125 hover:shadow-md cursor-pointer"
            >
              <FaFacebook />
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-500 mt-4"></div>

        {/* Hire Me Button Section */}
        <div className="mt-4 flex justify-center">
          <Link href="/contact" passHref>
            <span className="bg-[#FFB81C] text-black py-2 px-8 rounded-full text-md font-semibold hover:bg-[#3972ed] hover:text-white transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl cursor-pointer tracking-wider">
              Hire Me
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


