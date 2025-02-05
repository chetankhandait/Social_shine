import Intro from "./Intro";
import Information from "./Information";
import Content from "./Content";
import Service from "./Service";
import Technology from "./Technology";
import Feature from "./Feature";
import FAQ from "./FAQ";
import Footer from "../../Components/Footer";
import Specialities from "./Specialities";
import { Helmet } from "react-helmet-async";

function WebsiteDevlopment() {
  return (
    <>
    <Helmet>
  <title>Web Development | Social Shine</title>
  <link rel="canonical" href="/web-development" />
  <meta
    name="description"
    content="Discover professional web development services at Social Shine. We specialize in creating responsive, user-friendly websites that elevate your brand and improve online engagement. Get in touch with us today to start building your dream website."
  />
</Helmet>

    
    <div>

      <Intro />
      <Information />
      <Content />
      <Service />
      <Specialities />
      <Technology />
      <Feature />
      <FAQ />
      <Footer />
    </div>
    </>
  );
}

export default WebsiteDevlopment;
