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
// import React, { useState, useEffect } from "react";
// import "tailwindcss/tailwind.css"; // Make sure Tailwind CSS is installed

// const Process = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const steps = [
//     "Invitation received",
//     "Personal details",
//     "Application details",
//     "Confirmation",
//   ];

//   const updateProgress = () => {
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;
//     const progress = (scrollPosition / documentHeight) * steps.length;
//     setCurrentStep(Math.min(steps.length, Math.ceil(progress)));
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", updateProgress);
//     return () => {
//       window.removeEventListener("scroll", updateProgress);
//     };
//   }, []);

//   const progressWidths = ["100%", "100%", "20%", "0%"];

//   return (
//     <div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
//       <div className="flex pb-3">
//         {steps.map((step, index) => (
//           <React.Fragment key={index}>
//             <div className="flex-1">
//               <div
//                 className={`w-10 h-10 ${
//                   index < currentStep
//                     ? "bg-green-500"
//                     : "bg-white border-2 border-gray-300"
//                 } mx-auto rounded-full text-lg text-white flex items-center justify-center`}
//               >
//                 {index < currentStep ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 ) : (
//                   <span className="text-gray-700 text-center w-full">
//                     {index + 1}
//                   </span>
//                 )}
//               </div>
//             </div>
//             {index < steps.length - 1 && (
//               <div className="w-1/6 align-center items-center align-middle content-center flex">
//                 <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
//                   <div
//                     className="bg-green-500 text-xs leading-none py-1 text-center text-gray-800 rounded"
//                     style={{ width: progressWidths[index] }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       <div className="flex text-xs content-center text-center">
//         {steps.map((step, index) => (
//           <div key={index} className="w-1/4">
//             {step}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Process;
// import React, { useEffect, useState } from "react";
// import "./Process.jsx";
// import { FaDatabase, FaMap, FaGlobe, FaCheckCircle } from "react-icons/fa";

// const steps = [
//   {
//     title: "Add your databases",
//     description: "Use your own Notion databases or duplicate ours.",
//     icon: <FaDatabase />,
//   },
//   {
//     title: "Map your fields",
//     description: "Map your Notion fields with Feather fields.",
//     icon: <FaMap />,
//   },
//   {
//     title: "Choose your domain",
//     description: "Choose a domain or a subdomain for your blog.",
//     icon: <FaGlobe />,
//   },
//   {
//     title: "Get your blog",
//     description: "That's it. You will get back a professional blog.",
//     icon: <FaCheckCircle />,
//   },
// ];

// const Process = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStep((prevStep) =>
//         prevStep < steps.length - 1 ? prevStep + 1 : prevStep
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
//             How It Works
//           </p>
//           <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Launch your blog in 4 easy steps
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
//             Create your own blog with us and launch it with just 4 easy steps
//           </p>
//         </div>
//         <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
//           {steps.map((step, index) => (
//             <li
//               key={index}
//               className={`flex-start group relative flex lg:flex-col ${
//                 currentStep >= index ? "completed" : ""
//               }`}
//             >
//               <span
//                 className={`absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px ${
//                   currentStep > index ? "bg-blue-500" : "bg-gray-300"
//                 } lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]`}
//                 aria-hidden="true"
//               ></span>
//               <div
//                 className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
//                   currentStep >= index
//                     ? "border-blue-500 bg-blue-500"
//                     : "border-gray-300 bg-gray-50"
//                 } transition-all duration-200`}
//               >
//                 <div
//                   className={`h-5 w-5 ${
//                     currentStep >= index ? "text-white" : "text-gray-600"
//                   }`}
//                 >
//                   {step.icon}
//                 </div>
//               </div>
//               <div className="ml-6 lg:ml-0 lg:mt-10">
//                 <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
//                   {step.title}
//                 </h3>
//                 <h4 className="mt-2 text-base text-gray-700">
//                   {step.description}
//                 </h4>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Process;
// import React, { useEffect, useState } from "react";
// import { FaDatabase, FaMap, FaGlobe, FaCheckCircle } from "react-icons/fa";
// import { MdDone } from "react-icons/md";
// import "./Process.css"; // Add a CSS file for custom styles

