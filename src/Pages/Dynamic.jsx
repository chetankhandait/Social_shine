import React from "react";
import SRBNavbar from "../Components/SRBNavbar";
import Footer from "../Components/Footer";
import SectionComponent from "./SectionComponent";
import DynamicInfo from "./DynamicInfo";

const Dynamic = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10 max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
            <main className="sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">
                <span className="">Web Development</span>
                <br />
                <span className=" text-indigo-600">
                  Provide solutions to small agency
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Discover More
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </main>
          </div>
          <div className="relative z-10 max-w-lg w-full ml-8">
            <img
              src="./mobile-marketing-animate.svg" // replace with your animated SVG URL
              alt="Animated SVG"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <SectionComponent />
      <DynamicInfo />
      <Footer />
    </>
  );
};

export default Dynamic;
