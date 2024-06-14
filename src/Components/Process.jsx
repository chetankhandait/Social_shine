import React from "react";
import { FaRegFileAlt, FaLightbulb, FaCode } from "react-icons/fa";

const Process = () => {
  return (
    <div className="min-h-screen pt-12 scroll-pb-72 bg-gray-100">
      <section>
        <h2 className="text-4xl font-extrabold text-center text-gray-700 mb-4">
          Dev Challenge
        </h2>
        <p className="text-center text-gray-600 text-md mb-8">
          Follow these steps to complete the challenge.
        </p>
        <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center">
            <div className="relative w-64 h-48">
              <div className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                <div className="w-1/3 h-40"></div>
                <div className="w-2/3 h-32 pr-4">
                  <h3 className="pt-1 text-xl font-semibold text-gray-700">
                    Analyse
                  </h3>
                  <p className="pt-1 text-sm text-gray-600">
                    Analyse the problem sets to find a better solution to the
                    issue.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full flex items-center justify-center">
                <FaRegFileAlt className="text-red-600" size={32} />
              </div>
              <div className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">
                01
              </div>
              <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-red-600"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-48">
              <div className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                <div className="w-1/3 h-40"></div>
                <div className="w-2/3 h-32 pr-4">
                  <h3 className="pt-1 text-xl font-semibold text-gray-700">
                    Design
                  </h3>
                  <p className="pt-1 text-sm text-gray-600">
                    Design is how the solution will be interacted with.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full flex items-center justify-center">
                <FaLightbulb className="text-green-600" size={32} />
              </div>
              <div className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-green-600 rounded-lg">
                02
              </div>
              <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-green-600"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-48">
              <div className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                <div className="w-1/3 h-40"></div>
                <div className="w-2/3 h-32 pr-4">
                  <h3 className="pt-1 text-xl font-semibold text-gray-700">
                    Develop
                  </h3>
                  <p className="pt-1 text-sm text-gray-600">
                    Submit a developed solution to the given problem sets.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full flex items-center justify-center">
                <FaCode className="text-blue-600" size={32} />
              </div>
              <div className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg">
                03
              </div>
              <div className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
// import React from "react";

// const Process = () => {
//   return (
//     <div className="bg-gray-100 p-4">
//       <h2 className="text-3xl text-center text-teal-400 font-bold mb-12">
//         Process
//       </h2>
//       <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
//         <div className="flex md:contents flex-row-reverse">
//           <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
//             <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
//             <p className="mt-2 leading-6">Description of the first event.</p>
//             <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
//               Date 1
//             </span>
//           </div>
//           <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
//             <div className="flex items-center justify-center w-6 h-full">
//               <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
//             </div>
//             <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
//           </div>
//         </div>

//         <div className="flex md:contents">
//           <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
//             <div className="flex items-center justify-center w-6 h-full">
//               <div className="w-1 h-full bg-indigo-300"></div>
//             </div>
//             <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
//           </div>
//           <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
//             <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
//             <p className="mt-2 leading-6">Description of the second event.</p>
//             <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
//               Date 2
//             </span>
//           </div>
//         </div>

//         <div className="flex md:contents flex-row-reverse">
//           <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
//             <h3 className="text-lg font-semibold lg:text-xl">New Event 3</h3>
//             <p className="mt-2 leading-6">Description of the third event.</p>
//             <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
//               Date 3
//             </span>
//           </div>
//           <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
//             <div className="flex items-center justify-center w-6 h-full">
//               <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
//             </div>
//             <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
//           </div>
//         </div>

//         <div className="flex md:contents">
//           <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
//             <div className="flex items-center justify-center w-6 h-full">
//               <div className="w-1 h-full bg-indigo-300"></div>
//             </div>
//             <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
//           </div>
//           <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
//             <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
//             <p className="mt-2 leading-6">Description of the fourth event.</p>
//             <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
//               Date 4
//             </span>
//           </div>
//         </div>
//         <div className="flex md:contents flex-row-reverse">
//           <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
//             <h3 className="text-lg font-semibold lg:text-xl">New Event 3</h3>
//             <p className="mt-2 leading-6">Description of the third event.</p>
//             <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
//               Date 3
//             </span>
//           </div>
//           <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
//             <div className="flex items-center justify-center w-6 h-full">
//               <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
//             </div>
//             <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Process;
// import React from "react";
// import "./Testimonial.css";
// import {
//   FaLightbulb,
//   FaSearch,
//   FaPencilRuler,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Process = () => {
//   return (
//     <div className="flex flex-col items-center px-4 py-8 md:py-16 bg-gray-100">
//       <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
//         Process that moves things forward
//       </h2>
//       <div className="relative grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
//         <div className="process-step">
//           <div className="mb-4">
//             <FaLightbulb className="text-3xl text-gray-800" />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">Ideate</h3>
//           <p className="text-gray-600">
//             The ideation process is a crucial phase in the design process where
//             creative thinking and brainstorming happen.
//           </p>
//         </div>
//         <div className="process-step">
//           <div className="mb-4">
//             <FaSearch className="text-3xl text-gray-800" />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">Research</h3>
//           <p className="text-gray-600">
//             Research is a critical component of the design process, helping
//             designers understand the problem.
//           </p>
//         </div>
//         <div className="process-step">
//           <div className="mb-4">
//             <FaPencilRuler className="text-3xl text-gray-800" />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">Create</h3>
//           <p className="text-gray-600">
//             Designing a process involves several key steps to ensure clarity,
//             efficiency, and successful implementation.
//           </p>
//         </div>
//         <div className="process-step">
//           <div className="mb-4">
//             <FaCheckCircle className="text-3xl text-gray-800" />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">Testing</h3>
//           <p className="text-gray-600">
//             Testing is a crucial phase in the design process to ensure that the
//             product or system meets the specified requirements.
//           </p>
//         </div>
//         {/* <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full px-8 md:px-16">
//           <div className="hidden lg:flex lg:w-1/4 lg:justify-end lg:pr-4">
//             <div className="w-8 h-8 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
//           </div>
//           <div className="hidden md:flex md:w-1/4 md:justify-end md:pr-4">
//             <div className="w-8 h-8 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
//           </div>
//           <div className="hidden md:flex md:w-1/4 md:justify-end md:pr-4">
//             <div className="w-8 h-8 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
//           </div>
//           <div className="hidden md:flex md:w-1/4 md:justify-end md:pr-4">
//             <div className="w-8 h-8 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Process;
