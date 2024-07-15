import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    header: "How long does it take to develop a website?",
    text: "The development time for a website depends on its complexity and requirements. On average, it takes about 4-6 weeks to design and develop a standard website, including research, planning, and revisions.",
  },
  {
    header: "What is the process for app development?",
    text: "Our app development process includes several stages: requirement analysis, design, development, testing, and deployment. We work closely with you to ensure your app meets your needs and is delivered on time.",
  },
  {
    header: "Do you provide maintenance and support after the website or app is live?",
    text: "Yes, we offer ongoing maintenance and support services to ensure your website or app remains up-to-date, secure, and functioning smoothly. Our team is available to address any issues or updates you may need.",
  },
  {
    header: "Can you help with SEO and digital marketing for my website?",
    text: "Absolutely! We provide comprehensive SEO and digital marketing services to help your website rank higher in search results and attract more traffic. Our strategies are tailored to meet your business goals.",
  },
  {
    header: "How do you ensure the security of the website or app?",
    text: "We prioritize security in every project by implementing best practices and the latest technologies to protect your website or app from potential threats. Regular updates and security audits are part of our maintenance services.",
  },
  {
    header: "What platforms do you develop apps for?",
    text: "We develop apps for both iOS and Android platforms using modern technologies like React Native, which allows for a seamless and efficient development process for both platforms simultaneously.",
  },
  {
    header: "What are the costs associated with website and app development?",
    text: "The cost of development varies based on the project's complexity, features, and requirements. We offer competitive pricing and transparent quotes after understanding your specific needs. Contact us for a detailed quote.",
  },
];

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[#0e0f11] pb-12 pt-20 lg:pb-[80px] lg:pt-[80px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap text-white">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                <span className="text-blue-400">Any Questions? </span>Look Here
              </h2>
              <p className="text-base text-gray-400">
                Have questions about our website and app development services? Check out the answers below to some of the most common questions we receive.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 flex flex-wrap">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full px-4 ">
              <AccordionItem header={faq.header} text={faq.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-gray-900 p-4 shadow-lg dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <FaChevronDown
            className={`fill-current text-white duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            size={17}
          />
        </div>
        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-white">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default FAQ;
