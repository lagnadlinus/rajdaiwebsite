// src/components/Contact.jsx
import React from 'react';
import Button from './Button'; // Import the Button component as it's used here

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-section bg-wood-texture bg-cover bg-center text-white relative"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container max-w-3xl mx-auto text-center z-10">
        <h2 className="section-title text-white text-glow">Get in Touch</h2>
        <p className="mb-6 text-lg text-gray-200">
          Let's bring your outdoor vision to life. Reach out today for a free quote or consultation.
        </p>
        <div className="space-y-2 text-lg font-semibold text-brand-accent">
          <p>📞 <a href="tel:0415977783" className="hover:underline ">0415 977 783</a></p>
          <p>📧 <a href="mailto:chodenbrothersservices@gmail.com" className="hover:underline">chodenbrothersservices@gmail.com</a></p>
        </div>
        <Button href="tel:0415977783" className="mt-4">
          Call Now
        </Button>
      </div>
    </section>
  );
};

export default Contact;