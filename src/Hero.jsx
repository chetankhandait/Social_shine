import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="Canvix Logo"
              className="h-9 "
            />
            <span className="text-xl font-bold ml-2">SocialShine</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#home" className="hover:text-teal-400">
              Home
            </a>
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
            <a href="#contact" className="hover:text-teal-400">
              Contact Us
            </a>
          </div>
          <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full">
            Get in touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 pt-4">
        <div className="max-w-screen-xl md:gap-1 mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left md:px-16  order-2 md:order-1">
            <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold mb-6">
              Ready to take your{" "}
              <span className="text-teal-400">Business Growth</span> <br />
              to the next level?
            </h1>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>

            <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full mb-8">
              Start your Free Trial
            </button>
            <div className="text-center md:text-left">
              <span className="text-teal-400 block mb-4">
                Trusted by Leading Brands
              </span>
              <div className="flex justify-center md:justify-start space-x-4">
                <img
                  src="/path/to/greenish.png"
                  alt="Greenish"
                  className="h-8"
                />
                <img
                  src="/path/to/automation.png"
                  alt="Automation"
                  className="h-8"
                />
                <img src="/path/to/leafe.png" alt="Leafe" className="h-8" />
                <img
                  src="/path/to/mindfulness.png"
                  alt="Mindfulness"
                  className="h-8"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 mb-8 md:mb-0  order-1 md:order-2 ">
            <div className="relative">
              <div className=" border border-teal-600 rounded-full p-6 mx-auto w-80 h-80 md:w-96 md:h-96 flex items-center justify-center ">
                <div className="border border-teal-100  rounded-full p-3">
                  <img
                    src="/src/assets/Ellipse 10.png"
                    alt="Team Working"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
