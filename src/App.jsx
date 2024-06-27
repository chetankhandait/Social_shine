import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Components/Service";
import SeprateService from "./Pages/SeprateService";
import WorkSample from "./Pages/WorkSample";
import ContactUs from "./Pages/ContactUs";
import Dynamic from "./Pages/Dynamic";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<SeprateService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/work-sample" element={<WorkSample />} />
        <Route path="/dynamic" element={<Dynamic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
