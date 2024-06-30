// import React from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaInstagram,
//   FaFacebook,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const ContactUs = () => {
//   return (
//     <div className="bg-white p-8 md:p-16">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-4xl font-bold mb-4">Let's talk</h2>
//           <p className="text-gray-600 mb-8">
//             We collaborate with thousands of creators, entrepreneurs and
//             complete legends.
//           </p>
//           <div className="space-y-6">
//             <div className="flex items-start space-x-4">
//               <FaEnvelope className="text-2xl text-gray-600" />
//               <div>
//                 <h3 className="text-lg font-semibold">Our email</h3>
//                 <p className="text-gray-600">hello@example.com</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <FaPhoneAlt className="text-2xl text-gray-600" />
//               <div>
//                 <h3 className="text-lg font-semibold">Call us</h3>
//                 <p className="text-gray-600">+123 456 7892</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <FaMapMarkerAlt className="text-2xl text-gray-600" />
//               <div>
//                 <h3 className="text-lg font-semibold">Find us</h3>
//                 <p className="text-gray-600">Open Google Maps</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex space-x-4 mt-8">
//             <a href="#">
//               <FaFacebook className="text-2xl text-gray-600 hover:text-black" />
//             </a>
//             <a href="#">
//               <FaInstagram className="text-2xl text-gray-600 hover:text-black" />
//             </a>
//             <a href="#">
//               <FaLinkedinIn className="text-2xl text-gray-600 hover:text-black" />
//             </a>
//           </div>
//         </div>
//         <div>
//           <form className="space-y-4 bg-gray-100 p-8 rounded-lg">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="first-name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First name
//                 </label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   className="mt-1 p-3 w-full border-none border-gray-100 bg-none rounded"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Last name
//                 </label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   className="mt-1 p-3 w-full border border-gray-300 rounded"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 p-3 w-full border border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="mt-1 p-3 w-full border border-gray-300 rounded"
//                 />
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 className="mt-1 p-3 w-full border border-gray-300 rounded"
//                 rows="5"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800"
//             >
//               Submit Now
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="mt-12">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24144.57662277449!2d-74.01152400447836!3d40.706005836892565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3165ab3e7d%3A0x7647a1b67cb61a4f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1622045795299!5m2!1sen!2sin"
//           width="100%"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           className="rounded-lg"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactSection = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div
        className="relative bg-black  py-16 "
        // style={{
        //   backgroundImage: `url('https://i.pinimg.com/originals/7f/e7/74/7fe774bbacce09f00cb5b2e3cbc48db3.png')`,
        // }}
      >
        <div className="py-16">
          <p className="text-center text-white font-bold text-5xl tracking-wide mt-6">
            Get in Touch
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 p-4">
            <div className="p-8  bg-white bg-opacity-90 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4">Let's talk</h2>
              <p className="text-gray-600 mb-8">
                We collaborate with thousands of creators, entrepreneurs and
                complete legends.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Our email</h3>
                    <p className="text-gray-600">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Call us</h3>
                    <p className="text-gray-600">+123 456 7892</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Find us</h3>
                    <p className="text-gray-600">Open Google Maps</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-gray-600 text-blue-600" />
                </a>
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-gray-600 text-blue-600" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="text-2xl hover:text-gray-600 text-blue-600" />
                </a>
              </div>
            </div>
            <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 p-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24144.57662277449!2d-74.01152400447836!3d40.706005836892565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3165ab3e7d%3A0x7647a1b67cb61a4f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1622045795299!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;
