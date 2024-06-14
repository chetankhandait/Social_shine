import React from "react";
import Hero from "./Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Components/Service";
import Testimonial from "./Components/Testimonial";
import AboutUs from "./Components/AboutUs";
import Process from "./Components/Process";
// import Showcase from "./Components/Showcase";
// import Showcase from "./Showcase";

const App = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      {/* <Showcase /> */}
      <AboutUs />
      <Process />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
