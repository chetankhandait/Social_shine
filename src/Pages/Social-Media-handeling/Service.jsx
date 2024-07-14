const Service = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="service">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-14">
        <div className="flex-1">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Our Services
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Social Media Management Services We Offer
          </h3>
          <div className="mt-10 space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500">
                  <span className="text-lg font-bold text-white">01</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Social Media Strategy
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  We develop comprehensive social media strategies tailored to
                  your business goals, ensuring a cohesive and effective online
                  presence.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500">
                  <span className="text-lg font-bold text-white">02</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Content Creation
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Our team creates engaging and visually appealing content that
                  resonates with your audience, driving engagement and brand
                  loyalty.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500">
                  <span className="text-lg font-bold text-white">03</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Community Management
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  We manage your social media communities by fostering
                  meaningful interactions, responding to comments, and engaging
                  with your audience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500">
                  <span className="text-lg font-bold text-white">04</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Analytics and Reporting
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  We provide detailed analytics and reports to track the
                  performance of your social media campaigns, ensuring
                  data-driven decisions for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 lg:mt-0">
          <img
            src="/Wall post-amico.svg"
            alt="Social Media Management"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
