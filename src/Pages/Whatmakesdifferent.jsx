import React from "react";

const Whatmakesdifferent = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 text-white">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight">
        What makes us different
      </h2>
      <p className="mb-12 text-lg">
        As a budding digital agency, Social Shine is committed to helping
        small businesses grow with personalized strategies and hands-on
        support.
      </p>
      <div className="w-full">
        {/* Grid container with responsive column settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Grid Item 1 */}
          <div className="p-5 bg-gray-800 border-2 border-indigo-500 rounded-lg">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-200">
              Tailored Digital Solutions
            </h3>
            <p className="mt-3 mb-2 text-xs font-medium text-indigo-500 uppercase">
              ----
            </p>
            <p className="mb-2 text-gray-400">
              We offer customized social media strategies and content creation
              services that fit your business needs, ensuring growth at your
              pace.
            </p>
          </div>

          {/* Grid Item 2 */}
          <div className="p-5 bg-gray-800 border-2 border-purple-500 rounded-lg">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-200">
              Dedicated Team Support
            </h3>
            <p className="mt-3 mb-2 text-xs font-medium text-purple-500 uppercase">
              ----
            </p>
            <p className="mb-2 text-gray-400">
              Our small but passionate team offers dedicated support, walking
              you through each step to build your online presence with confidence.
            </p>
          </div>
        </div>

        {/* Second row of grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {/* Grid Item 3 */}
          <div className="p-5 bg-gray-800 border-2 border-blue-400 rounded-lg">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-200">
              Creative Content Creation
            </h3>
            <p className="mt-3 mb-2 text-xs font-medium text-blue-400 uppercase">
              ----
            </p>
            <p className="mb-2 text-gray-400">
              We help businesses build their brand identity through innovative
              content, graphics, and campaigns that connect with the target
              audience.
            </p>
          </div>

          {/* Grid Item 4 */}
          <div className="p-5 bg-gray-800 border-2 border-yellow-400 rounded-lg">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-200">
              Results-Driven Growth
            </h3>
            <p className="mt-3 mb-2 text-xs font-medium text-yellow-400 uppercase">
              ----
            </p>
            <p className="mb-2 text-gray-400">
              Our beginner-friendly strategies focus on measurable results that
              help you scale your online presence while maintaining a budget-friendly approach.
            </p>
          </div>

          {/* Grid Item 5 */}
          <div className="p-5 bg-gray-800 border-2 border-green-500 rounded-lg">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-200">
              Innovative Campaign Management
            </h3>
            <p className="mt-3 mb-2 text-xs font-medium text-green-500 uppercase">
              ----
            </p>
            <p className="mb-2 text-gray-400">
              From influencer marketing to paid ads, we manage your campaigns
              to get the most out of your marketing efforts, optimizing for
              maximum reach and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatmakesdifferent;
