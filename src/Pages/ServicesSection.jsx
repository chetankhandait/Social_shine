 
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const services = [
  
   
  {
    title: "Web Design & Development",
   
    image: "./developer-activity-animate.svg",
    description: "Let us bring your vision to life with our creative and responsive web design and development services..."
  },
  {
    title: "App Development",
     
    image: "./usability-testing-animate.svg",
    description: "Be unique with our App Development services. We craft user-friendly and feature-rich apps that..."
  },
  {
    title: "Website Maintenance",
    
    image: "./website-maintence.svg",
    description: "Ensuring a smooth and secure online experience with regular updates, optimizations, and ..."
  },
  {
    title: "Social Media Marketing",
    
    image: "./social-networking-animate.svg",
    description: "Boost your online presence and reach your target audience effectively with our comprehensive digital marketing solutions..."
  },
  {
    title: "E-Commerce Solutions",
     
    image: "./ecommerce-web-page-animate.svg",
    description: "Providing robust and scalable e-commerce solutions to help you set up and manage your online store effectively..."
  },
  {
    title: "Content Creator",
    
    image: "./content-creator-animate.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
  },
  {
    title: "Meta Ads",
    
    image: "./ads.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
  },
  
];

const ServicesSection = () => {
  return (
    <>
    <div className='text-center  '>
      <h1 className='text-5xl font-semibold'>Our Services</h1>
    </div>
    <section className='grid  grid-cols-1 sm:grid-cols-4  gap-4  my-6 mx-6'>
      {services.map((service, index) => (
        <div key={index}>
          <a href="#" className="group relative block bg-white">
  <img
    alt={service.name}
    src={service.image}
    className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{service.title}</p>

    <p className="text-xl font-bold text-black sm:text-2xl">{service.name}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="bg-[#2563eb] opacity-100 rounded-lg text-white translate-y-8 transform sm:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="flex flex-col   text-base p-4   items-end font-semibold">
          {service.description}
          <div className='flex items-center gap-2 underline'>
            Learn more
          <FaLongArrowAltRight fontSize={20} className='-rotate-45'/>
          </div>
        </p>
      </div>
    </div>
  </div>
</a>
        </div>
      ))}
    </section>
    </>
  )
}

export default ServicesSection;

