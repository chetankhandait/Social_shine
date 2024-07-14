import { FaUser , FaTools , FaAward , FaClock } from "react-icons/fa";

function Feature() {
  return (
    <section id="features">
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl py-8">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl">
            New Features
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Explore the latest features that enhance your social media handling experience and make it even more exciting.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              width="600"
              height="600"
              src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
              className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
              style={{ color: "transparent" }}
              alt="Social Media Handling Features"
            />
          </div>
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                    <FaUser  />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Audience Engagement</h4>
                  <p className="mt-2">
                    We enhance audience engagement through targeted strategies, ensuring meaningful interactions with your community.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-500 text-white">
                    <FaTools  />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Tools  & Analytics</h4>
                  <p className="mt-2">
                    We utilize advanced tools and analytics to monitor performance metrics, optimizing your social media campaigns effectively.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-cyan-500 text-white">
                    <FaAward  />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Recognition & Branding</h4>
                  <p className="mt-2">
                    We focus on building brand recognition through consistent messaging and impactful branding strategies.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-orange-500 text-white">
                    <FaClock />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Time Management</h4>
                  <p className="mt-2">
                    We ensure efficient time management, delivering results within stipulated timelines while maintaining high quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
