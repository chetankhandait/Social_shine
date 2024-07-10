 
import React from "react";
import {
  FaRegClock,
  FaRegEdit,
  FaRegHandshake,
  FaRegPaperPlane,
  FaRegChartBar,
  FaRegEnvelope,
  FaBullhorn,
  FaPlay,
  FaBlenderPhone,
  FaLaptopCode,
  FaSearchDollar,
  FaRegPlayCircle,
} from "react-icons/fa";
// import { IoCodeSlashOutline } from "react-icons/io5";

const FeatureCard = ({ Icon, title, description }) => (
  <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full hover:bg-blue-600   cursor-pointer">
    <div className="p-9">
      <Icon className="w-12 h-12 mx-auto text-gray-900 sm:mx-0" />
      <h3 className="mt-6 text-2xl font-bold text-gray-900  sm:mt-10">
        {title}
      </h3>
      <p className="mt-6 text-base text-gray-600 hover:text-white">
        {description}
      </p>
    </div>
  </div>
);

const Solutions = () => {
  const features = [
    {
      Icon: FaRegClock,
      title: "Realtime Collaboration",
      description:
        "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together.",
    },
    {
      Icon: FaRegEdit,
      title: "Content Marketing",
      description:
        "Create and distribute valuable content to attract and retain customers.",
    },
    {
      Icon: FaRegHandshake,
      title: "Integrations",
      description:
        "Step up your designs and workflow with integrations with your favorite tools such as Mailchimp, Slack, Jira, etc.",
    },
    {
      Icon: FaRegPaperPlane,
      title: "Publish Website Online",
      description:
        "Effortlessly publish your webpages online and make it available to the world with a click of a button.",
    },
    {
      Icon: FaRegPlayCircle,
      title: "Video Production",
      description:
        "Produce high-quality videos to tell your brand story and engage viewers.",
    },
    {
      Icon: FaRegEnvelope,
      title: "Custom Domains",
      description:
        "Attach your own custom domain to your published projects or website on Windframe.",
    },
    {
      Icon: FaRegEnvelope,
      title: "Social Media Marketing",
      description:
        "Manage your social media profiles effectively to engage with your audience.",
    },
    {
      Icon: FaRegChartBar,
      title: "Performance Marketing",
      description:
        "Optimize your marketing campaigns for better performance and ROI.",
    },
    {
      Icon: FaSearchDollar,
      title: "SEO",
      description:
        "Improve your website's ranking on search engines and increase organic traffic.",
    },
    {
      Icon: FaBullhorn,
      title: "Digital Marketing",
      description:
        "Boost your online presence and drive more traffic with our digital marketing strategies.",
    },
    {
      Icon: FaBlenderPhone,
      title: "Tele Calling Support",
      description:
        "Provide excellent customer service and support through our tele calling services.",
    },
  ];

  return (
    <section className="py-12 bg-black text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-7xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
