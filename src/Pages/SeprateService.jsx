import React from "react";
import Navbar from "../Components/Navbar";
import AboutIntro from "../Components/AboutIntro";
import ServicesSection from "./ServicesSection";
import Footer from "../Components/Footer";
import Solutions from "./Solutions";
import ServiceInformation from "./ServiceInformation";
import { Helmet } from "react-helmet-async";

const SeprateService = () => {
  return (
    <>
    <Helmet>
  <title>Our Services | Social Shine</title>
  <link rel="canonical" href="/services" />
  <meta
    name="description"
    content="Explore Social Shine's expert digital marketing services, including web development, social media marketing, SEO, and more to boost your brand's online presence."
  />
</Helmet>

      <AboutIntro />
      <ServiceInformation />
      <ServicesSection />
      <Solutions />
      <Footer />
    </>
  );
};

export default SeprateService;
