import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const SRBNavbar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div className="relative z-50">
      <div className="fixed top-5 left-5 border border-gray-400 bg-[#0e0f11] py-3 shadow backdrop-blur-2xl rounded-3xl text-white">
        <div className="flex items-center">
          <div className="pl-2">
            <Link to="/" className="flex items-center">
              <img
                src="./logo.png"
                alt=""
                width={50}
                height={60}
                className="-translate-y-1"
              />
              <span className="font-extrabold hidden sm:block">Social Shine </span>
            </Link>
          </div>

          <div className="flex justify-between items-center gap-9 px-6">
            <div>
              <Link
                to="/contact-us"
                className="bg-blue-600 py-2 px-2 font-semibold rounded"
                onClick={closeOverlay} // Close overlay when Contact Us link is clicked
              >
                Contact Us
              </Link>
            </div>
            <div>
              <h2
                onClick={toggleOverlay}
                className="cursor-pointer flex items-center gap-2 font-semibold text-xl"
              >
                <CiMenuBurger color="white" size={20} />
                Menu
              </h2>
            </div>
          </div>
        </div>
      </div>

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-[#171717] text-[#747474] z-10">
          <div className="absolute top-3 right-5">
            <h3
              className="text-white cursor-pointer px-4 py-2 bg-[#2563eb] rounded-md font-bold"
              onClick={toggleOverlay}
            >
              Close
            </h3>
          </div>

          <div className="text-[#747474] mt-28 mx-12">
            <div className="flex flex-col justify-evenly items-start gap-24 sm:gap-16">
              <div className="flex gap-4 sm:gap-28 sm:justify-between">
                <section className="text-4xl flex flex-col gap-7 font-semibold text-[#747474] sm:text-5xl">
                  <div className="cursor-pointer hover:text-white transition-all">
                    <Link to="/" onClick={closeOverlay}>Home</Link>
                  </div>
                  <div className="cursor-pointer hover:text-white transition-all">
                    <Link to="/about-us" onClick={closeOverlay}>About Us</Link>
                  </div>
                  <div className="cursor-pointer hover:text-white transition-all">
                    <Link to="/services" onClick={closeOverlay}>Services</Link>
                  </div>
                  <div className="cursor-pointer hover:text-white transition-all">
                    <Link to="/dynamic" onClick={closeOverlay}>Work Sample</Link>
                  </div>
                </section>
                <section>
                  <div className="flex flex-col justify-center gap-4 text-lg">
                    <div className="cursor-pointer hover:text-white transition-all">
                      <Link to="/" onClick={closeOverlay}>Service</Link>
                    </div>
                    <div className="cursor-pointer hover:text-white transition-all">
                      <Link to="/" onClick={closeOverlay}>Service</Link>
                    </div>
                    <div className="cursor-pointer hover:text-white transition-all">
                      <Link to="/" onClick={closeOverlay}>Service</Link>
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex items-center gap-8 text-xl">
                <div className="cursor-pointer hover:text-white">
                  <Link to="/" onClick={closeOverlay}>Our Work</Link>
                </div>
                <div className="cursor-pointer hover:text-white">
                  <Link to="/" onClick={closeOverlay}>Our Work</Link>
                </div>
                <div className="cursor-pointer hover:text-white">
                  <Link to="/" onClick={closeOverlay}>Our Work</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SRBNavbar;
