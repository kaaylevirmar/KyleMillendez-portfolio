import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-center md:text-left">
            © {currentYear} Kyle Virmar Millendez. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & TailwindCSS</span>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/kyle-virmar-millendez-a35716270/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button hover:text-blue-500"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/kylevirmarmillendez"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button hover:text-gray-100"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;