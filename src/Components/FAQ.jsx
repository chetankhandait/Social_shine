 
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
  },
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
  },
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
  },
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
  },
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
  },
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
  },
  {
    header: "How long we deliver your first blog post?",
    text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.",
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
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
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
