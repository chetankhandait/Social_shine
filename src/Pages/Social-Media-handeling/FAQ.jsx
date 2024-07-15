import { useState } from "react";

const faqData = [
  {
    header: "What services do you offer in social media handling?",
    text: "We offer comprehensive social media handling services including content creation, community management, paid social advertising, influencer marketing, and social media analytics.",
  },
  {
    header: "How long does it take to see results from social media campaigns?",
    text: "The timeline for seeing results from social media campaigns varies based on specific campaign goals and strategies. Typically, you can start noticing initial results within a few weeks, with increased engagement and awareness. To achieve better performance and sustained growth, ongoing optimizations and adjustments are essential throughout the campaign.",
  },
  {
    header:
      "Do you provide analytics and reporting for social media campaigns?",
    text: "We measure success through various metrics such as engagement rates, follower growth, website traffic, and conversion rates. We provide detailed monthly reports to track progress and adjust strategies as needed.",
  },
  {
    header: "Can you help with developing a social media strategy?",
    text: "Absolutely! We can assist in developing a tailored social media strategy aligned with your business objectives to maximize engagement and conversions.",
  },
  {
    header: "What platforms do you specialize in for social media marketing?",
    text: "We specialize in platforms like Facebook, Instagram, Twitter, LinkedIn, TikTok, and more, crafting strategies specific to each platform's audience and features.",
  },
  {
    header: "Do you offer influencer marketing services?",
    text: "Yes, we collaborate with influencers relevant to your niche to amplify brand reach, increase credibility, and drive targeted engagement for your social media campaigns.",
  },
  {
    header: "What is your approach to community management?",
    text: "Our approach focuses on building and nurturing communities around your brand, fostering meaningful interactions, addressing concerns promptly, and enhancing brand loyalty.",
  },
  {
    header: " How often will you post on our social media accounts?",
    text: " The posting frequency depends on the plan you choose and your specific needs. Typically, we recommend posting at least 3-5 times per week to maintain engagement.",
  },
];

const FAQ = () => {
  return (
    <section
      className="relative z-20 overflow-hidden bg-[#0e0f11] pb-12 pt-20 lg:pb-[80px] lg:pt-[80px]"
      id="Websites_FAQs"
    >
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
                our social media handling services.
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

export default FAQ;
