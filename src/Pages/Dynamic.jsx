import React from "react";
import SRBNavbar from "../Components/SRBNavbar";
import Footer from "../Components/Footer";
import SectionComponent from "./SectionComponent";
import DynamicInfo from "./DynamicInfo";
import TailoredWebDevelopment from "./TailoredWebDevelopment";
import ServiceInfo from "./ServiceInfo";
import ServiceFAQ from "./ServiceFAQ";
import ServiceContent from "./ServiceContent";

const Dynamic = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ServiceInfo />
      <ServiceContent />
      <TailoredWebDevelopment />
      <SectionComponent />
      <DynamicInfo />
      <ServiceFAQ />
      <Footer />
    </>
  );
};

export default Dynamic;
