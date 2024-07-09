 
import React from 'react'

const services = [
  
   
  {
    title: "Content Creator",
    name: "Jane Smith",
    image: "./developer-activity-animate.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
  },
  {
    title: "Content Creator",
    name: "Jane Smith",
    image: "./usability-testing-animate.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
  },
  {
    title: "Content Creator",
    name: "Jane Smith",
    image: "./website-maintence.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
  },
  {
    title: "Content Creator",
    name: "Jane Smith",
    image: "./social-networking-animate.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
  },
];

const ServicesSection = () => {
  return (
    <>
    <div className='text-center  '>
      <h1 className='text-5xl font-semibold'>Our Services</h1>
    </div>
    <section className='grid grid-cols-4 r gap-4  my-6 mx-6'>
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
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-black font-semibold">
          {service.description}
          
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

