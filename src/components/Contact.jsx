// src/components/Contact.jsx
import React from 'react';
import { FaFacebook } from 'react-icons/fa'; // Import the Facebook icon
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
        <div className="space-y-2 text-lg font-semibold text-brand-accent mb-4">
          <p>📞 <a href="tel:0415977783" className="hover:underline ">0415 977 783</a></p>
          <p>📧 <a href="mailto:chodenbrothersservices@gmail.com" className="hover:underline">chodenbrothersservices@gmail.com</a></p>
        </div>
        
        {/* Social Media Link */}
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61577625604789"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Facebook"
            className="text-gray-200 hover:text-brand-accent transition"
          >
            <FaFacebook size={32} />
          </a>
        </div>

        <Button href="tel:0415977783" className="mt-8">
          Call Now
        </Button>
      </div>
    </section>
  );
};

export default Contact;