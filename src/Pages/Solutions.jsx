// // import React, { useEffect } from "react";
// // import "aos/dist/aos.css"; // Import AOS CSS
// // import AOS from "aos";
// // import {
// //   FaBullhorn,
// //   FaChartLine,
// //   FaSearch,
// //   FaMobileAlt,
// //   // FaChartBar,
// //   FaLightbulb,
// //   FaVideo,
// //   FaEnvelopeOpen,
// //   FaBoxOpen,
// //   FaShoppingCart,
// //   FaUserAlt,
// // } from "react-icons/fa";

// // const solutions = [
// //   {
// //     id: 1,
// //     title: "Digital Marketing",
// //     icon: <FaMobileAlt className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 2,
// //     title: "Performance Marketing",
// //     icon: <FaChartLine className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 3,
// //     title: "Search Engine Optimization",
// //     icon: <FaSearch className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 4,
// //     title: "Social Media Management",
// //     icon: <FaBullhorn className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 5,
// //     title: "Branding & Communication",
// //     icon: <FaLightbulb className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 6,
// //     title: "Video Production",
// //     icon: <FaVideo className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 7,
// //     title: "Creative & Design",
// //     icon: <FaEnvelopeOpen className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 8,
// //     title: "Website & App Development",
// //     icon: <FaBoxOpen className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 9,
// //     title: "E-commerce Solutions",
// //     icon: <FaShoppingCart className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 10,
// //     title: "Online Reputation Management",
// //     icon: <FaUserAlt className="text-blue-600 text-6xl" />,
// //   },
// //   {
// //     id: 11,
// //     title: "Email Marketing",
// //     icon: <FaEnvelopeOpen className="text-blue-600 text-6xl" />,
// //   },
// // ];

// // const Solutions = () => {
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000,
// //       once: true, // Customize animation duration
// //     });
// //   }, []);

// //   return (
// //     <div className="bg-black text-white py-12">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // <h2 className="text-3xl font-extrabold text-center mb-4">
// //   Solutions!! <span className="text-blue-400">That Drive Results</span>
// // </h2>
// // <p className="mt-4 text-lg text-center mb-8">
// //   Whether you're looking for [briefly mention key services or
// //   solutions], our dedicated team is here to guide you every step of the
// //   way.There are some solution how we can improve your social presence.
// // </p>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {solutions.map((solution) => (
// //             <div
// //               key={solution.id}
// //               className="bg-white  text-black p-6 rounded-lg flex flex-col items-start justify-between"
// //               data-aos="zoom-in"
// //             >
// //               <div className="mb-6 hover:text-white">{solution.icon}</div>
// //               <h3 className="text-xl font-semibold mb-2 text-left">
// //                 {solution.title}
// //               </h3>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Solutions;
// // import React from "react";
// // import {
// //   FaMousePointer,
// //   FaChartLine,
// //   FaSearch,
// //   FaSun,
// //   FaBullhorn,
// //   FaCogs,
// //   FaPen,
// //   FaFilm,
// //   FaPhone,
// // } from "react-icons/fa";

// // const solutions = [
// //   { id: 1, name: "Digital Marketing", icon: <FaMousePointer /> },
// //   { id: 2, name: "Performance Marketing", icon: <FaChartLine /> },
// //   { id: 3, name: "Search Engine Optimization", icon: <FaSearch /> },
// //   { id: 4, name: "Social Media Management", icon: <FaSun /> },
// //   { id: 5, name: "Branding", icon: <FaBullhorn /> },
// //   { id: 6, name: "Public Relations", icon: <FaBullhorn /> },
// //   { id: 7, name: "Content Marketing", icon: <FaPen /> },
// //   { id: 8, name: "Video Production", icon: <FaFilm /> },
// //   { id: 9, name: "Web Designing", icon: <FaCogs /> },
// //   { id: 10, name: "Tele Calling Support", icon: <FaPhone /> },
// // ];

// // const Solutions = () => {
// //   return (
// //     <div className="bg-black py-20 px-14">
// //       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
// //         {solutions.map((solution) => (
// //           <div
// //             key={solution.id}
// //             className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-600 hover:text-white"
// //           >
// //             <div className="flex items-center justify-center mb-4">
// //               <div className="text-4xl">{solution.icon}</div>
// //             </div>
// //             <h3 className="text-xl font-semibold text-center">
// //               {solution.name}
// //             </h3>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Solutions;
// import React, { useState } from "react";
// import {
//   FaMousePointer,
//   FaChartLine,
//   FaSearch,
//   FaSun,
//   FaBullhorn,
//   FaCogs,
//   FaPen,
//   FaFilm,
//   FaPhone,
// } from "react-icons/fa";

