import React from "react";
import { Rocket, BookmarkPlus, Video, FileQuestion } from "lucide-react";

const ServiceFeature = () => {
  return (
    <section className="">
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl py-8">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl">
            New Features
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Explore the latest features that enhance your learning experience
            and make it even more exciting.
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
              alt="Learning Features"
            />
          </div>
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <Rocket size={24} strokeWidth={2} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Extensive Experience</h4>
                  <p className="mt-2">
                    With years of experience in the field, we have successfully
                    completed numerous web development projects, ranging from
                    small business websites to large-scale e-commerce platforms.
                    Our expertise in website development is unmatched.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <BookmarkPlus size={24} strokeWidth={2} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Custom Solutions</h4>
                  <p className="mt-2">
                    We understand that every business is unique, and we believe
                    in providing custom solutions that cater to your individual
                    requirements. Our web development services are tailored to
                    your brand, ensuring a seamless online presence.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <Video size={24} strokeWidth={2} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Expert Team</h4>
                  <p className="mt-2">
                    Our team of skilled web developers and designers are
                    well-versed in the latest technologies and trends. They are
                    passionate about creating visually appealing, user-friendly,
                    and responsive websites that leave a lasting impression on
                    your visitors.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <FileQuestion size={24} strokeWidth={2} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">
                    Affordable Pricing & Time Management
                  </h4>
                  <p className="mt-2">
                    We offer affordable pricing and efficient time management
                    without compromising on quality. Our cost-effective
                    solutions ensure timely delivery, making us a preferred
                    choice for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
