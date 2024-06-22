import React from "react";
 
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import AboutUs from "./Pages/AboutUs";
import SeprateService from "./SeprateService";
import WorkSample from "./Pages/WorkSample";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/services" element={<SeprateService/>}/>
      <Route path="/work-sample" element={<WorkSample/>}/>

    </Routes>
    
    </BrowserRouter>
  );
};

export default App;
