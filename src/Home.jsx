import React from "react";
import Hero from "./Hero.jsx";
 
import AboutUs from "./Components/AboutUs.jsx";
import Process from "./Components/Process.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Footer from "./Components/Footer.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import FAQ from "./Components/FAQ.jsx";
import ServiceGrid from "./Components/ServiceGrid.jsx";

const Home = () => {
  return (
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
  );
};

export default Home;