// const steps = [
//   {
//     title: "Add your databases",
//     description: "Use your own Notion databases or duplicate ours.",
//     icon: <FaDatabase />,
//   },
//   {
//     title: "Map your fields",
//     description: "Map your Notion fields with Feather fields.",
//     icon: <FaMap />,
//   },
//   {
//     title: "Choose your domain",
//     description: "Choose a domain or a subdomain for your blog.",
//     icon: <FaGlobe />,
//   },
//   {
//     title: "Get your blog",
//     description: "That's it. You will get back a professional blog.",
//     icon: <FaCheckCircle />,
//   },
// ];

// const Process = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStep((prevStep) =>
//         prevStep < steps.length - 1 ? prevStep + 1 : prevStep
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
//             How It Works
//           </p>
//           <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Launch your blog in 4 easy steps
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
//             Create your own blog with us and launch it with just 4 easy steps
//           </p>
//         </div>
//         <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
//           {steps.map((step, index) => (
//             <li
//               key={index}
//               className={`flex-start group relative flex lg:flex-col ${
//                 currentStep >= index ? "completed" : ""
//               } ${currentStep === index ? "active" : ""}`}
//             >
//               {index !== steps.length - 1 && (
//                 <span
//                   className={`absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px ${
//                     currentStep > index ? "bg-blue-500" : "bg-gray-300"
//                   } lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]`}
//                   aria-hidden="true"
//                 ></span>
//               )}
//               <div
//                 className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
//                   currentStep >= index
//                     ? "border-blue-500 bg-blue-500"
//                     : "border-gray-300 bg-gray-50"
//                 } transition-all duration-200`}
//               >
//                 <div
//                   className={`h-5 w-5 ${
//                     currentStep >= index ? "text-white" : "text-gray-600"
//                   }`}
//                 >
//                   {currentStep > index ? <MdDone /> : step.icon}
//                 </div>
//               </div>
//               <div className="ml-6 lg:ml-0 lg:mt-10">
//                 <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
//                   {step.title}
//                 </h3>
//                 <h4 className="mt-2 text-base text-gray-700">
//                   {step.description}
//                 </h4>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Process;
import React, { useEffect, useState } from "react";
import { FaDatabase, FaMap, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import "./Process.css"; // Add a CSS file for custom styles

const steps = [
  {
    title: "Add your databases",
    description: "Use your own Notion databases or duplicate ours.",
    icon: <FaDatabase />,
  },
  {
    title: "Map your fields",
    description: "Map your Notion fields with Feather fields.",
    icon: <FaMap />,
  },
  {
    title: "Choose your domain",
    description: "Choose a domain or a subdomain for your blog.",
    icon: <FaGlobe />,
  },
  {
    title: "Get your blog",
    description: "That's it. You will get back a professional blog.",
    icon: <FaCheckCircle />,
  },
];

const Process = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) =>
        prevStep < steps.length - 1 ? prevStep + 1 : prevStep
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className= " block bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
            How It Works
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Launch your blog in 4 easy steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            Create your own blog with us and launch it with just 4 easy steps
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex-start group relative flex lg:flex-col ${
                currentStep >= index ? "completed" : ""
              } ${currentStep === index ? "active" : ""}`}
            >
              {index !== steps.length - 1 && (
                <span
                  className={`progress-bar absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px ${
                    currentStep > index ? "bg-blue-500" : "bg-gray-300"
                  } lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]`}
                  aria-hidden="true"
                ></span>
              )}
              <div
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                  currentStep >= index
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 bg-gray-50"
                } transition-all duration-200`}
              >
                <div
                  className={`h-5 w-5 ${
                    currentStep >= index ? "text-white" : "text-gray-600"
                  }`}
                >
                  {currentStep > index ? <MdDone /> : step.icon}
                </div>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  {step.title}
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  {step.description}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
