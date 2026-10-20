import React, { useEffect, useState } from "react";
import Eddy from "../assets/Eddy.png";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState(
    () => document.documentElement.dataset.theme || "system"
  );

  useEffect(() => {
    if (themeMode === "system") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = themeMode;
    }
    try {
      localStorage.setItem("portfolio-theme", themeMode);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [themeMode]);

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-8 px-12" aria-label="Global">
        {/* Logo */}
        <div className="flex-1">
          <img className="h-12 w-auto" src={Eddy} alt="eddy the mascot (i made him during a hackathon) :D" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-x-6 flex-1 justify-end">
          <ThemeToggle mode={themeMode} onModeChange={setThemeMode} />
          <Link to="/keithfykai/" className="text-sm font-semibold text-decoration-none">
            Home
          </Link>
          <Link to="/keithfykai/projects" className="text-sm font-semibold text-decoration-none">
            Projects
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-foreground focus:outline-none">
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
        <div className="md:hidden flex items-center justify-center py-4 gap-x-6">
          <ThemeToggle mode={themeMode} onModeChange={setThemeMode} />
          <Link to="/keithfykai/" className="text-sm font-semibold text-decoration-none" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/keithfykai/projects" className="text-sm font-semibold text-decoration-none" onClick={closeMenu}>
            Projects
          </Link>
        </div>
      )}
    </header>
  );
}
