import React from "react";
import backgroundImage from "/bg.jpeg";

const AboutIntro = () => {
  return (
    <div className="mb-20 mt-10">
      {/* <h2 className="ml-4 text-6xl mt-8 font-semibold">About</h2> */}
      <section className="relative bg-black text-white m-4 rounded-2xl h-96">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-24">
          <div className="text-center">
            <p className="mb-5">Who we are</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl mt-4">
              The Future of Marketing
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutIntro;
