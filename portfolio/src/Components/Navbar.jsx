import React, { useState } from "react";
import Eddy from "../assets/Eddy.png";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex-1">
          <img className="h-12 w-auto" src={Eddy} alt="eddy the mascot (i made him during a hackathon) :D" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-x-12 justify-center flex-1">
          <Link to="/keithfykai/" className="text-sm font-semibold text-decoration-none">
            Home
          </Link>
          <Link to="/aboutme" className="text-sm font-semibold text-decoration-none">
            About Me
          </Link>
          <Link to="/projects" className="text-sm font-semibold text-decoration-none">
            Projects
          </Link>
          <Link to="/contactme" className="text-sm font-semibold text-decoration-none">
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Shown when hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 gap-y-4">
          <Link to="/keithfykai/" className="text-sm font-semibold text-decoration-none" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/aboutme" className="text-sm font-semibold text-decoration-none" onClick={closeMenu}>
            About Me
          </Link>
          <Link to="/projects" className="text-sm font-semibold text-decoration-none" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/contactme" className="text-sm font-semibold text-decoration-none" onClick={closeMenu}>
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
}
