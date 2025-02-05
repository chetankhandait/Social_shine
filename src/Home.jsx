import React from "react";
import Hero from "./Hero.jsx";

import AboutUs from "./Components/AboutUs.jsx";
import Process from "./Components/Process.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Footer from "./Components/Footer.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import FAQ from "./Components/FAQ.jsx";
import ServiceGrid from "./Components/ServiceGrid.jsx";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Social Shine| Digal Marketing Agency</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="Discover how Social Shine, a digital marketing and social media agency in Jabalpur, India, enhances online visibility with expert website and app development services. We provide 360° digital solutions to elevate your brand and drive measurable growth."
        />
      </Helmet>
      <div>
        <div className="overflow-hidden">
          <Hero />
          <AboutUs />
          <ServiceGrid />
          <Process />
          <WhyChooseUs />
          <Testimonial />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
