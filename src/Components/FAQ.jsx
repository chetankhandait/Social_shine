// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "What services do you offer?",
//     answer:
//       "We offer a range of digital marketing services including SEO, social media marketing, and content creation.",
//   },
//   {
//     question: "How can I contact you?",
//     answer:
//       "You can contact us through our website's contact form or by calling our office directly.",
//   },
//   {
//     question: "What are your working hours?",
//     answer: "Our working hours are Monday to Friday, 9 AM to 6 PM.",
//   },
//   {
//     question: "Do you offer customized marketing plans?",
//     answer:
//       "Yes, we provide customized marketing plans tailored to your business needs.",
//   },
// ];

// const FAQ = () => {
//   const [selected, setSelected] = useState(null);

//   const toggle = (i) => {
//     if (selected === i) {
//       return setSelected(null);
//     }
//     setSelected(i);
//   };

//   return (
//     <section className="bg-gray-900 text-white py-12">
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-3xl font-bold mb-10 text-center">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="bg-gray-800 rounded-lg shadow-lg">
//               <div
//                 className="flex justify-between items-center p-5 cursor-pointer"
//                 onClick={() => toggle(i)}
//               >
//                 <h3 className="text-lg font-medium">{faq.question}</h3>
//                 <span className="text-xl">{selected === i ? "-" : "+"}</span>
//               </div>
//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   selected === i ? "max-h-screen p-5" : "max-h-0 p-0"
//                 }`}
//               >
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "What services does your agency offer?",
//     answer:
//       "Our agency offers a wide range of digital marketing services including SEO, PPC, social media marketing, and content creation.",
//   },
//   {
//     question: "What makes your agency different from others?",
//     answer:
//       "We focus on delivering customized marketing strategies tailored to your business needs, with a strong emphasis on measurable results and ROI.",
//   },
//   {
//     question: "How can I get started with your agency?",
//     answer:
//       "Getting started is easy! Simply contact us through our website, and we will schedule a consultation to discuss your needs and goals.",
//   },
//   {
//     question: "What industries do you specialize in?",
//     answer:
//       "We specialize in various industries including e-commerce, healthcare, finance, and technology, among others.",
//   },
//   {
//     question: "How do you measure the success of your marketing campaigns?",
//     answer:
//       "We use various metrics such as traffic, engagement, conversion rates, and ROI to measure the success of our marketing campaigns.",
//   },
//   {
//     question: "Do you offer custom packages or pricing?",
//     answer:
//       "Yes, we offer customized packages and pricing based on your specific needs and budget.",
//   },
//   {
//     question:
//       "How soon can I expect to see results from your marketing efforts?",
//     answer:
//       "Results can vary depending on the strategy and industry, but typically clients see noticeable improvements within 3 to 6 months.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-4xl font-bold mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Explore answers to common inquiries about our services and how we
//             can help your business succeed.
//           </p>
//         </div>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-300 pb-4">
//               <button
//                 className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span>{faq.question}</span>
//                 <span>{activeIndex === index ? "-" : "+"}</span>
//               </button>
//               {activeIndex === index && (
//                 <div className="mt-4 text-gray-500">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "What services does your agency offer?",
//     answer:
//       "Our agency offers a wide range of digital marketing services including SEO, PPC, social media marketing, and content creation.",
//   },
//   {
//     question: "What makes your agency different from others?",
//     answer:
//       "We focus on delivering customized marketing strategies tailored to your business needs, with a strong emphasis on measurable results and ROI.",
//   },
//   {
//     question: "How can I get started with your agency?",
//     answer:
//       "Getting started is easy! Simply contact us through our website, and we will schedule a consultation to discuss your needs and goals.",
//   },
//   {
//     question: "What industries do you specialize in?",
//     answer:
//       "We specialize in various industries including e-commerce, healthcare, finance, and technology, among others.",
//   },
//   {
//     question: "How do you measure the success of your marketing campaigns?",
//     answer:
//       "We use various metrics such as traffic, engagement, conversion rates, and ROI to measure the success of our marketing campaigns.",
//   },
//   {
//     question: "Do you offer custom packages or pricing?",
//     answer:
//       "Yes, we offer customized packages and pricing based on your specific needs and budget.",
//   },
//   {
//     question:
//       "How soon can I expect to see results from your marketing efforts?",
//     answer:
//       "Results can vary depending on the strategy and industry, but typically clients see noticeable improvements within 3 to 6 months.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="order-2 md:order-1 w-3/4 flex flex-col justify-center items-center">
//           <h2 className="text-4xl font-bold mb-4 text-center">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-600 mb-8 text-right">
//             Explore answers to common inquiries about our services and how we
//             can help your business succeed.
//           </p>
//         </div>
//         <div className="order-1 md:order-2 space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-300 pb-4">
//               <button
//                 className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span>{faq.question}</span>
//                 <span>{activeIndex === index ? "-" : "+"}</span>
//               </button>
//               {activeIndex === index && (
//                 <div className="mt-4 text-gray-500">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
import React, { useState } from "react";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white  pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[80px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap text-black">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
