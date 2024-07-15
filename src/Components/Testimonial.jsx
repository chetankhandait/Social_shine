import React, { useState } from "react";

const testimonials = [
  {
    image: "./Testinomilal/movethedanceSpace.jpg",
    quote:
      "Social Shine transformed our outdated website into a modern, user-friendly platform. Our traffic increased by 50% in just the first month!",
    name: "Move the Dance Space",
     
  },
  {
    image: "./Testinomilal/blackleaf.jpg",
    quote:
      "Their app development skills are top-notch! The app they built for us has been a game-changer for our business.",
    name: "Blackleaf Properties",
     
  },
  
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { image, quote, name, position } = testimonials[currentTestimonial];

  return (
    <section className="bg-white dark:bg-gray-900 pt-10 ">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

        <div className="container flex flex-col justify-center w-full h-full px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">customers</span> <br /> are
            saying
          </h1>

          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-contain object-center w-full lg:w-[32rem] rounded-lg h-96 "
              src={image}
              alt={name}
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                Help us improve our productivity
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                {quote}
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">{name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{position}</p>
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-start my-10">
            <button
              title="left arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
