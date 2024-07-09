// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-black text-white p-6 ">
//       <p className="text-center text-teal-400 font-semibold text-3xl pb-8">
//         About Us
//       </p>
//       <section className="flex flex-col md:flex-row items-center justify-center md:pb-8">
//         <div className="relative md:w-1/2 flex justify-center mb-3 md:mb-0">
//           <div className="relative">
//             {/* <div className="hidden lg:flex absolute  p-4 rounded-lg shadow-lg transform translate-x-4 translate-y-4 z-20">
//               <img
//                 src="https://th.bing.com/th/id/OIP.XUW1rVguTqP4kLZoASrjTAHaE8?rs=1&pid=ImgDetMain"
//                 alt="Team"
//                 className="rounded-3xl "
//               />
//             </div>
//             <div className="absolute hidden lg:flex p-4 rounded-lg shadow-lg transform translate-x-2 translate-y-2 z-10">
//               <img
//                 src="https://th.bing.com/th/id/OIP.XUW1rVguTqP4kLZoASrjTAHaE8?rs=1&pid=ImgDetMain"
//                 alt="Team"
//                 className="rounded-3xl opacity-40 "
//               />
//             </div> */}
//             <div className=" p-4 rounded-lg shadow-lg">
//               <img
//                 src="https://th.bing.com/th/id/OIP.XUW1rVguTqP4kLZoASrjTAHaE8?rs=1&pid=ImgDetMain"
//                 alt="Team"
//                 className="rounded-3xl sm:opacity-100 lg:opacity-70"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="md:w-1/2 md:pl-12 text-center md:text-left">
//           <h2 className="text-3xl font-bold mb-4 text-gray-300 ">
//             The core mission behind all our work
//           </h2>
//           <p className="text-gray-200 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
//             tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
//           </p>
//           <div className="flex flex-col sm:flex-row sm:space-x-6 mb-6">
//             <div className="text-center sm:text-left mb-4 sm:mb-0">
//               <span className="text-3xl font-semibold text-teal-400">330+</span>
//               <p className="text-gray-400">Companies helped</p>
//             </div>
//             <div className="text-center sm:text-left">
//               <span className="text-3xl font-semibold text-teal-400">230+</span>
//               <p className="text-gray-400">Revenue generated</p>
//             </div>
//           </div>
//           <button className="bg-white text-black py-2 px-4 rounded-full font-bold">
//             More Details about us
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 p-6">
      <p className="text-center text-blue-500 font-semibold text-3xl pb-8">
        About Us
      </p>
      <section className="flex flex-col md:flex-row items-center justify-center md:pb-8">
        <div className="relative md:w-1/2 flex justify-center mb-3 md:mb-0">
          <div className="relative">
            <div className="   ">
              <img src="./about.jpg" alt="Team" className=" " />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            The core mission behind all our work
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At our newly opened agency, our core mission drives every aspect of
            our work. We specialize in delivering exceptional social marketing
            services, customized website development, and effective advertising
            solutions. With a strong commitment to quality and innovation, we
            aim to exceed client expectations. Our goal is to empower businesses
            with cutting-edge digital strategies that drive success from the
            start.
          </p>

          <Link to="/about-us">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 transition-colors duration-300">
              More Details about us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
