import {
  FaComments,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaShareAlt,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    icon: <FaComments className="w-12 h-12 mx-auto" />,
    title: "Social Media Strategy",
    description:
      "Develop comprehensive social media strategies tailored to your business goals, ensuring a cohesive and effective online presence.",
  },
  {
    icon: <FaRegChartBar className="w-12 h-12 mx-auto" />,
    title: "Analytics and Reporting",
    description:
      "Provide detailed analytics and reports to track the performance of your social media campaigns, ensuring data-driven decisions for continuous improvement.",
  },
  {
    icon: <FaRegCalendarAlt className="w-12 h-12 mx-auto" />,
    title: "Content Scheduling",
    description:
      "Plan and schedule your social media content to ensure timely and consistent posting across all platforms.",
  },
  {
    icon: <FaShareAlt className="w-12 h-12 mx-auto" />,
    title: "Content Creation",
    description:
      "Create engaging and visually appealing content that resonates with your audience, driving engagement and brand loyalty.",
  },
  {
    icon: <FaUsers className="w-12 h-12 mx-auto" />,
    title: "Community Management",
    description:
      "Manage your social media communities by fostering meaningful interactions, responding to comments, and engaging with your audience.",
  },
  {
    icon: <FaBullhorn className="w-12 h-12 mx-auto" />,
    title: "Paid Advertising",
    description:
      "Implement targeted social media advertising campaigns to reach a broader audience and achieve specific marketing objectives.",
  },
];

const Specialities = () => {
  return (
    <section className="py-12 bg-white" id="specialities">
      <h1 className="text-center text-6xl font-bold mb-8">
        What Makes Us <span className="text-blue-600">Special</span>
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg cursor-pointer text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                <div className="h-full">
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
