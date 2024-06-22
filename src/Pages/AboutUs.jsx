// import React from "react";
// import { FaInstagram, FaLinkedinIn, FaPhone, FaPhoneAlt } from "react-icons/fa";
// const AboutUs = () => {
//   return (
//     <div className="bg-white p-8">
//       <h2 className="text-3xl font-bold text-center mb-8">Our team</h2>
//       <div className="flex justify-center space-x-8">
//         <div className="text-center">
//           <div className="relative">
//             <img
//               src="/Palak.jpg"
//               alt="Esther Howards"
//               className="rounded-lg mb-4"
//             />
//             <div className="absolute bottom-0 left-0 p-2 flex space-x-2">
//               <a href="#">
//                 <FaPhoneAlt />
//               </a>
//               <a href="#">
//                 <FaInstagram />
//               </a>
//               <a href="#">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Esther Howards</h3>
//           <p className="text-gray-600">Founder & CEO</p>
//         </div>

//         <div className="text-center">
//           <div className="relative">
//             <img
//               src="/Chirag.jpg"
//               alt="Cameron Williamson"
//               className="rounded-lg mb-4"
//             />
//             <div className="absolute bottom-0 left-0 p-2 flex space-x-2">
//               <a href="#">
//                 <FaPhoneAlt />
//               </a>
//               <a href="#">
//                 <FaInstagram />
//               </a>
//               <a href="#">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Cameron Williamson</h3>
//           <p className="text-gray-600">Marketing Head</p>
//         </div>

//         <div className="text-center">
//           <div className="relative">
//             <img
//               src="/Chetan.jpg"
//               alt="Liam Cooper"
//               className="rounded-lg mb-4 border-4 border-blue-500"
//             />
//             <div className="absolute bottom-0 left-0 p-2 flex space-x-2">
//               <a href="#">
//                 <FaPhoneAlt />
//               </a>
//               <a href="#">
//                 <FaInstagram />
//               </a>
//               <a href="#">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Liam Cooper</h3>
//           <p className="text-gray-600">Marketing Head</p>
//         </div>
//       </div>

//       <div className="mt-12 text-center">
//         <div className="bg-gray-800 text-white p-8 rounded-lg">
//           <h3 className="text-2xl font-bold mb-4">
//             Enough talk, let's get to work
//           </h3>
//           <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md">
//             Get in touch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
// import React from "react";
// import { FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div className="bg-white p-8">
//       <h2 className="text-3xl font-bold text-center mb-8">Our team</h2>
//       <div className="flex flex-wrap justify-center space-x-8 space-y-8 md:space-y-0">
//         <div className="text-center w-full md:w-auto">
//           <div className="relative inline-block">
//             <img
//               src="/Palak.jpg"
//               alt="Esther Howards"
//               className="w-64 h-64 object-cover rounded-lg mb-4"
//             />
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 flex space-x-4">
//               <a href="#" className="text-gray-600 hover:text-black">
//                 <FaPhoneAlt size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-pink-500">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-blue-700">
//                 <FaLinkedinIn size={24} />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Esther Howards</h3>
//           <p className="text-gray-600">Founder & CEO</p>
//         </div>

//         <div className="text-center w-full md:w-auto">
//           <div className="relative inline-block">
//             <img
//               src="/Chirag.jpg"
//               alt="Cameron Williamson"
//               className="w-64 h-64 object-cover rounded-lg mb-4"
//             />
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 flex space-x-4">
//               <a href="#" className="text-gray-600 hover:text-black">
//                 <FaPhoneAlt size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-pink-500">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-blue-700">
//                 <FaLinkedinIn size={24} />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Cameron Williamson</h3>
//           <p className="text-gray-600">Marketing Head</p>
//         </div>

//         <div className="text-center w-full md:w-auto">
//           <div className="relative inline-block">
//             <img
//               src="/Chetan.jpg"
//               alt="Liam Cooper"
//               className="w-64 h-80 object-cover rounded-lg mb-4 border-4 border-blue-500"
//             />
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 flex space-x-4">
//               <a href="#" className="text-gray-600 hover:text-black">
//                 <FaPhoneAlt size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="text-black hover:text-white rounded-full p-2 bg-white hover:bg-black"
//               >
//                 <FaInstagram size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="text-black hover:text-white rounded-full p-2 bg-white hover:bg-black"
//               >
//                 <FaLinkedinIn size={16} />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Liam Cooper</h3>
//           <p className="text-gray-600">Marketing Head</p>
//         </div>
//       </div>

