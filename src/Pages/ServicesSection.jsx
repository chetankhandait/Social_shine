import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaBullhorn,
  FaPencilRuler,
  FaShoppingCart,
} from "react-icons/fa";

const ServiceCard = ({ service }) => (
  <div className="relative overflow-hidden group h-[470px] w-[350px] bg-gray-800 mx-auto">
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300 transform scale-100 group-hover:scale-105"
      style={{
        backgroundImage: `url(${service.image})`,
        // backgroundColor: "#38A89D", // Initial background color (transparent green)
      }}
    ></div>
    <div className="relative z-10 flex flex-col items-start justify-start h-full p-6 bg-black bg-opacity-50 ">
      <div className="mb-20 ml-2 mt-8">{service.icon}</div>
      <h3 className="text-xl font-semibold text-white text-center mb-4">
        {service.name}
      </h3>
      <p className="text-left text-gray-300 mb-10">{service.description}</p>
      <a
        href="#"
        className="text-white inline-block bg-transparent font-bold transition-colors duration-300 mt-8"
      >
        SERVICE DETAILS »
      </a>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      name: "Web Design & Development",
      description:
        "Let us bring your vision to life with our creative and responsive web design and development services...",
      icon: <FaLaptopCode size={60} className="text-blue-600" />,
      image: "/website.png", // Replace with your image path
    },
    {
      name: "App Development",
      description:
        "Be unique with our App Development services. We craft user-friendly and feature-rich apps that...",
      icon: <FaMobileAlt size={60} className="text-green-600" />,
      image: "/App.png", // Replace with your image path
    },
    {
      name: "Website Maintenance",
      description:
        "Ensuring a smooth and secure online experience with regular updates, optimizations, and ...",
      icon: <FaCogs size={60} className="text-red-600" />,
      image: "/maintenance.png", // Replace with your image path
    },
    {
      name: "Social Media Marketing",
      description:
        "Boost your online presence and reach your target audience effectively with our comprehensive digital marketing solutions...",
      icon: <FaBullhorn size={60} className="text-yellow-600" />,
      image: "/marketing.png", // Replace with your image path
    },
    {
      name: "Graphic Designing",
      description:
        "Creating visually stunning and impactful designs for your brand and marketing materials...",
      icon: <FaPencilRuler size={60} className="text-purple-600" />,
      image: "/graphic.png", // Replace with your image path
    },
    {
      name: "E-Commerce Solutions",
      description:
        "Providing robust and scalable e-commerce solutions to help you set up and manage your online store effectively...",
      icon: <FaShoppingCart size={60} className="text-pink-600" />,
      image: "/e-commerce.png", // Replace with your image path
    },
  ];

  return (
    <section className="pb-12 bg-black">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
