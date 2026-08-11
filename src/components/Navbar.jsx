import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-plate">
            <img
              src="/warrior-systems-logo.png"
              alt="The Warrior Systems"
            />
          </span>
        </a>

        {/* Desktop / Mobile Navigation */}
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a href="#problem" onClick={closeMenu}>
            The Problem
          </a>

          <a href="#laws" onClick={closeMenu}>
            The Laws
          </a>

          <a href="#mastery" onClick={closeMenu}>
            MASTERY™
          </a>

          <a href="#dashboard" onClick={closeMenu}>
            Dashboard
          </a>

          <a
            href="#cta"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Book an Assessment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;