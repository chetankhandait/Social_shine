import React from "react";
// import backgroundImage from "/bg.jpeg";

const AboutIntro = () => {
  return (
    <div>
      {/* <h2 className="ml-4 text-6xl mt-8 font-semibold">About</h2> */}
      <section className="relative bg-black text-white py-4 h-80 md:h-96">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 "
          src="/edting.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-24">
          <div className="text-center">
            <p className="mb-5">Who we are</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-blue-400">
              About Us
            </h2>
            <h1 className="text-2xl font-semibold tracking-tight md:text-6xl mt-4">
              The Future of Marketing
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutIntro;
