import React from "react";
// import "./App.css";

const BusinessSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg relative flex items-center">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <img
              src="/path-to-your-image.jpg" // Replace with your image path
              alt="Business meeting"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <p className="text-sm mb-2">Pleasure and so read the was hope.</p>
              <h2 className="text-4xl font-bold mb-4">
                Ready to take{" "}
                <span className="text-blue-500">your business</span> to the next
                level?
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
                massa libero egestas malesuada viverra gravida libero cursus
                nulla leo pulvinar.
              </p>
            </div>
            <div className="flex items-center md:w-1/3 mt-4 md:mt-0">
              <img
                src="/path-to-profile-image.jpg" // Replace with your profile image path
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">Rated 4.9/5 stars</p>
                <div className="text-yellow-400">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-lg font-semibold">We're a family</p>
            <p className="text-sm mt-2">
              Speedily say has suitable disposal add boy. On fourth doubt miles
              of child. Exercise joy man children rejoiced.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm mt-2">
              Perceived end knowledge certainly day sweetness why cordially. Ask
              a quick six seven offer see among.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1.5M+</h3>
            <p className="text-lg font-semibold">Digital Marketing</p>
            <p className="text-sm mt-2">
              Rooms oh fully taken by worse do. Points afraid but may end law
              lasted. Was out laughter raptures returned outweigh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
