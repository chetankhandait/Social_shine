import React from "react";

const SectionComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center bg-black"
      //   style={{
      //     backgroundImage: `url('https://image.shutterstock.com/image-photo/serious-thoughtful-young-businesswoman-standing-260nw-572357449.jpg')`,
      //   }}
    >
      <div className="absolute bg-white "></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white py-12 px-6 rounded-xl shadow-lg">
          <h2 className="text-blue-400  mb-8 text-4xl font-bold">
            Website <br />
            Development
          </h2>
          {/* <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            Provide solutions to small agency
          </h1> */}
          <p className="text-gray-700 mb-6">
            Explore our growing collection of courses on key web design and
            development subjects. An industry expert has written each course,
            helped by members of the Chrome team. Follow the modules
            sequentially, or dip into the topics you most want to learn about.
          </p>
          <div className="flex flex-wrap md:space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mb-4">
              Discover More
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 mb-4">
              Explore Services &rarr;
            </button>
          </div>
        </div>
        {/* <div className="flex flex-row md:flex-col justify-center items-center gap-3 md:space-y-6 ">
          {["DESIGN", "DEVELOPMENT", "DECODE"].map((item) => (
            <a
              key={item}
              className="md:py-8 md:px-16 text-xl lg:text-2xl cursor-pointer md:bg-blue-600 text-white font-semibold rounded-lg text-center"
            >
              {item}
            </a>
          ))}
        </div> */}
        <div className="lg:block hidden">
          <img src="/sapiens.png" />
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
