// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // import "./App.css";

// const App = () => {
//   return (
//     <div className=" bg-black text-white">
//       {/* <header className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-3xl font-bold">Canvix</div>
//         <button
//           onClick={toggleMenu}
//           className="md:hidden block text-xl focus:outline-none"
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//         <nav className="hidden md:flex space-x-8">
//           <Link to="/" className="hover:text-teal-400">
//             Home
//           </Link>
//           <Link to="/about-us" className="hover:text-teal-400">
//             About
//           </Link>
//           <Link to="/services" className="hover:text-teal-400">
//             Services
//           </Link>
//           <Link to="/work-sample" className="hover:text-teal-400">
//             Work Sample
//           </Link>
//         </nav>
//         <Link to="/contactus">
//           <button className="hidden md:block bg-white text-gray-900 px-4 py-2 rounded-full font-bold">
//             Get in touch
//           </button>
//         </Link>
//         <div
//           className={`md:hidden absolute top-16 right-2 bg-gray-800 rounded-lg ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <nav className="flex flex-col space-y-4 p-4">
//             <Link to="/" className="hover:text-teal-400">
//               Home
//             </Link>
//             <Link to="/about-us" className="hover:text-teal-400">
//               About
//             </Link>
//             <Link to="/services" className="hover:text-teal-400">
//               Services
//             </Link>
//             <Link to="/work-sample" className="hover:text-teal-400">
//               Work Sample
//             </Link>
//           </nav>
//         </div>
//       </header>{" "} */}

//       <main className="container mx-auto px-6 pt-24 pb-20 flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 justify-center">
//         <div className="lg:w-1/2 text-center lg:text-left space-y-6 py-11">
//           <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold">
//             Ready to take your{" "}
//             <span className="text-blue-400">Business Growth</span> to the next
//             level?
//           </h1>
//           <p className="text-gray-400 text-lg py-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit– et ut massa
//             libero egestas malesuada viverra gravida libero cursus nulla leo
//             pulvinar.
//           </p>
//           <Link to="/contact-us">
//             <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold">
//               Start your Free Trial
//             </button>
//           </Link>
//         </div>
//         <div className="lg:w-1/2 flex justify-center lg:justify-end">
//           <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 border-4 border-gray-700">
//             <img
//               src="./Ellipse 10.png"
//               alt="Team working"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </main>
//       {/* <footer className="container mx-auto px-6 pb-12">
//         <div className="text-center text-gray-400">
//           Trusted by Leading Brands
//         </div>
//         <div className="flex justify-center space-x-6 mt-4">
//           <img
//             src="https://via.placeholder.com/80x40"
//             alt="Greenish"
//             className="h-10"
//           />
//           <img
//             src="https://via.placeholder.com/80x40"
//             alt="Automation"
//             className="h-10"
//           />
//           <img
//             src="https://via.placeholder.com/80x40"
//             alt="Leafe"
//             className="h-10"
//           />
//         </div>
//       </footer> */}
//     </div>
//   );
// };

// export default App;
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex relative">
      <div className="w-full flex">
        <div className="bg-black w-1/2 flex flex-col justify-center items-center text-center p-8"></div>
        <div className="bg-blue-500 w-1/2 flex flex-col justify-center items-center text-center p-8"></div>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto flex flex-col items-center justify-center text-center max-w-lg">
        <p className="text-white text-lg mb-6">We Are Creative</p>
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-2">
          Branding
        </h1>
        <h2 className="text-white text-2xl md:text-4xl mt-1">Digital Agency</h2>
        <p className="text-white text-lg my-8">
        Transforming your vision into reality. At <span className="text-black font-semibold">Social Shine,</span>  we excel in crafting unique brand identities and delivering impactful digital strategies.


        </p>
        <button className="bg-white text-black px-6 py-2 rounded font-bold">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Hero;
