import { ArrowUpRight } from "lucide-react";
import "./BuildSystem.css";

const systems = [
  {
    label: "SALES",
    title: "Custom CRM",
    items: [
      "Lead management",
      "Follow-ups",
      "Pipeline visibility",
      "Sales dashboards",
    ],
  },
  {
    label: "OPERATIONS",
    title: "Delivery Workflows",
    items: [
      "Orders",
      "Projects",
      "Production",
      "Task workflows",
      "Approvals",
      "Delivery tracking",
    ],
  },
  {
    label: "FINANCE",
    title: "Financial Systems",
    items: [
      "Collections",
      "Payments",
      "Approvals",
      "Cash-flow visibility",
      "Financial dashboards",
    ],
  },
  {
    label: "PEOPLE",
    title: "HR & Team Systems",
    items: [
      "Responsibilities",
      "Performance",
      "Timesheets",
      "Capacity",
    ],
  },
];

function SystemCard({ system }) {
  return (
    <article className="build-system-card">

      <div className="build-card-top">
        <span className="build-card-label">
          {system.label}
        </span>

        <span className="build-card-arrow">
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </span>
      </div>

      <h3>{system.title}</h3>

      <div className="build-card-tags">
        {system.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

    </article>
  );
}

function BuildSystem() {
  return (
    <section className="build-system-section" id="build-system">

      <div className="build-system-inner">

        {/* HEADER */}
        <div className="build-system-header">

          <div className="build-system-eyebrow">
            <span />
            HOW IT'S BUILT
          </div>

          <h2>
            We build the system
            <br />
            <em>around your business.</em>
          </h2>

          <p>
            Your company doesn't need another generic piece of software
            that forces you to change how you work.{" "}
            <strong>
              The software should work around your business.
            </strong>{" "}
            That's why we build custom workflows for each department.
          </p>

        </div>


        {/* SYSTEM CARDS */}
        <div className="build-system-grid">

          {systems.map((system) => (
            <SystemCard
              key={system.label}
              system={system}
            />
          ))}


          {/* LEADERSHIP */}
          <article className="build-system-card build-leadership-card">

            <div className="build-card-top">
              <span className="build-card-label">
                LEADERSHIP
              </span>

              <span className="build-card-arrow">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                />
              </span>
            </div>

            <h3>
              Management Control Tower
            </h3>

            <div className="build-card-tags">
              <span>Company priorities</span>
              <span>Department scorecards</span>
              <span>Critical decisions</span>
              <span>Bottlenecks</span>
              <span>At-risk priorities</span>
            </div>

          </article>

        </div>


        {/* BOTTOM CONNECTION */}
        <div className="build-system-footer">

          <p>
            And where necessary, we connect your existing systems
            through integrations and automation. Everything ultimately
            comes together inside:
          </p>

          <div className="warrior-os-badge">

            <div className="warrior-os-mark">
              W
            </div>

            <div>
              <strong>
                WARRIOR <span>OS™</span>
              </strong>

              <small>
                Your company's execution system.
              </small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BuildSystem;