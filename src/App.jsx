import React from "react";
import Hero from "./Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";

const App = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
