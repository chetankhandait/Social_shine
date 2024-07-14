import { ArrowRight } from "lucide-react";
import { FaDesktop, FaTools, FaPuzzlePiece } from "react-icons/fa";

function Technology() {
  return (
    <div>
      <h2 className="ml-6 font-bold text-5xl mb-12 text-center" id="technologies">
        <span className="text-blue-600">Technologies!</span> We Use for Social Media Handling
      </h2>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full flex justify-center items-center h-64">
            <img src="./b-1.jpg" alt="" />
           </div>
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-indigo-500">
                Social Media Platforms
              </span>
              Expert management across all major social media platforms
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                We specialize in managing and optimizing your presence on various social media platforms, ensuring consistent engagement and growth.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href="#"
            >
              Explore more
              <span className="sr-only">
                , Expert management across all major social media platforms
              </span>
              <ArrowRight className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" />
            </a>
          </div>
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full flex justify-center items-center h-64">
 <img src="./b-2.jpg" alt="" />
           </div>
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-purple-500">
                Tools & Analytics
              </span>
              Utilizing advanced tools and analytics for data-driven strategies
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                We leverage cutting-edge tools and analytics to analyze performance metrics and optimize your social media campaigns effectively.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href="#"
            >
              Explore more
              <span className="sr-only">
                , Utilizing advanced tools and analytics for data-driven strategies
              </span>
              <ArrowRight className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" />
            </a>
          </div>
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full flex justify-center items-center h-64">
 <img src="./b-3.jpg" alt="" />
           </div>
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-cyan-500">
                Custom Strategies
              </span>
              Tailored social media strategies to fit your unique business needs
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                We develop custom social media strategies that align with your business goals, ensuring maximum impact and engagement.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href="#"
            >
              Explore more
              <span className="sr-only">
                , Tailored social media strategies to fit your unique business needs
              </span>
              <ArrowRight className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Technology;
