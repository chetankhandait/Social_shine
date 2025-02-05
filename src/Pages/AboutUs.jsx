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
import { Helmet } from "react-helmet-async";
// import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <>

<Helmet>
  <title>About Us</title>
  <link rel="canonical" href="/about-us" />
  <meta
    name="description"
    content="Social Shine is a top digital marketing agency in Jabalpur, India, offering 360° solutions to enhance your brand's online presence and growth."
  />
</Helmet>

      <AboutIntro />
      <BusinessSection />
      {/* <Team /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