//       <div className="mt-12 text-center">
//         <div className="bg-gray-800 text-white p-8 rounded-lg inline-block">
//           <h3 className="text-2xl font-bold mb-4">
//             Enough talk, let's get to work
//           </h3>
//           <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
//             Get in touch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
// import React from "react";
// import { FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div className="bg-white p-8">
//       <h2 className="text-3xl font-bold text-center mb-8">Our team</h2>
//       <div className="grid grid-cols-1 items-center md:grid-cols-3 justify-center space-x-8 space-y-8 md:space-y-0">
//         <div className="text-center w-full md:w-auto">
//           <div className="relative inline-block">
//             <img
//               src="/Palak.jpg"
//               alt="Liam Cooper"
//               className="w-76 h-96 object-cover rounded-lg mb-4 border-md"
//             />
//             <div className="absolute top-2 right-1 p-2 flex flex-col space-y-2">
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaPhoneAlt size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaInstagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaLinkedinIn size={16} />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Palak Sahu</h3>
//           <p className="text-gray-600">Marketing Head</p>
//         </div>

//         <div className="text-center w-full md:w-auto">
//           <div className="relative inline-block">
//             <img
//               src="/Chirag.jpg"
//               alt="Liam Cooper"
//               className="w-76 h-96 object-cover rounded-lg mb-4 border-md"
//             />
//             <div className="absolute top-2 right-1 p-2 flex flex-col space-y-2">
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaPhoneAlt size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaInstagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaLinkedinIn size={16} />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Chirag Gupta</h3>
//           <p className="text-gray-600">Head Technical Officer</p>
//         </div>

//         <div className="text-center w-full md:w-auto">
//           <div className="relative inline-block">
//             <img
//               src="/Chetan.jpg"
//               alt="Liam Cooper"
//               className="w-76 h-96 object-cover rounded-lg mb-4 border-md"
//             />
//             <div className="absolute top-2 right-1 p-2 flex flex-col space-y-2">
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaPhoneAlt size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaInstagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
//               >
//                 <FaLinkedinIn size={16} />
//               </a>
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Chetan Khandait</h3>
//           <p className="text-gray-600">Cheif Technical Officer (Owner)</p>
//         </div>
//       </div>

//       <div className="mt-12 text-center">
//         <div className="bg-[url('/Talk.jpg')] bg-cover bg-center text-white p-8 rounded-lg inline-block w-full">
//           <h3 className="text-2xl font-bold mb-4">
//             Enough talk, let's get to work
//           </h3>
//           <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
//             Get in touch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";
import { FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Our team
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        <div className="text-center w-full md:w-auto">
          <div className="relative inline-block">
            <img
              src="/Palak.jpg"
              alt="Palak Sahu"
              className="w-64 h-80 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2 p-2 flex flex-col space-y-2">
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Palak Sahu</h3>
          <p className="text-gray-600">Marketing Head</p>
        </div>

        <div className="text-center w-full md:w-auto">
          <div className="relative inline-block">
            <img
              src="/Chirag.jpg"
              alt="Chirag Gupta"
              className="w-64 h-80 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2 p-2 flex flex-col space-y-2">
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Chirag Gupta</h3>
          <p className="text-gray-600">Head Technical Officer</p>
        </div>

        <div className="text-center w-full md:w-auto">
          <div className="relative inline-block">
            <img
              src="/Chetan.jpg"
              alt="Chetan Khandait"
              className="w-64 h-80 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2 p-2 flex flex-col space-y-2">
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Chetan Khandait</h3>
          <p className="text-gray-600">Chief Technical Officer (Owner)</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-[url('/Talk.jpg')] bg-cover bg-center text-white p-8 rounded-lg inline-block w-full">
          <h3 className="text-2xl font-bold mb-4">
            Enough talk, let's get to work
          </h3>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full shadow-md hover:bg-gray-100">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
