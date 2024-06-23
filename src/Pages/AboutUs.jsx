import React from "react";
import Footer from "../Components/Footer";
import AboutIntro from "../Components/AboutIntro";
import Team from "../Components/Team";
import FAQ from "../Components/FAQ";
import WhyChooseUs from "../Components/WhyChooseUs";
import SeprateNavbar from "./SeprateNavbar";
import Testimonial from "../Components/Testimonial";
// import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <SeprateNavbar />
      <div className="w-[94%] mx-auto">
        <AboutIntro />
      </div>
      <WhyChooseUs />
      <Team />
      <FAQ />
      <Testimonial />

      <Footer />
    </>
  );
};

export default AboutUs;
