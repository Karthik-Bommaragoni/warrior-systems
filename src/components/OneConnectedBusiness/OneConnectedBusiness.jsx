import React from "react";
import "./OneConnectedBusiness.css";

const businessFlow = [
  {
    letter: "M",
    department: "MARKETING",
    title: "Create Demand",
    description: "Generate opportunities",
    accent: "green",
  },
  {
    letter: "S",
    department: "SALES",
    title: "Convert",
    description: "Turn opportunities into customers",
    accent: "blue",
  },
  {
    letter: "O",
    department: "OPERATIONS",
    title: "Deliver",
    description: "Execute the work",
    accent: "gold",
  },
  {
    letter: "F",
    department: "FINANCE",
    title: "Manage Money",
    description: "Track revenue and cash",
    accent: "purple",
  },
  {
    letter: "L",
    department: "LEADERSHIP",
    title: "See Everything",
    description: "Make better decisions",
    accent: "orange",
  },
];

function OneConnectedBusiness() {
  return (
    <section
      className="connected-business-section"
      id="one-connected-business"
    >
      <div className="connected-business-grid" />

      <div className="connected-business-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="connected-business-header">

          <div className="connected-eyebrow">
            <span></span>
            ONE CONNECTED BUSINESS
            <span></span>
          </div>

          <h2>
            DIFFERENT DEPARTMENTS.
            <br />
            <span>ONE CONNECTED SYSTEM.</span>
          </h2>

          <p>
            Your business works as one system when information,
            decisions and accountability move together.
          </p>

        </div>


        {/* =================================================
            FLOW
        ================================================= */}

        <div className="business-flow">

          <div className="flow-line"></div>

          {businessFlow.map((item, index) => (
            <React.Fragment key={item.department}>

              <div className={`flow-card flow-${item.accent}`}>

                <div className="flow-card-top">

                  <div className="flow-letter">
                    {item.letter}
                  </div>

                  <span className="flow-index">
                    0{index + 1}
                  </span>

                </div>

                <div className="flow-department">
                  {item.department}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              {index < businessFlow.length - 1 && (
                <div className="flow-arrow">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>


        {/* =================================================
            RESULT
        ================================================= */}

        <div className="business-result">

          <div className="result-line"></div>

          <div className="result-content">

            <div className="result-icon">
              ✓
            </div>

            <div>
              <span>THE RESULT</span>

              <h3>
                BUSINESS RESULTS
              </h3>

              <p>
                One source of truth. One direction.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OneConnectedBusiness;