// // // AboutUs.js
// import React from "react";
// import { FaAward, FaBullhorn, FaUsers } from "react-icons/fa";
// // import aboutImage from "./assets/about-us.jpg"; // Ensure you have an image in the correct path

// const BuisnessSection = () => {
//   return (
// <div className="container mx-auto px-4 py-16">
//   <section className="text-center mb-12">
//     <h1 className="text-4xl font-bold mb-4">About Us</h1>
//     <p className="text-lg text-gray-600">
//       Welcome to [Agency Name], your trusted partner in social media
//       marketing.
//     </p>
//   </section>

//   <section className="grid md:grid-cols-2 gap-8 mb-16">
//     <div className="flex flex-col justify-center">
//       <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
//       <p className="text-gray-700 mb-4">
//         Founded in [Year], [Agency Name] has been dedicated to helping
//         businesses grow their online presence through innovative and
//         data-driven social media strategies.
//       </p>
//       <p className="text-gray-700">
//         From our humble beginnings to our current success, our journey has
//         been fueled by creativity, expertise, and a commitment to
//         excellence.
//       </p>
//     </div>
//     <div>
//       <img
//         src="/Contact.jpg"
//         alt="About Us"
//         className="rounded-lg shadow-lg"
//       />
//     </div>
//   </section>

//   <section className="text-center mb-16">
//     <h2 className="text-3xl font-semibold mb-8">What We Do</h2>
//     <div className="flex flex-wrap justify-center gap-8">
//       <div className="w-60 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//         <FaBullhorn className="text-4xl text-blue-500 mb-4 mx-auto" />
//         <h3 className="text-xl font-medium mb-2">Social Media Strategy</h3>
//         <p className="text-gray-600">
//           We craft customized strategies that align with your business goals
//           and resonate with your audience.
//         </p>
//       </div>
//       <div className="w-60 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//         <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
//         <h3 className="text-xl font-medium mb-2">Influencer Marketing</h3>
//         <p className="text-gray-600">
//           Connect with influencers to expand your reach and build authentic
//           relationships with your audience.
//         </p>
//       </div>
//       <div className="w-60 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//         <FaAward className="text-4xl text-blue-500 mb-4 mx-auto" />
//         <h3 className="text-xl font-medium mb-2">Content Creation</h3>
//         <p className="text-gray-600">
//           Our team creates engaging content that captures your brand’s voice
//           and keeps your audience hooked.
//         </p>
//       </div>
//     </div>
//   </section>

//   <section className="text-center mb-16">
//     <h2 className="text-3xl font-semibold mb-8">Our Achievements</h2>
//     <div className="flex flex-wrap justify-center gap-8">
//       <div className="w-60 p-4 bg-white rounded-lg shadow-md">
//         <FaAward className="text-4xl text-blue-500 mb-4 mx-auto" />
//         <h3 className="text-xl font-medium mb-2">
//           Award-Winning Campaigns
//         </h3>
//         <p className="text-gray-600">
//           Recognized for our innovative campaigns that deliver outstanding
//           results.
//         </p>
//       </div>
//       <div className="w-60 p-4 bg-white rounded-lg shadow-md">
//         <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
//         <h3 className="text-xl font-medium mb-2">Satisfied Clients</h3>
//         <p className="text-gray-600">
//           Our clients’ success stories and testimonials speak volumes about
//           our dedication and expertise.
//         </p>
//       </div>
//     </div>
//   </section>

//   <section className="text-center">
//     <h2 className="text-3xl font-semibold mb-8">Our Vision</h2>
//     <p className="text-gray-700 mb-4">
//       At [Agency Name], we envision a future where every brand harnesses the
//       full power of social media to connect with their audience and achieve
//       their business goals.
//     </p>
//     <p className="text-gray-700">
//       We’re here to make that future a reality for our clients.
//     </p>
//   </section>
// </div>
//   );
// };

// export default BuisnessSection;
// Beliefs.js
// import { FaAward, FaBullhorn, FaUsers } from "react-icons/fa";
import Whatmakesdifferent from "./Whatmakesdifferent";
const BuisnessSection = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="/about-us-page-animate.svg"
                alt="About Us"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-semibold my-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in [Year], [Agency Name] has been dedicated to helping
                businesses grow their online presence through innovative and
                data-driven social media strategies.
              </p>
              <p className="text-gray-300 mb-4">
                From our humble beginnings to our current success, our journey
                has been fueled by creativity, expertise, and a commitment to
                excellence.
              </p>
              <p className="text-gray-300">
                From our humble beginnings to our current success, our journey
                has been fueled by creativity, expertise, and a commitment to
                excellence.
              </p>
            </div>
          </section>

           
        </div>
        
        <Whatmakesdifferent />
      </div>
    </>
  );
};

export default BuisnessSection;
