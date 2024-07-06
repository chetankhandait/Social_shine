import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
 

const SRBNavbar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="relative z-50">
      <div className="fixed top-5 left-5 border border-gray-400  bg-black py-3 shadow backdrop-blur-2xl rounded-3xl text-white ">
        <div className="flex items-center     ">
          <div className="pl-2 ">
            <a href="/" className="flex items-center">


            <img
              src="./logo.png"
              alt=""
              width={50}
              height={60}
              className="-translate-y-1"
            />
            <span className="font-extrabold hidden sm:block ">Social Shine </span>
            </a>
          </div>

          <div className="flex justify-between items-center gap-9 px-6">
            <div>
              <a
                href="/contact-us"
                className="bg-blue-600 py-2 px-2 font-semibold rounded"
              >
                Contact Us
              </a>
            </div>
            <div>
              <h2
                onClick={toggleOverlay}
                className="cursor-pointer flex items-center gap-2 font-semibold text-xl"
              >
                <CiMenuBurger color="white" size={20} />
                Menu{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-[#171717]  text-[#747474] z-10">
          {/* // Cross butt/on  */}
          <div className="absolute top-3 right-5">
            <h3 className="text-white cursor-pointer px-4 py-2 bg-[#2563eb] rounded-md font-bold" onClick={toggleOverlay}>
              Close 
            </h3>
          </div>
          {/* // Navbar Component  */}

          <div className="text-[#747474] mt-28 mx-12 ">
            <div className=" flex flex-col justify-center items-start gap-16 ">
              <div className="flex  gap-28  ">
                <section className="text-5xl  flex flex-col gap-7 font-semibold text-[#747474] ">
                  <div className="cursor-pointer hover:text-white transition-all">
                    <a href="/">Home </a>
                  </div>
                  <div className="cursor-pointer hover:text-white transition-all">
                    <a href="/about-us">About Us</a>
                  </div>
                  <div className="cursor-pointer hover:text-white transition-all">
                    <a href="/services">Service</a>
                  </div>
                  <div className="cursor-pointer hover:text-white transition-all">
                    <a href="/work-sample">Work Sample</a>
                  </div>
                </section>
                <section className=" ">
                  <div className="flex flex-col justify-center gap-4 text-lg">
                    <div className="cursor-pointer hover:text-white transition-all ">
                      <a href="/">servcie</a>
                    </div>
                    <div className="cursor-pointer hover:text-white transition-all ">
                      <a href="/">servcie</a>
                    </div>
                    <div className="cursor-pointer hover:text-white transition-all ">
                      <a href="/">servcie</a>
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex items-center gap-8 text-xl ">
                <div className="cursor-pointer hover:text-white">
                  <a href="/">our Work </a>
                </div>
                <div className="cursor-pointer hover:text-white">
                  <a href="/">our Work </a>
                </div>
                <div className="cursor-pointer hover:text-white">
                  <a href="/">our Work </a>
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
