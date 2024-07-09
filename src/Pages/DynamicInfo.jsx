import React from "react";

const DynamicInfo = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="flex-1">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Our Templates
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Website Development Services we have for you
          </h3>
          <div className="mt-10 space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">01</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Website Design & Development
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Our team combines creativity and functionality to design and
                  develop websites that not only look great but also perform
                  exceptionally well.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">02</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  E-commerce Development:
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  We specialize in building robust and secure e-commerce
                  platforms that drive sales and enhance user experience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">03</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Fully responsive design
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  In today’s mobile-first world, we ensure that all our websites
                  are responsive and optimized for various devices.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">03</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  SEO Optimization:
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  We offer search engine optimization services to help your
                  website rank higher on search engine results pages, increasing
                  your online visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 lg:mt-0">
          <img
            src="/laptop.webp"
            alt="Website Template"
            className="w-full rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicInfo;
