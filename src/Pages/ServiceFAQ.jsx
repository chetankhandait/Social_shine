import React, { useState } from "react";

const faqData = [
  {
    header: "What services do you offer in web development?",
    text: "We offer a comprehensive range of services including custom website design, e-commerce development, CMS development, website maintenance, and SEO optimization.",
  },
  {
    header: "How long does it take to develop a website?",
    text: "The timeline for website development varies depending on the complexity of the project. Generally, it takes 4-6 weeks to develop a standard website.",
  },
  {
    header: "Do you provide post-launch support?",
    text: "Yes, we provide ongoing support and maintenance services after the website launch to ensure your site remains up-to-date and performs optimally.",
  },
  {
    header: "Can you help with website redesign?",
    text: "Absolutely! We can help revamp your existing website to enhance its design, functionality, and performance.",
  },
  {
    header: "What technologies do you use for web development?",
    text: "We use a variety of technologies including HTML, CSS, JavaScript, React, Node.js, WordPress, and more, depending on the project requirements.",
  },
  {
    header: "Do you offer responsive web design?",
    text: "Yes, all our websites are designed to be fully responsive and provide an optimal viewing experience across different devices and screen sizes.",
  },
  {
    header: "What is your pricing model?",
    text: "Our pricing depends on the scope and complexity of the project. We offer competitive pricing and provide a detailed quote after discussing your specific requirements.",
  },
];

const ServiceFAQ = () => {
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
                Here are some of the most common questions we get asked about
                our website development services.
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
    <div className="mb-8 w-full rounded-lg bg-gray-800 p-4 shadow-lg dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
      <button
        className="faq-btn flex w-full justify-between items-center text-left"
        onClick={handleToggle}
      >
        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-white">{header}</h4>
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-primary/5 text-primary dark:bg-white/5 rounded-lg">
          <span
            className={`text-white text-3xl duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
          >
            {active ? "-" : "+"}
          </span>
        </div>
      </button>

      <div
        className={`pl-[10px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-gray-50">{text}</p>
      </div>
    </div>
  );
};

export default ServiceFAQ;