// const solutions = [
//   {
//     id: 1,
//     name: "Digital Marketing",
//     icon: <FaMousePointer />,
//     hoverIcon: <FaChartLine />,
//     description:
//       "Boost your online presence and drive more traffic with our digital marketing strategies.",
//   },
//   {
//     id: 2,
//     name: "Performance Marketing",
//     icon: <FaChartLine />,
//     hoverIcon: <FaMousePointer />,
//     description:
//       "Optimize your marketing campaigns for better performance and ROI.",
//   },
//   {
//     id: 3,
//     name: "Search Engine Optimization",
//     icon: <FaSearch />,
//     hoverIcon: <FaSun />,
//     description:
//       "Improve your website's ranking on search engines and increase organic traffic.",
//   },
//   {
//     id: 4,
//     name: "Social Media Management",
//     icon: <FaSun />,
//     hoverIcon: <FaBullhorn />,
//     description:
//       "Manage your social media profiles effectively to engage with your audience.",
//   },
//   {
//     id: 5,
//     name: "Branding",
//     icon: <FaBullhorn />,
//     hoverIcon: <FaCogs />,
//     description:
//       "Build a strong brand identity that resonates with your target audience.",
//   },
//   {
//     id: 6,
//     name: "Public Relations",
//     icon: <FaBullhorn />,
//     hoverIcon: <FaPen />,
//     description:
//       "Enhance your public image and communicate effectively with stakeholders.",
//   },
//   {
//     id: 7,
//     name: "Content Marketing",
//     icon: <FaPen />,
//     hoverIcon: <FaFilm />,
//     description:
//       "Create and distribute valuable content to attract and retain customers.",
//   },
//   {
//     id: 8,
//     name: "Video Production",
//     icon: <FaFilm />,
//     hoverIcon: <FaPhone />,
//     description:
//       "Produce high-quality videos to tell your brand story and engage viewers.",
//   },
//   {
//     id: 9,
//     name: "Web Designing",
//     icon: <FaCogs />,
//     hoverIcon: <FaMousePointer />,
//     description:
//       "Design user-friendly and visually appealing websites that convert.",
//   },
//   {
//     id: 10,
//     name: "Tele Calling Support",
//     icon: <FaPhone />,
//     hoverIcon: <FaChartLine />,
//     description:
//       "Provide excellent customer service and support through our tele calling services.",
//   },
// ];

// const Solutions = () => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="bg-black">
//       <h2 className="text-3xl font-extrabold text-center mb-4 text-white">
//         Solutions!! <span className="text-blue-400">That Drive Results</span>
//       </h2>
//       <p className="mt-4 text-lg text-center mb-4 text-white px-10">
//         Whether you're looking for [briefly mention key services or solutions],
//         our dedicated team is here to guide you every step of the way.There are
//         some solution how we can improve your social presence.
//       </p>
//       <div className="bg-black py-20 px-12">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {solutions.map((solution) => (
//             <div
//               key={solution.id}
//               className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-600 hover:cursor-pointer hover:text-white"
//               onMouseEnter={() => setHovered(solution.id)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <div className="flex items-center justify-center mb-4">
//                 <div
//                   className={`text-4xl transition ${
//                     hovered === solution.id ? "text-white" : "text-black"
//                   }`}
//                 >
//                   {hovered === solution.id ? solution.hoverIcon : solution.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-center">
//                 {hovered === solution.id ? solution.description : solution.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Solutions;
// // import React, { useState } from "react";
// // import {
// //   FaMousePointer,
// //   FaChartLine,
// //   FaSearch,
// //   FaSun,
// //   FaBullhorn,
// //   FaCogs,
// //   FaPen,
// //   FaFilm,
// //   FaPhone,
// // } from "react-icons/fa";

// // const solutions = [
// {
//   id: 1,
//   name: "Digital Marketing",
//   icon: <FaMousePointer />,
//   hoverIcon: <FaChartLine />,
//   description:
//     "Boost your online presence and drive more traffic with our digital marketing strategies.",
// },
// {
//   id: 2,
//   name: "Performance Marketing",
//   icon: <FaChartLine />,
//   hoverIcon: <FaMousePointer />,
//   description:
//     "Optimize your marketing campaigns for better performance and ROI.",
// },
// {
//   id: 3,
//   name: "Search Engine Optimization",
//   icon: <FaSearch />,
//   hoverIcon: <FaSun />,
//   description:
//     "Improve your website's ranking on search engines and increase organic traffic.",
// },
// {
//   id: 4,
//   name: "Social Media Management",
//   icon: <FaSun />,
//   hoverIcon: <FaBullhorn />,
//   description:
//     "Manage your social media profiles effectively to engage with your audience.",
// },
// {
//   id: 5,
//   name: "Branding",
//   icon: <FaBullhorn />,
//   hoverIcon: <FaCogs />,
//   description:
//     "Build a strong brand identity that resonates with your target audience.",
// },
// {
//   id: 6,
//   name: "Public Relations",
//   icon: <FaBullhorn />,
//   hoverIcon: <FaPen />,
//   description:
//     "Enhance your public image and communicate effectively with stakeholders.",
// },
// {
//   id: 7,
//   name: "Content Marketing",
//   icon: <FaPen />,
//   hoverIcon: <FaFilm />,
//   description:
//     "Create and distribute valuable content to attract and retain customers.",
// },
// {
//   id: 8,
//   name: "Video Production",
//   icon: <FaFilm />,
//   hoverIcon: <FaPhone />,
//   description:
//     "Produce high-quality videos to tell your brand story and engage viewers.",
// },
// {
//   id: 9,
//   name: "Web Designing",
//   icon: <FaCogs />,
//   hoverIcon: <FaMousePointer />,
//   description:
//     "Design user-friendly and visually appealing websites that convert.",
// },
// {
//   id: 10,
//   name: "Tele Calling Support",
//   icon: <FaPhone />,
//   hoverIcon: <FaChartLine />,
//   description:
//     "Provide excellent customer service and support through our tele calling services.",
// },
// // ];

