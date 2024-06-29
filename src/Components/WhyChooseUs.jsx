// import React from "react";

// const WhyChooseUs = () => {
//   return (
//     <div className="bg-gray-900 text-white p-8 rounded-lg">
//       <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
//       <div className="space-y-16">
//         {/* Quickly Services */}
//         <div className="flex flex-col md:gap-12 gap-6 md:flex-row items-center mx-auto md:items-center md:space-x-4 lg:w-2/3">
//           <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg mb-4 md:mb-0 md:order-1">
//             <svg
//               className="md:w-20 md:h-20 w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//               ></path>
//             </svg>
//           </div>
//           <div className="md:order-2 text-center md:text-left">
//             <h3 className="text-2xl font-semibold mb-2">Quickly Services</h3>
//             <p className="lg:w-3/4">
//               Lorem ipsum dolor sit amet consectetur. Mauris aliquam urna diam
//               volutpat sed. Tortor suspendisse pretium in hendrerit tellus.
//             </p>
//           </div>
//         </div>

//         {/* Professional Team */}

//         <div className="flex flex-col md:gap-12 gap-6 md:flex-row items-center mx-auto md:items-center md:space-x-4 lg:w-2/3">
//           <div className=" text-center md:text-left order-2 md:order-1">
//             <h3 className="text-2xl font-semibold mb-2">Professional Team</h3>
//             <p className="lg:w-3/4">
//               Lorem ipsum dolor sit amet consectetur. Mauris aliquam urna diam
//               volutpat sed. Tortor suspendisse pretium in hendrerit tellus.
//             </p>
//           </div>
//           <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg mb-4 order-1 md:order-2">
//             <svg
//               className="md:w-20 md:h-20 w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         {/* Guaranteed Services */}
//         <div className="flex flex-col md:gap-12 gap-6 md:flex-row items-center mx-auto md:items-center md:space-x-4 lg:w-2/3">
//           <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg mb-4 md:mb-0 md:order-1">
//             <svg
//               className="md:w-20 md:h-20 w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//               ></path>
//             </svg>
//           </div>
//           <div className="md:order-2 text-center md:text-left">
//             <h3 className="text-2xl font-semibold mb-2">Guaranteed Services</h3>
//             <p className="lg:w-3/4">
//               Lorem ipsum dolor sit amet consectetur. Mauris aliquam urna diam
//               volutpat sed. Tortor suspendisse pretium in hendrerit tellus.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

// import React, { useState } from "react";

// const WhyChooseUs = () => {
//   const [selected, setSelected] = useState(0);

//   const sections = [
//     {
//       title: "Dedicated Social Studios",
//       description:
//         "Our studio space produces all kinds of social media content, tailored for your intended audience. We specialize in creating videos, photos, text, and the intersections of these mediums.",
//       icon: "🎯",
//     },
//     {
//       title: "The Social Media Agency",
//       description:
//         "We offer comprehensive social media management services to enhance your brand's online presence.",
//       icon: "📱",
//     },
//     {
//       title: "World-class Clients",
//       description:
//         "We have worked with top-tier clients around the globe, delivering exceptional results every time.",
//       icon: "🌎",
//     },
//     {
//       title: "Results Driven",
//       description:
//         "Our strategies are focused on delivering measurable results and achieving your business goals.",
//       icon: "📈",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16 px-8 mt-2">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold mb-8">
//           Why <span className="text-blue-600">Choose Us</span>
//         </h2>
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="w-full md:w-1/3 border-r pr-4">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelected(index)}
//                 className={`p-4 md:p-4 lg:p-7 cursor-pointer flex justify-between items-center ${
//                   selected === index ? "font-bold bg-gray-200" : ""
//                 }`}
//               >
//                 {section.title}
//                 {selected === index && (
//                   <svg
//                     className="w-8 h-8 bg-black text-white rounded"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="w-full md:w-2/3 bg-white p-10 rounded-lg shadow-lg">
//             <div>
//               <div className="text-4xl mb-4">{sections[selected].icon}</div>
//               <h3 className="text-2xl font-bold mb-4">
//                 {sections[selected].title}
//               </h3>
//               <p>{sections[selected].description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [selected, setSelected] = useState(0);

  const sections = [
    {
      title: "Dedicated Social Studios",
      description:
        "Our studio space produces all kinds of social media content, tailored for your intended audience. We specialize in creating videos, photos, text, and the intersections of these mediums.",
      icon: "🎯",
    },
    {
      title: "The Social Media Agency",
      description:
        "We offer comprehensive social media management services to enhance your brand's online presence.",
      icon: "📱",
    },
    {
      title: "World-class Clients",
      description:
        "We have worked with top-tier clients around the globe, delivering exceptional results every time.",
      icon: "🌎",
    },
    {
      title: "Results Driven",
      description:
        "Our strategies are focused on delivering measurable results and achieving your business goals.",
      icon: "📈",
    },
  ];

  return (
    <div className="bg-black py-16 px-8 mt-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Why <span className="text-blue-400">Choose Us</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3 border-r border-gray-700 pr-4">
            {sections.map((section, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`p-4 md:p-4 lg:p-7 cursor-pointer flex justify-between items-center ${
                  selected === index
                    ? "font-bold bg-[#2563eb] text-white"
                    : "text-gray-200"
                }`}
              >
                {section.title}
                {selected === index && (
                  <svg
                    className="w-8 h-8 bg-white text-black rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/3 bg-black p-10 rounded-lg shadow-lg">
            <div>
              <div className="text-4xl mb-4 text-white">
                {sections[selected].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {sections[selected].title}
              </h3>
              <p className="text-gray-300">{sections[selected].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
