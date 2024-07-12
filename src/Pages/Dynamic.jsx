import React from "react";
import SRBNavbar from "../Components/SRBNavbar";
import Footer from "../Components/Footer";
import SectionComponent from "./SectionComponent";
import DynamicInfo from "./DynamicInfo";
import TailoredWebDevelopment from "./TailoredWebDevelopment";
import ServiceInfo from "./ServiceInfo";
import ServiceFAQ from "./ServiceFAQ";
import ServiceContent from "./ServiceContent";
import ServiceFeature from "./ServiceFeature";
import ServiceTechnology from "./ServiceTechnology";
import { useParams } from "react-router-dom";
import servicesData from "../Data/Data";

const Dynamic = () => {
  const { id } = useParams();
  console.log(id);
  const service = servicesData.find((find) => find.id === id);
  
  return (
    <>
      <div className="font-medium">
        <ServiceInfo data={service.content[0]} />
        <TailoredWebDevelopment data={service.content[1]} />
        <ServiceContent data={service.content[2]} />
        <SectionComponent data={service.content[3]} />
        <ServiceTechnology data={service.content[4]} />
        <DynamicInfo data={service.content[5]} />
        <ServiceFeature data={service.content[6]} />
        <ServiceFAQ data={service.content[7]} />
      </div>
      <Footer />
    </>
  );
};

export default Dynamic;
