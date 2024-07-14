import React from "react";
import Navbar from "../Components/Navbar";
import AboutIntro from "../Components/AboutIntro";
import ServicesSection from "./ServicesSection";
import Footer from "../Components/Footer";
import Solutions from "./Solutions";
import ServiceInformation from "./ServiceInformation";

const SeprateService = () => {
  return (
    <>
      <AboutIntro />
      <ServiceInformation />
      <ServicesSection />
      <Solutions />
      <Footer />
    </>
  );
};

export default SeprateService;
