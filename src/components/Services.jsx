// src/components/Services.jsx
import React from 'react';
import AnimatedServiceFeature from "./AnimatedServiceFeature";

// ✅ Import all your service images
import gardeningImage from '../assets/services/gardening.jpg';
import landscapingImage from '../assets/services/landscaping.jpg';
import concretingImage from '../assets/services/concreting.jpg';
import handymanImage from '../assets/services/handyman.jpg';
import glazingImage from '../assets/services/glazing.jpg';
import securityDoorImage from '../assets/services/security-door.jpg';
import slidingDoorImage from '../assets/services/sliding-door.jpg';
import showerScreenImage from '../assets/services/shower-screen.jpg';
import bathroomMirrorImage from '../assets/services/bathroom-mirror.jpg';
import flyScreenImage from '../assets/services/fly-screen.jpg';


// ✅ Define your service data in this component
const servicesData = [
  {
    title: "Gardening & Yard Maintenance",
    image: gardeningImage,
    description: "Our dedicated team provides professional gardening and lawn care services to keep your outdoor spaces vibrant and tidy. We handle everything from routine mowing and pruning to seasonal clean-ups, ensuring your garden remains a source of pride year-round."
  },
  {
    title: "Landscaping",
    image: landscapingImage,
    description: "We specialize in turning your vision into a reality with bespoke landscaping solutions. Our expertise includes garden design, installing new turf, and constructing durable retaining walls that enhance both the beauty and functionality of your property."
  },
  {
    title: "Concreting",
    image: concretingImage,
    description: "From practical driveways to stylish pathways and foundations, our concreting services are built to last. We deliver flawless finishes and structural integrity for residential and commercial projects of all sizes."
  },
  {
    title: "Handyman Services",
    image: handymanImage,
    description: "For all your household repairs and installations, our professional handyman services are a reliable choice. We tackle general repairs, flat-pack furniture assembly, and various other fixes, saving you time and stress."
  },
  {
    title: "Glazing & Window Repair",
    image: glazingImage,
    description: "We provide expert glazing and glass repair services, from replacing cracked window panes to installing new glass in doors. Our solutions are safe, efficient, and tailored to meet your specific needs."
  },
  {
    title: "Security Door Installation",
    image: securityDoorImage,
    description: "Protect your home and family with our high-quality security door installations. We offer a range of secure, custom-fit doors that provide peace of mind without compromising on style."
  },
  {
    title: "Sliding Door & Window Replacement",
    image: slidingDoorImage,
    description: "Upgrade your property's aesthetics and energy efficiency with our seamless sliding door and window replacement services. We ensure a perfect fit and smooth operation for every installation."
  },
  {
    title: "Shower Screen Installation",
    image: showerScreenImage,
    description: "Enhance your bathroom with a new, stylish shower screen. We offer professional installation of modern and durable shower screens, fitted perfectly to your bathroom’s layout."
  },
  {
    title: "Bathroom Mirror & Light Installation",
    image: bathroomMirrorImage,
    description: "Brighten your bathroom with our expert mirror and light installation services. We can add elegant, custom-sized mirrors and modern lighting fixtures to create a more functional and inviting space."
  },
  {
    title: "Fly Screen Installation",
    image: flyScreenImage,
    description: "Enjoy fresh air without the worry of pests. We install durable fly screens on windows and doors, custom-fitted to your home for effective protection and ventilation."
  }
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 py-section bg-brand-light text-brand-dark">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-brand-primary mb-4 text-center">Our Services</h2>
        <p className="mb-12 text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Explore our full range of services, where we combine quality craftsmanship with a commitment to your home's unique needs.
        </p>
        
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <AnimatedServiceFeature
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;