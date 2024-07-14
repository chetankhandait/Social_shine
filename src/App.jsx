import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Components/Service";
import SeprateService from "./Pages/SeprateService";
import WorkSample from "./Pages/WorkSample";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "./ScrollToTop";
import FloatingNav from "./Components/FloatingNavbar";
import SRBNavbar from "./Components/SRBNavbar";
import WebsiteDevlopment from "./Pages/Website_Development/WebsiteDevlopment";
import SocialMediaHandeling from "./Pages/Social-Media-handeling/SocialMediaHandeling";
const App = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      {/* <FloatingNav/> */}

      <SRBNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<SeprateService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/web-devlopment" element={<WebsiteDevlopment />} />
        <Route
          path="/social-media-handeling"
          element={<SocialMediaHandeling />}
        />
        {/* <Route path="/work-sample" element={<WorkSample />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
