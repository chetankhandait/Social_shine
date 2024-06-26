import React from "react";
import Footer from "../Components/Footer";
import AboutIntro from "../Components/AboutIntro";
import Team from "../Components/Team";
import FAQ from "../Components/FAQ";
import WhyChooseUs from "../Components/WhyChooseUs";
import SeprateNavbar from "./SeprateNavbar";
import Testimonial from "../Components/Testimonial";
import Navbar from "../Components/Navbar";
import BusinessSection from "./BuisnessSection";
// import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />

      <AboutIntro />
      <BusinessSection />
      {/* <WhyChooseUs /> */}
      <Team />
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
