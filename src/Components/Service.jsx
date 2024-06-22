// import React from "react";
// import {
//   FaPenNib,
//   //   FaPaintBrush,
//   FaBullhorn,
//   FaLaptopCode,
//   FaHeadset,
//   FaFingerprint,
// } from "react-icons/fa"; // Importing icons
// import { MdColorLens } from "react-icons/md";

// const services = [
//   {
//     title: "Content Marketing",
//     description:
//       "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic.",
//     icon: <FaPenNib />, // using imported icon
//   },
//   {
//     title: "Graphic Design",
//     description:
//       "Unlock the power of visual storytelling with our expert graphic design services, tailored to elevate your brand and captivate.",
//     icon: <MdColorLens />, // using imported icon
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Elevate your brand’s online presence with our data-driven digital marketing strategies. From SEO and content marketing.",
//     icon: <FaBullhorn />, // using imported icon
//   },
//   {
//     title: "Web Design",
//     description:
//       "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.",
//     icon: <FaLaptopCode />, // using imported icon
//   },
//   {
//     title: "IT Consulting",
//     description:
//       "IT consulting or information technology consulting refers to the practice of providing advisory and implementation services.",
//     icon: <FaHeadset />, // using imported icon
//   },
//   {
//     title: "Brand Identity",
//     description:
//       "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
//     icon: <FaFingerprint />, // using imported icon
//   },
// ];
// const Services = () => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold text-center text mb-8 text-teal-400">
//           Our Services
//         </h2>
//         <h3 className="text-3xl font-semibold text-center mb-8">
//           High-impact services for your business
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-left p-6 bg-gray-100 rounded-lg shadow-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer"
//             >
//               <div className="text-3xl mb-4">{service.icon}</div>
//               <h4 className="text-xl  font-semibold mb-2">{service.title}</h4>
//               <p className="active:text-gray-700 text-left ">
//                 {service.description}
//               </p>
//               {/* <button className="bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded-full font-semibold mt-4">
//                 Project Here
//               </button> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import {
  FaCode,
  FaPencilRuler,
  FaMobileAlt,
  FaSearch,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-white" />,
    title: "Web Development",
    description:
      "Our Business Plan is a written document describing a company's core business activities.",
    iconBgColor: "bg-yellow-400",
  },
  {
    icon: <FaPencilRuler className="text-white" />,
    title: "UI/UX Designer",
    description:
      "UI/UX design service provider, our primary goal is to create user-friendly and visually appealing digital products.",
    iconBgColor: "bg-orange-400",
  },
  {
    icon: <FaMobileAlt className="text-white" />,
    title: "App Development",
    description:
      "UI/UX design service provider, our primary goal is to create user-friendly and visually appealing digital products.",
    iconBgColor: "bg-blue-400",
  },
  {
    icon: <FaSearch className="text-white" />,
    title: "Search Engine Optimization",
    description:
      "Our Search Engine Optimization (SEO) service is a comprehensive approach to improving your website's visibility and ranking.",
    iconBgColor: "bg-blue-200",
  },
  {
    icon: <FaPalette className="text-white" />,
    title: "Graphic Design",
    description:
      "A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market.",
    iconBgColor: "bg-teal-200",
  },
  {
    icon: <FaChartLine className="text-white" />,
    title: "Social Media Management",
    description:
      "Our Search Engine Optimization (SEO) service is a comprehensive approach to improving your website's visibility and ranking.",
    iconBgColor: "bg-green-400",
  },
];

const ServiceCard = ({ icon, title, description, iconBgColor }) => (
  <div className="p-6 bg-white hover:text-white rounded-lg hover:bg-gray-900 cursor-pointer flex flex-col items-center">
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-lg ${iconBgColor} mb-4`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

const Service = () => (
  <div className="text-center py-10 bg-white">
    <h2 className="text-lg text-teal-400 font-bold">PREMIUM SERVICE</h2>
    <h1 className="text-4xl font-bold my-2">That Is The Best Service</h1>
    <h2 className="text-xl mb-8">Determine The Service You Need</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          iconBgColor={service.iconBgColor}
        />
      ))}
    </div>
  </div>
);

export default Service;
