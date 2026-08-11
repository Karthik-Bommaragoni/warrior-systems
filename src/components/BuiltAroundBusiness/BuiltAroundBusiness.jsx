import React from "react";
import "./BuiltAroundBusiness.css";

const buildCards = [
  {
    tag: "SALES",
    title: "Custom CRM",
    items: [
      "Lead management",
      "Follow-ups",
      "Pipeline visibility",
      "Sales dashboards",
    ],
    accent: "green",
  },
  {
    tag: "OPERATIONS",
    title: "Delivery Workflows",
    items: [
      "Orders",
      "Projects",
      "Production",
      "Task workflows",
      "Approvals",
      "Delivery tracking",
    ],
    accent: "blue",
  },
  {
    tag: "FINANCE",
    title: "Financial Systems",
    items: [
      "Collections",
      "Payments",
      "Approvals",
      "Cash-flow visibility",
      "Financial dashboards",
    ],
    accent: "gold",
  },
  {
    tag: "PEOPLE",
    title: "HR & Team Systems",
    items: [
      "Responsibilities",
      "Performance",
      "Timesheets",
      "Capacity",
    ],
    accent: "purple",
  },
];

function BuiltAroundBusiness() {
  return (
    <section className="built-section" id="built-for-you">
      <div className="built-container">

        {/* Heading */}
        <div className="built-header">
          <div className="built-eyebrow">
            <span></span>
            HOW IT'S BUILT
          </div>

          <h2>
            WE BUILD THE SYSTEM
            <br />
            <span>AROUND YOUR BUSINESS.</span>
          </h2>

          <p>
            Your company doesn't need another generic piece of software
            that forces you to change how you work.{" "}
            <strong>The software should work around your business.</strong>{" "}
            That's why we build custom workflows for each department.
          </p>
        </div>

        {/* Department Cards */}
        <div className="build-grid">
          {buildCards.map((card) => (
            <div
              className={`build-card build-card-${card.accent}`}
              key={card.tag}
            >
              <div className="build-card-top">
                <span className="build-tag">{card.tag}</span>

                <span className="build-arrow">↗</span>
              </div>

              <h3>{card.title}</h3>

              <div className="build-items">
                {card.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Leadership */}
          <div className="build-card leadership-card">
            <div className="leadership-content">
              <div className="build-card-top">
                <span className="build-tag">LEADERSHIP</span>

                <span className="build-arrow">↗</span>
              </div>

              <h3>Management Control Tower</h3>

              <div className="build-items">
                <span>Company priorities</span>
                <span>Department scorecards</span>
                <span>Critical decisions</span>
                <span>Bottlenecks</span>
                <span>At-risk priorities</span>
              </div>
            </div>

            <div className="control-tower">
              <div className="tower-dot"></div>
              <div className="tower-line"></div>
              <div className="tower-dot"></div>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="built-bottom">
          <p>
            And where necessary, we connect your existing systems through
            integrations and automation. Everything ultimately comes together
            inside:
          </p>

          <div className="warrior-os">
            <div className="os-icon">
              W
            </div>

            <div>
              <h4>WARRIOR <span>OS™</span></h4>
              <p>Your company's execution system.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BuiltAroundBusiness;