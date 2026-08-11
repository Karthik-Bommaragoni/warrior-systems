import React from "react";
import "./FounderTransformation.css";

const founderDependent = [
  "Founder chases updates",
  "Decisions wait for the founder",
  "Priorities live in people's heads",
  "Departments work in isolation",
  "Problems reach leadership late",
  "Growth creates more complexity",
];

const systemDriven = [
  "Leaders see the numbers",
  "Decisions have clear owners",
  "Priorities live in the system",
  "Workflows are connected",
  "Problems surface early",
  "Growth creates structure",
];

function FounderTransformation() {
  return (
    <section
      className="founder-transform-section"
      id="founder-transformation"
    >
      <div className="founder-transform-grid" />

      <div className="founder-transform-container">

        {/* HEADER */}

        <div className="founder-transform-header">

          <div className="founder-transform-eyebrow">
            THE TRANSFORMATION
          </div>

          <h2>
            From Founder-Dependent
            <br />
            <span>To System-Driven.</span>
          </h2>

          <p>
            The goal isn't to make the founder work harder.
            It's to build a business that can execute without
            everything running through one person.
          </p>

        </div>


        {/* TRANSFORMATION */}

        <div className="founder-transform-flow">

          {/* FOUNDER DEPENDENT */}

          <div className="transform-panel founder-panel">

            <div className="transform-panel-header">

              <span className="transform-number">
                01
              </span>

              <span className="transform-status">
                BEFORE
              </span>

            </div>

            <h3>
              Founder-Dependent
            </h3>

            <p className="transform-panel-description">
              Everything depends on the founder knowing,
              deciding, and following up.
            </p>

            <div className="transform-list">

              {founderDependent.map((item) => (
                <div
                  className="transform-list-item"
                  key={item}
                >
                  <span className="transform-icon warning">
                    !
                  </span>

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>


          {/* CENTER */}

          <div className="transform-center">

            <div className="transform-line" />

            <div className="transform-arrow">
              →
            </div>

            <span>
              SYSTEMIZE
            </span>

          </div>


          {/* SYSTEM DRIVEN */}

          <div className="transform-panel system-panel">

            <div className="transform-panel-header">

              <span className="transform-number">
                02
              </span>

              <span className="transform-status">
                AFTER
              </span>

            </div>

            <h3>
              System-Driven
            </h3>

            <p className="transform-panel-description">
              The business has visibility, ownership,
              rhythm, and connected workflows.
            </p>

            <div className="transform-list">

              {systemDriven.map((item) => (
                <div
                  className="transform-list-item"
                  key={item}
                >
                  <span className="transform-icon success">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>


        {/* PAYOFF */}

        <div className="founder-transform-payoff">

          <div className="payoff-line" />

          <div className="payoff-content">

            <span className="payoff-label">
              THE PAYOFF
            </span>

            <h3>
              The Business Runs
              <br />
              <span>Without Everything Running Through You.</span>
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FounderTransformation;