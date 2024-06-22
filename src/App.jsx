import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Components/Service";
import SeprateService from "./SeprateService";
import WorkSample from "./Pages/WorkSample";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<SeprateService />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/work-sample" element={<WorkSample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
