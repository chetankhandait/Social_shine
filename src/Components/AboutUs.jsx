 
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 p-6">
      <h1 className="text-center  text-black font-bold text-5xl pb-6">
        About Us
      </h1>
      <section className="flex flex-col md:flex-row items-center justify-center md:pb-8">
        <div className="relative md:w-1/2 flex justify-center mb-3 md:mb-0">
          <div className="relative">
            <div className="   ">
              <img src="./aboutUs.jpg" alt="Team" className=" " />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 lg:leading-relaxed">
            The core mission behind all our work
            <br />
            <span className="text-blue-600">
              <Typewriter
                options={{
                  strings: [
                    "Social Marketing",
                    "Digital Engagement",
                    "Brand Awareness",
                    "Customer Outreach",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                  pauseFor: 1000, // Pause for 2.5 seconds before starting to delete
                }}
              />
            </span>
          </h2>
          <p className="text-gray-700 mb-6 leading-8 lg:leading-10">
            At our newly opened agency, our core mission drives every aspect of
            our work. We specialize in delivering exceptional social marketing
            services, customized website development, and effective advertising
            solutions. With a strong commitment to quality and innovation, we
            aim to exceed client expectations. Our goal is to empower businesses
            with cutting-edge digital strategies that drive success from the
            start.
          </p>

          <Link to="/about-us">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 transition-colors duration-300">
              More Details about us ➤➤
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
