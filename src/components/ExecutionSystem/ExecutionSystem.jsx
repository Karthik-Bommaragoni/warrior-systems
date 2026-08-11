import React from "react";
import "./ExecutionSystem.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, priorities, departments, workflows, and bottlenecks.",
    items: [
      "Business assessment",
      "Leadership priorities",
      "Workflow mapping",
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Design the operating structure your business needs to execute consistently.",
    items: [
      "System architecture",
      "Department workflows",
      "Ownership & accountability",
    ],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Build the workflows, dashboards, tools, and systems around your business.",
    items: [
      "Custom workflows",
      "Dashboards",
      "Execution tools",
    ],
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Connect departments, existing systems, data, and automation into one flow.",
    items: [
      "Integrations",
      "Automation",
      "One source of truth",
    ],
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Launch the system and establish the operating rhythm your team follows.",
    items: [
      "Team adoption",
      "Operating rhythm",
      "Continuous improvement",
    ],
  },
];

function ExecutionSystem() {
  return (
    <section
      className="execution-system-section"
      id="execution-system"
    >
      <div className="execution-grid-bg" />

      <div className="execution-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="execution-header">

          <div className="execution-eyebrow">
            HOW WE BUILD IT
          </div>

          <h2>
            How We Build Your
            <br />
            <span>Execution System.</span>
          </h2>

          <p>
            We don't just install software. We build the operating
            system your company needs to execute.
          </p>

        </div>


        {/* =================================================
            PROCESS
        ================================================= */}

        <div className="execution-process">

          {/* Connecting line */}

          <div className="execution-process-line" />

          {steps.map((step, index) => (
            <React.Fragment key={step.number}>

              <div className="execution-step">

                <div className="execution-step-number">
                  {step.number}
                </div>

                <div className="execution-step-content">

                  <div className="execution-step-label">
                    STEP {step.number}
                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                  <div className="execution-items">

                    {step.items.map((item) => (
                      <span key={item}>
                        <i>✓</i>
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {index < steps.length - 1 && (
                <div className="execution-arrow">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>


        {/* =================================================
            RESULT
        ================================================= */}

        <div className="execution-result">

          <div className="execution-result-line" />

          <div className="execution-result-content">

            <div className="execution-result-icon">
              W
            </div>

            <div>

              <span>
                THE RESULT
              </span>

              <h3>
                A Business That Knows
                <strong> How To Execute.</strong>
              </h3>

              <p>
                Clear priorities. Clear ownership. Connected workflows.
                Visible performance.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ExecutionSystem;