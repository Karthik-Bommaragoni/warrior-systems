import {
  Target,
  UserRound,
  ShieldCheck,
  CalendarDays,
  Eye,
  ArrowLeftRight,
  Flag,
} from "lucide-react";

import "./SevenLaws.css";

const laws = [
  {
    number: "01",
    title: "CLARITY",
    description:
      "Everyone knows what matters, what happens next, and why.",
    icon: Target,
  },
  {
    number: "02",
    title: "OWNERSHIP",
    description:
      "Every important outcome has a clear owner.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "ACCOUNTABILITY",
    description:
      "Commitments are tracked, followed up, and completed.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "RHYTHM",
    description:
      "The right meetings, cadence, and disciplines keep the business moving.",
    icon: CalendarDays,
  },
  {
    number: "05",
    title: "VISIBILITY",
    description:
      "Real-time visibility exposes issues early and drives better decisions.",
    icon: Eye,
  },
  {
    number: "06",
    title: "ALIGNMENT",
    description:
      "Teams, goals, and priorities are aligned across the company.",
    icon: ArrowLeftRight,
  },
  {
    number: "07",
    title: "EXECUTION",
    description:
      "Execution isn't an event. It's the habit that compounds.",
    icon: Flag,
  },
];

function SevenLaws() {
  return (
    <section className="seven-laws-section" id="laws">
      <div className="seven-laws-container">
        <div className="laws-section-divider">
  <span />
  <div className="laws-divider-mark" />
  <span />
</div>
        {/* Section Header */}
        <header className="seven-laws-header">
          <div className="seven-laws-eyebrow">
            <span className="seven-laws-eyebrow-line" />
            <span>THE FRAMEWORK</span>
            <span className="seven-laws-eyebrow-line" />
          </div>

          <h2>
            7 Laws of <span>Execution.</span>
          </h2>

          <p>
            Seven principles that turn strategy into predictable execution.
          </p>
        </header>

        {/* Main Framework */}
        <div className="laws-framework">

          {/* Decorative label */}
          <div className="framework-label">
            THE EXECUTION SYSTEM
          </div>

          {/* Connected line */}
          <div className="laws-connector" />

          <div className="laws-grid">
            {laws.map((law) => {
              const Icon = law.icon;

              return (
                <article className="law-card" key={law.number}>

                  <div className="law-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <div className="law-stem" />

                  <span className="law-number">
                    {law.number}
                  </span>

                  <h3>{law.title}</h3>

                  <p>{law.description}</p>

                </article>
              );
            })}
          </div>

          {/* Bottom framework statement */}
          <div className="framework-footer">
            <span />
            <p>
              Strategy becomes execution when these principles work together.
            </p>
            <span />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SevenLaws;