import React from "react";
import {
  FaPenNib,
  //   FaPaintBrush,
  FaBullhorn,
  FaLaptopCode,
  FaHeadset,
  FaFingerprint,
} from "react-icons/fa"; // Importing icons
import { MdColorLens } from "react-icons/md";

const services = [
  {
    title: "Content Marketing",
    description:
      "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic.",
    icon: <FaPenNib />, // using imported icon
  },
  {
    title: "Graphic Design",
    description:
      "Unlock the power of visual storytelling with our expert graphic design services, tailored to elevate your brand and captivate.",
    icon: <MdColorLens />, // using imported icon
  },
  {
    title: "Digital Marketing",
    description:
      "Elevate your brand’s online presence with our data-driven digital marketing strategies. From SEO and content marketing.",
    icon: <FaBullhorn />, // using imported icon
  },
  {
    title: "Web Design",
    description:
      "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.",
    icon: <FaLaptopCode />, // using imported icon
  },
  {
    title: "IT Consulting",
    description:
      "IT consulting or information technology consulting refers to the practice of providing advisory and implementation services.",
    icon: <FaHeadset />, // using imported icon
  },
  {
    title: "Brand Identity",
    description:
      "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
    icon: <FaFingerprint />, // using imported icon
  },
];
const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text mb-8 text-blue-400">
          Our Services
        </h2>
        <h3 className="text-3xl font-semibold text-center mb-8">
          High-impact services for your business
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-left p-6 bg-gray-100 rounded-lg shadow-lg hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h4 className="text-xl  font-semibold mb-2">{service.title}</h4>
              <p className="active:text-gray-700 text-left ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
