import { useState } from "react";
import image2 from "../assets/iosat.png"; // Logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Header with Logo */}
      <header className="relative z-10 p-4 sm:p-6 md:p-10" data-aos="fade-down">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src={image2}
            alt="IOSAT Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-4 font-semibold text-sm sm:text-base">
            <a href="#hero" className="hover:underline transition-all duration-200">
              Home
            </a>
            <a href="#about" className="hover:underline transition-all duration-200">
              About
            </a>
            <a href="#objectives" className="hover:underline transition-all duration-200">
              Objectives
            </a>
            <a href="#services" className="hover:underline transition-all duration-200">
              Services
            </a>
            <a href="#contact" className="hover:underline transition-all duration-200">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={`sm:hidden mt-4 transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="flex flex-col space-y-3 py-4 font-semibold text-sm">
            <a href="#hero" className="hover:underline transition-all duration-200 py-2" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" className="hover:underline transition-all duration-200 py-2" onClick={closeMenu}>
              About
            </a>
            <a href="#objectives" className="hover:underline transition-all duration-200 py-2" onClick={closeMenu}>
              Objectives
            </a>
            <a href="#services" className="hover:underline transition-all duration-200 py-2" onClick={closeMenu}>
              Services
            </a>
            <a href="#contact" className="hover:underline transition-all duration-200 py-2" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;