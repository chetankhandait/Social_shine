import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section
      className="bg-[#0e0f11] text-white pt-20 pb-8 flex lg:min-h-screen flex-col items-center justify-center"
      id="Contact"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-8">
          <span className="text-blue-400"> Are you</span> ready?
        </h2>
        <p className="mb-16">
          Our SocialShine Social Media Agency would love to help take your brand
          to the next level.
        </p>
        <NavLink to="/contact-us">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300 mb-12">
            Contact Us
          </button>
        </NavLink>
      </div>
      <div className="mt-12 flex space-x-6">
        <a
          href="https://www.facebook.com/profile.php?id=61557150837573"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaFacebookF size={24} />
        </a>
      
        <a
          href="https://www.linkedin.com/company/socialshine/?viewAsMember=true"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
         
      </div>
      {/* <div className="mt-8 text-gray-400 text-sm text-center">
        © 2024 Cave Social | All rights reserved |{" "}
        <a href="#" className="underline">
          Privacy
        </a>
      </div> */}
    </section>
  );
};

export default Footer;
