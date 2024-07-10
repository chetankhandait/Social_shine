import React from "react";
import { ArrowRight, Code, Layout, Zap } from "lucide-react";

const ServiceTechnology = () => {
  return (
    <div>
      <h2 className="ml-6 font-bold text-5xl mb-12">
        <span className="text-blue-400">Technologies!</span> We Used For Design
        & Development
      </h2>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full flex justify-center items-center h-64">
            {/* <Code size={64} className="text-indigo-500" /> */}
            <img
              src="/full-stack developer.webp"
              alt="full-stack-development"
            />
          </div>
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-indigo-500">
                Hard Code (Full-Stack Development)
              </span>
              Comprehensive development services for all your web applications
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                We provide end-to-end full stack development services, ensuring
                your web applications are scalable, secure, and user-friendly.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href=""
            >
              Explore more
              <span className="sr-only">
                , Comprehensive development services for all your web
                applications
              </span>
              <ArrowRight className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" />
            </a>
          </div>
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full flex justify-center items-center h-64">
            {/* <Layout size={64} className="text-purple-500" /> */}
            <img src="/WIX.jpg" alt="wix" />
          </div>
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-purple-500">
                No-Code Platforms
              </span>
              Effortless website building with no coding required
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                Our no-code platform services allow you to build and customize
                your websites effortlessly without needing any coding skills.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href=""
            >
              Explore more
              <span className="sr-only">
                , Effortless website building with no coding required
              </span>
              <ArrowRight className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" />
            </a>
          </div>
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full flex justify-center items-center h-64">
            {/* <Zap size={64} className="text-cyan-500" /> */}
            <img src="/custom-solution.jpg" alt="Custom-Solution" />
          </div>
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-cyan-500">
                Custom Solutions
              </span>
              Tailored development solutions to meet your unique needs
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                We offer custom development solutions designed to meet your
                specific business requirements and help you achieve your goals.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href=""
            >
              Explore more
              <span className="sr-only">
                , Tailored development solutions to meet your unique needs
              </span>
              <ArrowRight className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServiceTechnology;
