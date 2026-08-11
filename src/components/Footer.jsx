import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const navigation = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#problem" },
  { label: "7 Laws", href: "#laws" },
  { label: "Warrior Systems", href: "#warrior-systems" },
  { label: "MASTERY™", href: "#mastery" },
];

const systems = [
  { label: "Marketing", href: "#systems" },
  { label: "Accounts & Finance", href: "#systems" },
  { label: "Sales", href: "#systems" },
  { label: "Operations", href: "#systems" },
  { label: "Leadership", href: "#systems" },
];

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-grid-bg" />

      <div className="footer-container">

        {/* =================================================
            TOP
        ================================================= */}

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <a href="#home" className="footer-logo">

              <div className="footer-logo-mark">
                W
              </div>

              <div className="footer-logo-text">
                <strong>WARRIOR</strong>
                <span>OS™</span>
              </div>

            </a>

            <p>
              Build the system your business needs
              to execute, scale, and lead.
            </p>

            <a
              href="#final-cta"
              className="footer-cta"
            >
              Build Your System
              <span>→</span>
            </a>

          </div>


          {/* NAVIGATION */}

          <div className="footer-column">

            <h3>
              NAVIGATE
            </h3>

            <div className="footer-links">

              {navigation.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}

            </div>

          </div>


          {/* SYSTEMS */}

          <div className="footer-column">

            <h3>
              SYSTEMS
            </h3>

            <div className="footer-links">

              {systems.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}

            </div>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h3>
              LET'S BUILD
            </h3>

            <p>
              Ready to move from founder-dependent
              to system-driven?
            </p>

            <a
              href="mailto:hello@warrioros.com"
              className="footer-email"
            >
              hello@warrioros.com
            </a>

            <Link
              to="/assessment"
              className="footer-assessment"
            >
              Book an Execution Assessment
              <span>↗</span>
            </Link>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="footer-divider" />


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <div className="footer-copyright">
            © {new Date().getFullYear()} Warrior OS™.
            All rights reserved.
          </div>

          <div className="footer-bottom-links">

            <a href="#privacy">
              Privacy
            </a>

            <a href="#terms">
              Terms
            </a>

          </div>

          <div className="footer-tagline">
            ONE COMPANY.
            <span> ONE SYSTEM.</span>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;