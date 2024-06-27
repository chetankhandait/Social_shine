import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import {
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaMobileAlt,
  // FaChartBar,
  FaLightbulb,
  FaVideo,
  FaEnvelopeOpen,
  FaBoxOpen,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";

const solutions = [
  {
    id: 1,
    title: "Digital Marketing",
    icon: <FaMobileAlt className="text-blue-600 text-6xl" />,
  },
  {
    id: 2,
    title: "Performance Marketing",
    icon: <FaChartLine className="text-blue-600 text-6xl" />,
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    icon: <FaSearch className="text-blue-600 text-6xl" />,
  },
  {
    id: 4,
    title: "Social Media Management",
    icon: <FaBullhorn className="text-blue-600 text-6xl" />,
  },
  {
    id: 5,
    title: "Branding & Communication",
    icon: <FaLightbulb className="text-blue-600 text-6xl" />,
  },
  {
    id: 6,
    title: "Video Production",
    icon: <FaVideo className="text-blue-600 text-6xl" />,
  },
  {
    id: 7,
    title: "Creative & Design",
    icon: <FaEnvelopeOpen className="text-blue-600 text-6xl" />,
  },
  {
    id: 8,
    title: "Website & App Development",
    icon: <FaBoxOpen className="text-blue-600 text-6xl" />,
  },
  {
    id: 9,
    title: "E-commerce Solutions",
    icon: <FaShoppingCart className="text-blue-600 text-6xl" />,
  },
  {
    id: 10,
    title: "Online Reputation Management",
    icon: <FaUserAlt className="text-blue-600 text-6xl" />,
  },
  {
    id: 11,
    title: "Email Marketing",
    icon: <FaEnvelopeOpen className="text-blue-600 text-6xl" />,
  },
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Customize animation duration
    });
  }, []);

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Solutions!! <span className="text-blue-400">That Drive Results</span>
        </h2>
        <p className="mt-4 text-lg text-center mb-8">
          Whether you're looking for [briefly mention key services or
          solutions], our dedicated team is here to guide you every step of the
          way.There are some solution how we can improve your social presence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white  text-black p-6 rounded-lg flex flex-col items-start justify-between"
              data-aos="zoom-in"
            >
              <div className="mb-6 hover:text-white">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-left">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
