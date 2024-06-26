import React from "react";
import Hero from "./Hero.jsx";
import Services from "./Components/Service.jsx";
import ShowCase from "./Components/ShowCase.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Process from "./Components/Process.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Footer from "./Components/Footer.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import FAQ from "./Components/FAQ.jsx";

const Home = () => {
  return (
    <div>
      <div className="">
        {/* <Navbar /> */}
        <Hero />
        <AboutUs />
        <Services />

        {/* <Showcase /> */}
        {/* <ShowCase /> */}

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
