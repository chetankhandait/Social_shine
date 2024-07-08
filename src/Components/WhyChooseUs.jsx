 
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [selected, setSelected] = useState(0);

  const sections = [
    {
      title: "Expert Web and App Development",
      description:
        "Our team specializes in creating cutting-edge websites and mobile applications tailored to your unique needs. From concept to launch, we ensure a seamless and engaging user experience.",
      icon: "./code.svg",
    },
    {
      title: "Comprehensive Social Media Handling",
      description:"We offer comprehensive social media management services to enhance your brand's online presence.",
      icon: "./socialmedia.svg",
    },
    {
      title: "Innovative and Creative Solutions",
      description:
        "We pride ourselves on delivering innovative and creative solutions that set your brand apart. Our team stays ahead of industry trends to provide fresh, unique ideas for your web, app, and social media projects.",
      icon: "./Critical.svg",
    },
    {
      title: "Results-Driven Advertising",
      description:
        "Our data-driven approach to advertising ensures that every campaign is optimized for maximum impact and ROI. We continuously monitor and refine our strategies to deliver the best possible results for your business.",
      icon: "./result.svg",
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
          <div className="w-full md:w-2/3 bg-black p-5 rounded-lg shadow-lg">
            <div className="flex flex-col items-start mx-8">
              <div className="text-4xl mb-4 text-white">
                {

                <img src={sections[selected].icon} alt="" width={250} height={70}/>
                }
              
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {sections[selected].title}
              </h3>
              <p className="text-gray-300  ">{sections[selected].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
