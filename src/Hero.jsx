// import React from "react";

// const Hero = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-black text-white py-4">
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
//           <div className="flex items-center">
//             <img src="./logo.png" alt="Canvix Logo" className="h-9 " />
//             <span className="text-xl font-bold ml-2">SocialShine</span>
//           </div>
//           <div className="hidden md:flex space-x-8 text-sm">
//             <a href="#home" className="hover:text-teal-400">
//               Home
//             </a>
//             <a href="#about" className="hover:text-teal-400">
//               About
//             </a>
//             <a href="#contact" className="hover:text-teal-400">
//               Contact Us
//             </a>
//           </div>
//           <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full">
//             Get in touch
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 pt-4">
//         <div className="max-w-screen-xl  mx-auto flex flex-col md:flex-row items-center">
//           <div className="flex-1 text-center md:text-left md:px-8  order-2 md:order-1">
//             <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold mb-6">
//               Ready to take your{" "}
//               <span className="text-teal-400">Business Growth</span> <br />
//               to the next level?
//             </h1>
//             <p className="text-gray-400 mb-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
//               massa libero egestas malesuada viverra gravida libero cursus nulla
//               leo pulvinar.
//             </p>

//             <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full mb-8">
//               Start your Free Trial
//             </button>
//             <div className="text-center md:text-left">
//               <span className="text-teal-400 block mb-4">
//                 Trusted by Leading Brands
//               </span>
//               <div className="flex justify-center md:justify-start space-x-4">
//                 <img
//                   src="/path/to/greenish.png"
//                   alt="Greenish"
//                   className="h-8"
//                 />
//                 <img
//                   src="/path/to/automation.png"
//                   alt="Automation"
//                   className="h-8"
//                 />
//                 <img src="/path/to/leafe.png" alt="Leafe" className="h-8" />
//                 <img
//                   src="/path/to/mindfulness.png"
//                   alt="Mindfulness"
//                   className="h-8"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 mb-8 md:mb-0  order-1 md:order-2 ">
//             <div className="relative">
//               <div className=" border border-teal-600 rounded-full p-6 mx-auto w-80 h-80 md:w-96 md:h-96 flex items-center justify-center ">
//                 <div className="border border-teal-100  rounded-full p-3">
//                   <img
//                     src="./Ellipse 10.png"
//                     alt="Team Working"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState } from "react";
// import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">Canvix</div>
        <button
          onClick={toggleMenu}
          className="md:hidden block text-xl focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </nav>
        <button className="hidden md:block bg-white text-gray-900 px-4 py-2 rounded-full font-bold">
          Get in touch
        </button>
        <div
          className={`md:hidden absolute top-16 right-2 bg-gray-800 rounded-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 py-11">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold">
            Ready to take your{" "}
            <span className="text-teal-400">Business Growth</span> to the next
            level?
          </h1>
          <p className="text-gray-400 text-lg py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit– et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold">
            Start your Free Trial
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 border-4 border-gray-700">
            <img
              src="./Ellipse 10.png"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 pb-12">
        <div className="text-center text-gray-400">
          Trusted by Leading Brands
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <img
            src="https://via.placeholder.com/80x40"
            alt="Greenish"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/80x40"
            alt="Automation"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/80x40"
            alt="Leafe"
            className="h-10"
          />
          {/* <img
            src="https://via.placeholder.com/80x40"
            alt="Mindfulness"
            className="h-10"
          /> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
