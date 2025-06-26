import { useState } from "react";
import Button from "./Button";
import { FaLeaf } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-neutral-600">
      <div className="container flex items-center justify-between py-4">
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-bold text-neutral-100">
          <img src="/src/assets/images/logo.svg" alt="Logo" className="h-20 w-auto"/>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-neutral-100 hover:text-brand-accent transition">
            Home
          </a>
          <a href="#services" className="text-neutral-100 hover:text-brand-accent transition">
            Services
          </a>
          <a href="#about" className="text-neutral-100 hover:text-brand-accent transition">
            About
          </a>
          <a href="#contact" className="text-neutral-100 hover:text-brand-accent transition">
            Contact
          </a>
          <Button href="#contact" className="ml-4 px-5 py-2 bg-brand-accent text-brand-dark rounded hover:brightness-110 flex items-center gap-2">
            <FaLeaf />
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-neutral-700">
          <nav className="flex flex-col space-y-3 px-6 py-4">
            <a href="#home" className="text-neutral-100 hover:text-brand-accent transition">
              Home
            </a>
            <a href="#services" className="text-neutral-100 hover:text-brand-accent transition">
              Services
            </a>
            <a href="#about" className="text-neutral-100 hover:text-brand-accent transition">
              About
            </a>
            <a href="#contact" className="text-neutral-100 hover:text-brand-accent transition">
              Contact
            </a>
            <Button href="#contact" className="mt-2 px-5 py-2 bg-brand-accent text-brand-dark rounded hover:brightness-110">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
