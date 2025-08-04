// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the scroll-up icon
import Button from './Button'; // ✅ Import your existing Button component

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Effect to handle button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button if page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="bg-brand-dark text-gray-300 py-6 mt-10">
        <div className="container text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Choden Landscaping & Handyman Services. All rights reserved.</p>
          <p className="mt-2">
            Website created by <a href="" className="text-brand-accent hover:underline">Nil Arc Vision</a>
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button - Conditionally rendered */}
      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

export default Footer;