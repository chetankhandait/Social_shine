import React from "react";
import backgroundImage from "/bg.jpeg";

const AboutIntro = () => {
  return (
    <div className="mb-20">
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
// import React from "react";

// const AboutIntro = () => {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="flex flex-col justify-center items-center text-center md:flex-row w-full h-full">
//         <div className="bg-black w-full md:w-1/2 h-full flex justify-center items-center">
//           <div>
//             <p className="text-white text-lg mb-4">We Are Creative</p>
//             <h1 className="text-white text-6xl font-bold">Branding</h1>
//             <h2 className="text-white text-2xl mt-2">Digital Agency</h2>
//           </div>
//         </div>
//         <div className="bg-blue-500 w-full md:w-1/2 h-full flex justify-center items-center">
//           <div>
//             <p className="text-white text-lg mb-4">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod
//               tempor incididunt labore et dolore.
//             </p>
//             <button className="bg-white text-black px-6 py-2 rounded">
//               Discover More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutIntro;
