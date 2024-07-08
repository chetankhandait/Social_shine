// import React from "react";

// const ServiceGrid = () => {
//   return (
//     <div className="block mx-auto bg-black  sm:p-10">
//       <div className="w-full  grid grid-cols-1 xl:grid-cols-3 gap-4 px-4 py-4">
//         <div className="relative h-auto w-full bg-blue-600 rounded-xl mx-auto cursor-pointer">
//           <img
//             src="./mob.jpg"
//             alt=""
//             className="rounded-xl h-full object-cover w-screen
//           "
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <h3 className="font-bold text-lg sm:text-2xl">
//               Mobile App Development:
//             </h3>
//             <p className="text-white text-center p-6 text-base sm:text-xl">
//               Create intuitive and engaging mobile applications.
//             </p>
//           </div>
//         </div>
//         <div className="relative w-full h-auto bg-blue-900 rounded-xl col-span-2 mx-auto cursor-pointer">
//           <video
//             src="./appvideo.mp4"
//             autoPlay
//             muted
//             loop
//             className="w-full rounded-xl  "
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <h3 className="font-bold text-lg sm:text-2xl">
//               Mobile App Development:
//             </h3>
//             <p className="text-white text-center p-6 text-base sm:text-xl">
//               Create intuitive and engaging mobile applications.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-full h-auto bg-blue-900 rounded-xl col-span-2 mx-auto cursor-pointer">
//           <video
//             src="./edting.mp4"
//             autoPlay
//             muted
//             loop
//             className="rounded-xl opacity-65"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <h3 className="font-bold text-lg sm:text-2xl">
//               Mobile App Development:
//             </h3>
//             <p className="text-white text-center p-6 text-base sm:text-xl">
//               Create intuitive and engaging mobile applications.
//             </p>
//           </div>
//         </div>
//         <div className="relative h-auto w-full bg-blue-600 rounded-xl mx-auto cursor-pointer">
//           <img
//             src="./marketig.jpg"
//             alt=""
//             className=" w-full rounded-xl h-full object-cover mx-auto border"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <h3 className="font-bold text-lg sm:text-2xl">
//               Mobile App Development:
//             </h3>
//             <p className="text-white text-center p-6 text-base sm:text-xl">
//               Create intuitive and engaging mobile applications.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceGrid;
import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5"; // Example icon import

const ServiceGrid = () => {
  return (
    <div className="block mx-auto py-10 bg-black sm:p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
          Our Outstanding Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          We provide a wide range of services to meet your needs
        </p>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-4 px-4 py-4">
        <div className="relative h-auto w-full bg-blue-600 rounded-xl mx-auto cursor-pointer">
          <img
            src="./mob.jpg"
            alt="Mobile App Development"
            className="rounded-xl h-full object-cover w-screen"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg sm:text-2xl text-white">
              Mobile App Development
            </h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
              Create intuitive and engaging mobile applications.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto bg-blue-900 rounded-xl col-span-2 mx-auto cursor-pointer">
          <video
            src="./appvideo.mp4"
            autoPlay
            muted
            loop
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg sm:text-2xl text-white">
              Mobile App Development
            </h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
              Create intuitive and engaging mobile applications.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto bg-blue-900 rounded-xl col-span-2 mx-auto cursor-pointer">
          <video
            src="./edting.mp4"
            autoPlay
            muted
            loop
            className="rounded-xl opacity-65"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg sm:text-2xl text-white">
              Mobile App Development
            </h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
              Create intuitive and engaging mobile applications.
            </p>
          </div>
        </div>
        <div className="relative h-auto w-full bg-blue-600 rounded-xl mx-auto cursor-pointer">
          <img
            src="./marketig.jpg"
            alt="Marketing"
            className="w-full rounded-xl h-full object-cover mx-auto border"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg sm:text-2xl text-white">
              Marketing
            </h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
              Create intuitive and engaging mobile applications.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg sm:text-xl hover:bg-blue-700 transition duration-300">
          Check Out Our More Services ➤➤
        </button>
      </div>
    </div>
  );
};

export default ServiceGrid;
