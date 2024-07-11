import React from "react";
import SRBNavbar from "../Components/SRBNavbar";
import Footer from "../Components/Footer";
import SectionComponent from "./SectionComponent";
import DynamicInfo from "./DynamicInfo";
import TailoredWebDevelopment from "./TailoredWebDevelopment";
import ServiceInfo from "./ServiceInfo";
import ServiceFAQ from "./ServiceFAQ";
import ServiceContent from "./ServiceContent";
import ServiceFeature from "./ServiceFeature";
import ServiceTechnology from "./ServiceTechnology";
import { useParams } from "react-router-dom";
import servicesData from "../Data/Data";
const Dynamic = () => {
  const {id} = useParams();
  console.log(id)
  const Service = servicesData.find((find)=>find.id===id)
 const Data= {...Service}
 
  return (
    <>
      {/* <Navbar /> */}
      <div className="font-medium">

      <ServiceInfo {...Service} />
      <TailoredWebDevelopment />
      <ServiceContent />
      <SectionComponent />
      <ServiceTechnology />
      <DynamicInfo />
      <ServiceFeature />
      <ServiceFAQ />
      </div>
      {/* <div className="w-[94%] mx-auto">
        <div className="relative my-10">
          <div>
            <img
              src="/web.jpg"
              alt=""
              className="h-[590px] w-full object-cover rounded-xl"
            />
            <div className=" hidden md:flex items-center gap-4 justify-center -translate-y-7      ">
              <button className="bg-black text-white px-6 py-3 flex flex-col items-start rounded-xl ">
                {" "}
                Category : <span>Cloud tech</span>{" "}
              </button>
              <button className="bg-black text-white px-6 py-3 flex flex-col items-start rounded-xl ">
                {" "}
                Category : <span>Cloud tech</span>{" "}
              </button>
              <button className="bg-black text-white px-6 py-3 flex flex-col items-start rounded-xl ">
                {" "}
                Category : <span className="font-sans">Cloud tech</span>{" "}
              </button>
              <button className="bg-black text-white px-6 py-3 flex flex-col items-start rounded-xl ">
                {" "}
                Category : <span>Cloud tech Cloud tech</span>{" "}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start gap-14 mt-28">
            <div>
              <p className="font-bold">
                <span>01.</span> The Challenge
              </p>
              <p>
                When our power of choice is untrammeled and when nothing
                prevents us from being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. The wise man
                therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure other greater
                pleasures, or else he endures pains to avoid worse pains.
              </p>
            </div>
            <div>
              <p className="font-bold">
                <span>02.</span> The Solution
              </p>
              <p>
                When our power of choice is untrammeled and when nothing
                prevents us from being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. The wise man
                therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure other greater
                pleasures, or else he endures pains to avoid worse pains.
              </p>
            </div>
            <div>
              <p className="font-bold">
                <span>03.</span> The Result
              </p>
              <p>
                Because it is pain, but because occasionally circumstances occur
                in which toil and pain can procure him some great pleasure. To
                take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But
                who has any right to find fault with a man who chooses to enjoy
                a pleasure that has no annoying consequences, or one who avoids
                a pain that produces no resultant pleasure?"
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex-col flex items-center justify-between gap-14 my-24 sm:flex-row">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/28fe/8c2a/73b6a96679ed8b7d9e54c076ec3cb961?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBTjwilAg2JRFEUEgR-SDFHDzi1ODSCn~sftgyZUdyKCVy~UE4qnQxl5ZhaJmg1L5Tz~zeOKK-tBG7rTHVDjkyFSF8RC0GEMk-4OptQjlG4ekxSo5dZRt4IkLeeLfmS~Cq2eCzZJuRr~ctF~rZ5Rs3yCK3sp9d7jM6IeF6rYLwNatrUi8GK3QjH-RuryhvzLdvpcuhOGxVvs9ALLUOcCHXusVF993HBeSWyV~dl0G2c0O0H9wcxX-RyHjBY3Uxf505a2n50QRCTY1r6Tn750Fed~au6x0frlAi3C7QIv1enuwJOdzkqWcbPge9h6hZ-tzG1D-aW56fIGXLMeUsrygw__"
                alt=""
                className="  h-[400px] object-cover rounded-3xl  w-[417.3px]  "
              />
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/0be9/9bac/642e8087c76ad9daeac15ddd171bc9c2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kc7bf2I1pYkNvITYizLgjtDOwWgVMu6HV-PO~Oe~rZbr3lG5W31M~Mt564USBUL21wD0kzDXvlE3GIk6iDMCvkJbuzW5xGLxKdOZfIg-nokmk7AMOHaVOoFRMi39r9srnWu9K0Uy~svmPzIt1JozPNloLPbjk-Xse-0VIvFa2Q8S9ZaIb4n~qWPDq3MfXfEwfl76XXrxX9Iqi~xt0f2b2dFt~VyqEHmeK~GT-ybO~yBgtnafQYr9~4i7tnVwHhQZxi~wV3zIZPFln3Kuog4X0JDkd-eqsT7yjRW~b0sB0XTz15BnWdG0HavxkiojtSN9UwNhtxpe7FQKymYxkwdVbQ__"
                alt=""
                className="h-[400px] w-[417.3px] object-cover  rounded-3xl"
              />
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/8dad/c6cc/6491c4c566f79c7133489910ca97ce7b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDetyVY8mCrwomCV2AOZWSujkmCWpAdL7yRHdoOrbuJzgT~oWG~4KDEcubQJafjwVquE1-m~Sp4fQgU40-e9U-IahKdVOIvV1-TUtq0EDIaxHQNhFPkFClhBEJN~9wLvGQjwXPk8KIijMOdqJJwwQ4dElT0R2yXoYAnrFTv65aixdHU1wj48Je9iCfticIpoykkj2wCLwj5q~FJCpHgkEOXq8-EUsccU8Oh8aaCPW-9weCZybZvNi~nDkF-0TXOk9Hg1x76athT8b9O1RVkIAe58p62U4AeoTq6P4s71HtPpYgv8t7aN206T~Jrvy58UovJ5FNhNgj~1kLIIqV4ZrA__"
                alt=""
                className="h-[400px] w-[417.3px] object-cover  rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Dynamic;
