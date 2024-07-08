import React, { useEffect, useState } from "react";
import { FaDatabase, FaMap, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import "./Process.css"; // Add a CSS file for custom styles

const steps = [
  {
    title: "Gather Client Requirements",
    description:
      "We start by understanding your needs and goals. We gather all the necessary information to ensure your website aligns with your vision.",
    icon: <FaDatabase />,
  },
  {
    title: "Create Wireframes and Design",
    description:
      "Our team creates wireframes and design mockups to visualize the structure and layout of your website. We work closely with you to refine these designs until you're satisfied.",
    icon: <FaMap />,
  },
  {
    title: "Develop and Prototype",
    description:
      "Once the design is approved, we move to the development phase. We build a functional prototype of your website, integrating your content and ensuring everything works seamlessly.",
    icon: <FaGlobe />,
  },
  {
    title: "Launch Your Website",
    description:
      "After thorough testing and final adjustments, your website is ready to go live. We help you choose a domain, and with just a few clicks, your professional website is launched.",
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
    <section className=" block bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
            How It Works
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Launch your <span className="text-blue-400">Brand</span> in 4 easy
            steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            Create your own blog with us and launch it with just 4 easy steps
          </p>
        </div>
        <ul className="mx-auto mt-12 grid  grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-7xl lg:grid-cols-4 ">
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
