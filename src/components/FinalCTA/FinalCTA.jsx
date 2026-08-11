import React from "react";
import "./FinalCTA.css";
import { Link } from "react-router-dom";
function FinalCTA() {
  return (
    <section className="final-cta-section" id="final-cta">
      <div className="final-cta-grid" />

      <div className="final-cta-container">

        {/* EYEBROW */}
        <div className="final-cta-eyebrow">
          <span />
          READY TO BUILD THE SYSTEM?
          <span />
        </div>

        {/* HEADING */}
        <h2 className="final-cta-heading">
          STOP RUNNING
          <br />
          <span>EVERYTHING</span> THROUGH YOU.
        </h2>

        <h3 className="final-cta-subheading">
          START BUILDING A BUSINESS
          <br />
          THAT <span>EXECUTES.</span>
        </h3>

        {/* DESCRIPTION */}
        <p className="final-cta-description">
          See where your business is losing execution clarity
          and what it would take to build the right system.
        </p>

        {/* CTA */}
        <Link
        to ="/assessment"
          className="final-cta-button"
        >
          <span>Book an Execution Assessment</span>
          <span className="final-cta-arrow">→</span>
        </Link>

        {/* BOTTOM LINE */}
        <div className="final-cta-footer">
          <span>□</span>
          One Company.
          <span>◇</span>
          One Operating System.
          <span>◎</span>
          One Clear View.
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;