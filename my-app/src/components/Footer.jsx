import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://hi-in.facebook.com/public/Waquar-Ahmed-Nawaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://github.com/waquar78/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/waquar_ahmed_nawaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://in.linkedin.com/in/waquar-ahmed-nawaz-024721251"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} className="cursor-pointer" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Waquar Ahmed. Thank you for visiting my portfolio.
              </p>
              <p className="text-sm">Made with ❤️ using React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
