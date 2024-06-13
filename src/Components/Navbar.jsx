// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src="./instagram logo.jpg"
            alt="Canvix Logo"
            className="h-8 "
          />
          <span className="text-xl font-bold">SocialShine</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#home" className="hover:text-teal-400 ">
            Home
          </a>
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact Us
          </a>
        </div>
        <button className="bg-white text-gray-900 font-semibold  py-2 px-6 rounded-full">
          Get in touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
