import {
  BarChart3,
  Megaphone,
  UsersRound,
  Settings,
  DollarSign,
  Monitor,
} from "lucide-react";

import "./WarriorSystems.css";

const departments = [
  {
    name: "SALES",
    text: "Pipeline, Forecasting\n& Customer Success",
    icon: BarChart3,
    position: "sales",
  },
  {
    name: "MARKETING",
    text: "Demand, Campaigns\n& Growth",
    icon: Megaphone,
    position: "marketing",
  },
  {
    name: "PEOPLE",
    text: "Hiring, Performance\n& Development",
    icon: UsersRound,
    position: "people",
  },
  {
    name: "OPERATIONS",
    text: "Workflows, Projects\n& Execution",
    icon: Settings,
    position: "operations",
  },
  {
    name: "FINANCE",
    text: "Planning, Reporting\n& Cash Flow",
    icon: DollarSign,
    position: "finance",
  },
  {
    name: "TECHNOLOGY",
    text: "Tools, Integrations\n& Infrastructure",
    icon: Monitor,
    position: "technology",
  },
];

function WarriorSystems() {
  return (
    <section className="warrior-systems" id="warrior-systems">
      <div className="warrior-systems-inner">

        {/* LEFT CONTENT */}
        <div className="warrior-copy">

          <div className="warrior-eyebrow">
            <span />
            WARRIOR SYSTEMS
          </div>

          <h2>
            One operating system.
            <br />
            <em>Every part of your business.</em>
          </h2>

          <p>
            Connected systems, shared data, and clear workflows —
            all working together to drive execution.
          </p>

          <button className="warrior-button">
            See How It Works
            <span>→</span>
          </button>

        </div>


        {/* SYSTEM MAP */}
        <div className="system-map">

          <div className="system-lines" />

          {/* CENTER */}
          <div className="system-core">
            <div className="core-mark">W</div>

            <strong>WARRIOR</strong>
            <small>SYSTEMS</small>
          </div>


          {/* DEPARTMENTS */}
          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <div
                className={`department ${department.position}`}
                key={department.name}
              >
                <div className="department-icon">
                  <Icon size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3>{department.name}</h3>

                  <p>
                    {department.text.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index === 0 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WarriorSystems;