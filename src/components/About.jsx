// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-section bg-white text-brand-dark">  
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-brand-primary mb-4">About Us</h2>
        
        <p className="mb-6 text-lg leading-relaxed">
          At <strong>Choden Landscaping & Handyman Services</strong>, we bring over <strong>10 years of hands-on experience</strong> in transforming indoor and outdoor spaces into practical, beautiful environments. From turf laying to garden beds, concrete works to general repairs — we’re the team locals trust for quality workmanship and reliability.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Based in Hobart, our crew understands the Tasmanian climate and soil, which helps us deliver durable, low-maintenance solutions that stand the test of time. Whether it's a new garden feature, a fresh concrete path, or seasonal maintenance, we treat every job — big or small — with the same care and professionalism.
        </p>

        <p className="text-lg leading-relaxed">
          Our commitment? <strong>Honest service. Transparent pricing. Lasting results.</strong> We believe in doing things once and doing them right.
        </p>
      </div>
    </section>
  );
};

export default About;