// // const Solutions = () => {
// //   const [hovered, setHovered] = useState(null);

// //   return (
// //     <div className="bg-black">
// //       <h2 className="text-3xl font-extrabold text-center mb-4 text-white">
// //         Solutions!! <span className="text-blue-400">That Drive Results</span>
// //       </h2>
// //       <p className="mt-4 text-lg text-center mb-4 text-white px-10">
// //         Whether you're looking for [briefly mention key services or solutions],
// //         our dedicated team is here to guide you every step of the way. There are
// //         some solutions how we can improve your social presence.
// //       </p>
// //       <div className="bg-black py-20 px-12">
// //         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// //           {solutions.map((solution) => (
// //             <div
// //               key={solution.id}
// //               className={`bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-600 hover:cursor-pointer hover:text-white ${
// //                 hovered === solution.id ? "scale-105" : "scale-100"
// //               } hover:cursor-pointer`}
// //               onMouseEnter={() => setHovered(solution.id)}
// //               onMouseLeave={() => setHovered(null)}
// //             >
// //               <div className="flex items-center justify-center mb-4">
// //                 <div
// //                   className={`text-4xl transition ${
// //                     hovered === solution.id ? "text-white" : "text-black"
// //                   }`}
// //                 >
// //                   {hovered === solution.id ? solution.hoverIcon : solution.icon}
// //                 </div>
// //               </div>
// //               <h3
// //                 className={`text-xl font-semibold text-center transition ${
// //                   hovered === solution.id ? "text-white" : "text-black"
// //                 }`}
// //               >
// //                 {hovered === solution.id ? solution.description : solution.name}
// //               </h3>
// //               <div
// //                 className={`absolute inset-0 bg-blue-600 rounded-lg transition-opacity duration-300 ${
// //                   hovered === solution.id ? "opacity-100" : "opacity-0"
// //                 }`}
// //               ></div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Solutions;
import React from "react";
import {
  FaRegClock,
  FaRegEdit,
  FaRegHandshake,
  FaRegPaperPlane,
  FaRegChartBar,
  FaRegEnvelope,
  FaBullhorn,
  FaPlay,
  FaBlenderPhone,
  FaLaptopCode,
  FaSearchDollar,
  FaRegPlayCircle,
} from "react-icons/fa";
// import { IoCodeSlashOutline } from "react-icons/io5";

const FeatureCard = ({ Icon, title, description }) => (
  <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full hover:bg-blue-600   cursor-pointer">
    <div className="p-9">
      <Icon className="w-12 h-12 mx-auto text-gray-900 sm:mx-0" />
      <h3 className="mt-6 text-2xl font-bold text-gray-900  sm:mt-10">
        {title}
      </h3>
      <p className="mt-6 text-base text-gray-600 hover:text-white">
        {description}
      </p>
    </div>
  </div>
);

const Solutions = () => {
  const features = [
    {
      Icon: FaRegClock,
      title: "Realtime Collaboration",
      description:
        "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together.",
    },
    {
      Icon: FaRegEdit,
      title: "Content Marketing",
      description:
        "Create and distribute valuable content to attract and retain customers.",
    },
    {
      Icon: FaRegHandshake,
      title: "Integrations",
      description:
        "Step up your designs and workflow with integrations with your favorite tools such as Mailchimp, Slack, Jira, etc.",
    },
    {
      Icon: FaRegPaperPlane,
      title: "Publish Website Online",
      description:
        "Effortlessly publish your webpages online and make it available to the world with a click of a button.",
    },
    {
      Icon: FaRegPlayCircle,
      title: "Video Production",
      description:
        "Produce high-quality videos to tell your brand story and engage viewers.",
    },
    {
      Icon: FaRegEnvelope,
      title: "Custom Domains",
      description:
        "Attach your own custom domain to your published projects or website on Windframe.",
    },
    {
      Icon: FaRegEnvelope,
      title: "Social Media Marketing",
      description:
        "Manage your social media profiles effectively to engage with your audience.",
    },
    {
      Icon: FaRegChartBar,
      title: "Performance Marketing",
      description:
        "Optimize your marketing campaigns for better performance and ROI.",
    },
    {
      Icon: FaSearchDollar,
      title: "SEO",
      description:
        "Improve your website's ranking on search engines and increase organic traffic.",
    },
    {
      Icon: FaBullhorn,
      title: "Digital Marketing",
      description:
        "Boost your online presence and drive more traffic with our digital marketing strategies.",
    },
    {
      Icon: FaBlenderPhone,
      title: "Tele Calling Support",
      description:
        "Provide excellent customer service and support through our tele calling services.",
    },
  ];

  return (
    <section className="py-12 bg-black text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-7xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
