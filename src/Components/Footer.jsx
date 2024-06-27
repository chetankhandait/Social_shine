// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   //   FaLinkedinIn,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-6  ">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-12">
//           {/* Logo and Description */}
//           <div className="md:w-1/3 text-center space-y-4">
//             <div className="flex justify-start items-center">
//               <img src="./instagram logo.jpg" className="h-9" />
//               <h2 className="text-white text-2xl font-bold">Social Shine</h2>
//             </div>
//             <p className="text-left">
//               We're a team of strategic creator and digital innovator, united
//               focus in our pursuit of mastery and joyful.
//             </p>
//           </div>
//           {/* Pages */}
//           <div className="md:w-1/3 space-y-4">
//             <h3 className="text-white font-bold">Pages</h3>
//             <ul className="space-y-3">
//               <li className="cursor-pointer">Home</li>
//               <li className="cursor-pointer">About</li>
//               <li className="cursor-pointer">Services</li>
//               <li className="cursor-pointer">Contact Us</li>
//               {/* <li>Portfolio</li>
//               <li>Portfolio Single</li> */}
//             </ul>
//           </div>
//           {/* Utility Pages */}
//           {/* <div className="md:w-1/4 space-y-4">
//             <h3 className="text-white font-bold">Utility Pages</h3>
//             <ul className="space-y-2">
//               <li>Style Guide</li>
//               <li>Instruction</li>
//               <li>License</li>
//               <li>Changelog</li>
//               <li>Error 404</li>
//               <li>Password Protected</li>
//             </ul>
//           </div> */}
//           {/* Subscribe */}
//           <div className="mx-auto md:w-1/2 lg:w-1/3 text-center md:text-left space-y-4">
//             <h3 className="text-white font-bold">Subscribe</h3>
//             <div className="flex items-center justify-center md:justify-start bg-white rounded-full py-1 pr-1">
//               <input
//                 type="email"
//                 placeholder="Enter email here"
//                 className="px-4 py-2 w-full max-w-xs text-black focus:outline-none rounded-full"
//               />
//               <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-800 pt-6 space-y-4 md:space-y-0">
//           <div className="text-center md:text-left space-y-2">
//             <p>Contact Us</p>
//             <p>+91 8878931385</p>
//           </div>
//           <div className="text-center md:text-left space-y-2">
//             <p>Address</p>
//             <p>JEC, Jabalpur, ( M.P.)</p>
//           </div>
//           <div className="flex space-x-10 mt-4 md:mt-0">
//             <FaFacebookF className="text-2xl bg-white rounded full p-1 text-black  transition-colors" />
//             <FaTwitter className="text-2xl bg-white rounded full p-1  text-black transition-colors" />
//             <FaInstagram className="text-2xl bg-white rounded full p-1  text-black transition-colors" />
//             {/* <FaLinkedinIn className="text-xl hover:text-white transition-colors" /> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
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
    <section className="bg-black text-white pt-20 pb-8 flex lg:min-h-screen flex-col items-center justify-center">
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
          href="#"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
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
        <a
          href="#"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaYoutube size={24} />
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
