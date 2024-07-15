 

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen flex relative">
      <div className="w-full flex  flex-row ">
         

        <div className="bg-[#0e0f11] w-1/2 flex flex-col justify-center items-center text-center sm:text-left p-8">
          {" "}
          <div className="mx-auto z-10">
            <p className="text-white text-lg mb-4">We Are Creative</p>
            <h1 className="text-white text-6xl md:text-8xl font-bold mb-2">
              Branding
            </h1>
            <h2 className="text-white text-2xl md:text-4xl mt-1">
              Digital Agency
            </h2>
            <p className="text-white text-lg my-8">
              Transforming your vision into reality. At{" "}
              <span className="text-blue-400 font-semibold">Social Shine,</span>{" "}
              we excel in crafting unique brand identities and delivering
              impactful digital strategies.
            </p>
            <Link to="/about-us">

              
            <button className="bg-white text-black px-6 py-2 rounded font-bold">
              Discover More
            </button>
            </Link>
          </div>
        </div>
        <div className="  bg-blue-500 w-1/2 flex flex-col justify-center items-center text-center p-8 "> 
        <img src="./mobile-marketing-animate.svg" alt="" className="hidden sm:block" />
        </div>
         
      </div>
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 m-auto flex flex-col items-center justify-center text-center max-w-lg"></div> */}
    </div>
  );
};

export default Hero;
