

// src/components/Hero.jsx
import React from 'react';
import Button from './Button'; // Import the Button component as it's used here

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[75vh] md:h-[80vh] flex items-center justify-center text-center px-4 bg-hero-pattern bg-cover bg-center text-white relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Add subtle overlay */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to <span className="text-brand-accent">Choden Brothers Services</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Transforming Hobart's outdoor spaces with care and Quality.
        </p>
        <Button href="#contact" className="mt-6 btn-primary">Call Us</Button>
      </div>
    </section>
  );
};

export default Hero;


