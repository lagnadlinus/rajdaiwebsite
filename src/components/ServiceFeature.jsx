// src/components/ServiceFeature.jsx
import React from 'react';
import Button from './Button'; 

const ServiceFeature = ({ title, description, image, reverse }) => {
  const containerClass = `flex flex-col md:flex-row items-center gap-12 py-12 ${
    reverse ? 'md:flex-row-reverse' : ''
  }`;

  return (
    <div className={containerClass}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
        <img
          src={image}
          alt={`A showcase of our ${title} service`}
          className="w-full h-72 lg:h-96 object-cover"
        />
      </div>
      
      {/* Text/Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-bold text-brand-primary mb-4">{title}</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {description}
        </p>
        <Button href="#contact">
          Get a Quote for this Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceFeature;