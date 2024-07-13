import {
  FaDesktop,
  FaServer,
  FaMobileAlt,
  FaPen,
  FaLock,
  FaBug,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDesktop className="w-12 h-12 mx-auto" />,
    title: "Graphic User Interface (UI)",
    description:
      "Our Graphic User Interface Design language allows unified user experience through innovative design and upgraded technology.",
  },
  {
    icon: <FaServer className="w-12 h-12 mx-auto" />,
    title: "Bootstrapping",
    description:
      "Our Website development services help in developing a super-responsive, easy-accessible and mobile-friendly front-end and web development application.",
  },
  {
    icon: <FaMobileAlt className="w-12 h-12 mx-auto" />,
    title: "Screen Optimized",
    description:
      "Our responsive design enables the best visibility of your website from any device with different screen-sizes and provides a practical flexibility beyond imagination.",
  },
  {
    icon: <FaPen className="w-12 h-12 mx-auto" />,
    title: "Content Update",
    description:
      "We ensure your website content is always up-to-date with the latest information and trends.",
  },
  {
    icon: <FaLock className="w-12 h-12 mx-auto" />,
    title: "Application Security",
    description:
      "We provide top-notch security features to keep your application safe from potential threats.",
  },
  {
    icon: <FaBug className="w-12 h-12 mx-auto" />,
    title: "Error / Bug Fixing",
    description:
      "Our team quickly identifies and resolves any issues or bugs to ensure smooth operation of your website.",
  },
];

const Specialities = () => {
  return (
    <section className="py-12 bg-white" id="speciaties">
      <h1 className="text-center text-6xl font-bold mb-8">
        What's makes us?<span className="text-blue-600">Special</span>
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg cursor-pointer text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                <div className="h-full">
                  {" "}
                  {/* Ensure consistent height */}
                  {service.icon}
                  <h3 className="mt-4 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
